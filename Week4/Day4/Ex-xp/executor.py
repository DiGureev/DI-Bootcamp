import psycopg2
import psycopg2.extras
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
    
if __name__ == "__main__":
    q1 = '''
    create table Menu_Items(
        item_id serial primary key,
        item_name varchar(30) not null,
        item_price smallint default 0
    )'''
    q2 = '''
    select * from Menu_Items'''

    # Executor.run_commit(q1)
print(Executor.run_fetch(q2))