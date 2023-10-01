import psycopg2
import psycopg2.extras
from datetime import datetime
from dotenv import load_dotenv
import os

load_dotenv()

DB_NAME = os.environ.get("DB_NAME")
USER = os.environ.get("USER") 
PASSWORD = os.environ.get("PASSWORD")
HOST = os.environ.get("HOST")
PORT = os.environ.get("PORT")

class Executor:

    @staticmethod
    def establish_connection():
        try:
            connection = psycopg2.connect(
                dbname = DB_NAME,
                user = USER,
                password = PASSWORD,
                host = HOST,
                port = PORT
            )
        except Exception as e:
            print(f"Error: {e}")

        return connection
    
    @staticmethod
    def run_commit(query: str):
        with Executor.establish_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(query)
            conn.commit()
            
    @staticmethod
    def run_fetch(query: str, many=True): 
        with Executor.establish_connection() as conn:
            cursor = conn.cursor()
            cursor.execute(query)
            if not many:
                output = cursor.fetchone()
            else:
                output = cursor.fetchall()
        
        return output
    

# if __name__ == "__main__":
    # q1 = '''
    # create table AllEvents (
    #     id serial primary key,
    #     title varchar,
    #     date date,
    #     link varchar
    # )'''

def check_availble_dvd():
    query = '''
        select title from film 
        where rating in ('G', 'PG')
        and (film_id in 
            (select film.film_id from film
            full join inventory
            on film.film_id = inventory.film_id
            full join rental
            on rental.inventory_id = inventory.inventory_id 
            where rental.rental_date is null)
            or
            (film.title not in 
            (select film.title from film
            inner join inventory
            on film.film_id = inventory.film_id
            inner join rental
            on rental.inventory_id = inventory.inventory_id 
            where rental.rental_date is not null and rental.return_date is null)
            ))
    '''
    return Executor.run_fetch(query)

def insert_into_waitlist(table_name, title, child_name):
    if (title,) in check_availble_dvd():
        query = f'''
        insert into {table_name}(film_id, child_name)
        values
        ((select film_id from film where title = '{title}'), '{child_name}');
        '''
        Executor.run_commit(query)


def del_child(table_name, child_name):    
    query1 = f'''
        delete * from {table_name} where child_name = '{child_name}'
        '''
    query2 = f'''
        select * from {table_name}
        '''
    Executor.run_commit(query1)
    return Executor.run_fetch(query2)

def number_children(table_name):
    query = f'''
        select count(child_name), film_id from {table_name} group by film_id
        '''
    return Executor.run_fetch(query)