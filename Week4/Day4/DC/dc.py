import psycopg2
import psycopg2.extras
from dotenv import load_dotenv
import os
import requests
from random import sample

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
#     q1 = '''
#     create table Countries(
#         id serial primary key,
#         name varchar,
#         capital varchar,
#         flag varchar,
#         subregion varchar,
#         population integer
#     )'''
#     q2 = '''
#     select * from Countries'''

#     Executor.run_commit(q1)
#     # print(Executor.run_fetch(q2))

def insert_into_table(table_name, name, capital, flag, subregion, population):
    query = f'''
    insert into {table_name}(name, capital, flag, subregion, population)
    values
    ('{name}',
    '{capital}',
    '{flag}',
    '{subregion}',
    {population})
    '''
    Executor.run_commit(query)

url = 'https://restcountries.com/v3.1/all'

response = requests.get(url)

data = response.json()

countries = sample(data, 10)

for country in countries:
    name = country['name']['common']
    capital = country.get('capital')[0]
    flag = country.get('flag')
    subregion = country.get('subregion')
    population = country.get('population')
    insert_into_table('Countries', name, capital, flag, subregion, population)