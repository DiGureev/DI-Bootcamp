import psycopg2
import psycopg2.extras
from dotenv import load_dotenv
import os
import maskpass

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
    # create table users (
    #     id serial primary key,
    #     username varchar(100) not null,
    #     password varchar(100) not null
    # )'''
    # q2 = '''
    # select * from users'''

    # Executor.run_commit(q1)
    # print(Executor.run_fetch(q2))

def insert_into(username, password):
    q1 = f'''
    insert into users (username, password)
    values
    ('{username}', '{password}')
    ;
    '''
    Executor.run_commit(q1)

def check_user(username):
    q1 = f'''
    select username from users where username = '{username}'
    '''
    return Executor.run_fetch(q1)

def check_password(username, password):
    q1 = f'''
    select username, password from users where username = '{username}' and password = '{password}'
    '''
    return Executor.run_fetch(q1)

def get_logged_in():
    logged_in = False

    while logged_in == False:
        user_input = input('What do you want? Type 1 to log in, type 2 to exit: ')
        if user_input == '2':
            break
        else: 
            username = input('Type your username: ')
            if check_user(username) == []:
                print('This user does not exist')
                sign_in()
            else:
                while True:
                    password = maskpass.askpass(prompt='Enter your password: ', mask='*')
                    if check_password(username, password) != []:
                        print('You are now logged in')
                        break
                    else:
                        print('Password is not correct. Try again')
        logged_in = True
            
def sign_in():
    sign_in = False
    while sign_in == False:
        user_input = input('Whould you like to sign in? Type 1 to sign in, type 2 to exit:')
        if user_input == '2':
            break
        else:
            username = input('Create username: ')
            if check_user(username) == []:
                password = maskpass.askpass(prompt='Enter your password: ', mask='*')
                insert_into(username, password)
                sign_in = True
    get_logged_in()
    
get_logged_in()
