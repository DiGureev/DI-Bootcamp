# Exercise 1: Currencies
# Instructions

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#ANSWER 

    # def __str__(self):
    #     return f"{self.amount} {self.currency}s"

    # def __int__(self):
    #     return (self.amount)

    # def __repr__(self):
    #     return f"{self.amount} {self.currency}s"
    
    # def __iadd__(self, num):
    #     if type(num) is int:
    #         self.amount += num
    #         return f"{self.amount} {self.currency}s"
    #     elif isinstance(num, Currency):
    #         if num.currency == self.currency:
    #             self.amount += num.amount
    #             return f"{self.amount} {self.currency}s"
    #         raise TypeError(f"Cannot add between Currency type {self.currency} and {num.currency}")

    # def __add__(self, num):
    #     if type(num) is int:
    #        return self.amount + num
    #     elif isinstance(num, Currency):
    #         if num.currency == self.currency:
    #             return self.amount + num.amount
    #         raise TypeError(f"Cannot add between Currency type {self.currency} and {num.currency}")



# Using the code above, implement the relevant methods 
#and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share 
#the same label you should raise an error.

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(repr(c1))

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> 
#and <shekel>


# 🌟 Exercise 2: Import
# Instructions
# In a file named func.py create a function that adds 
#2 number, and prints the result
# In a file namedexercise_one.py import and the 
#function
# Hint: You can use the the following syntaxes:

# import module_name 

# OR 

#ANSWER

# from func import __add__

# print(__add__(2,3))

# OR 

# from module_name import function_name as fn 

# OR

# import module_name as mn


# 🌟 Exercise 3: Random Module
# Instructions
# Create a function that accepts a number between 1 and
# 100, then rolls a random number between 1 and 100,
# if it’s the same number, display a success message 
#to the user, else don’t.

#ANSWER

# import random

# def play(a = input('Give me the number between 1 and 100: ')):
#     b = random.randrange(100)
#     if a == b:
#         print('Wow, congrats! You win')
#     else:
#         print('Try again')

# play()


# 🌟 Exercise 4: String Module
# Instructions
# Generate random String of length 5
# Note: String must be the combination of the UPPER 
#case and lower case letters only. No numbers and a 
#special symbol.
# Hint: use the string module

#ANSWER

# import random
# import string

# def rand_str(length):
#     letters = string.ascii_letters
#     result_str = ''

#     for i in range(length):
#         i = random.choice(letters) 
#         result_str += i
#     print(f"Random string of length {length} is: {''.join(result_str)}")

# rand_str(5)


# 🌟 Exercise 5 : Current Date
# Instructions
# Create a function that displays the current date.
# Hint : Use the datetime module.

#ANSWER

# import datetime

# def date():
#     today_date = datetime.date.today()
#     print(f'Today {today_date}')
#     return today_date

# date()


# Exercise 6 : Amount Of Time Left Until January 1st
# Instructions
# Create a function that displays the amount of time 
#left from now until January 1st.
# (Example: the 1st of January is in 10 days and 
#10:34:01hours).

#ANSWER 

# import datetime

# today = datetime.datetime.now()
# string_date = "1/01/2024"
# dt = datetime.datetime.strptime(string_date, "%d/%m/%Y")
# amount = dt - today

# print(f'Till 1 January we have {amount.days} and {int(amount.seconds/3600)} hours')


# Exercise 7 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an 
#argument (in the format of your choice), then displays 
#a message stating how many minutes the user lived in 
#his life.

#ANSWER

# import datetime

# def how_many(birthday = input('Please input your birthday in format "1/01/2024": ')):
#     dt = datetime.datetime.strptime(birthday, "%d/%m/%Y")
#     cur_time = datetime.datetime.now()
#     live_time = cur_time - dt
#     print(f'You live in this planet {live_time.days*1440} minutes')

# how_many()


# Exercise 8 : Faker Module
# Instructions
# Install the faker module, and take a look at the 
#documentation and learn how to properly implement 
#faker in your code.
# Create an empty list called users. Tip: It should 
#be a list of dictionaries.
# Create a function that adds new dictionaries 
#to the users list. Each user has the following keys: 
#name, adress, langage_code. Use faker to populate 
#them with fake data.

#ANSWER

# from faker import Faker


# users = [

# ]

# def fake():
#     fake = Faker()
#     fake_dict = {
#         'Name':'',
#         'Adress':'',
#         'language_code': '',
#     }
#     for _ in range(8):
#         fake_dict['Name'] = fake.name()
#         fake_dict['Adress'] = fake.address()
#         fake_dict['language_code'] = fake.text() #I dont know what did you mean by language code, so I put text
#         users.append(fake_dict)

# fake()
# print(users)

