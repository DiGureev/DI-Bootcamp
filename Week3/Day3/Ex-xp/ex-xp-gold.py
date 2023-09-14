# Exercise 1 : Upcoming Holiday
# Instructions
# Write a function that displays today’s date.
# The function should also display the amount of time left from now until the next upcoming holiday and print 
#which holiday that is. (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

#ANSWER

# from datetime import datetime

# def today():
#     cur_date = datetime.now()
#     roshashana_date = datetime(2023, 9, 15)
#     roshashana_name = 'Rosh-a-shana'
#     holyday = roshashana_date - cur_date

#     print(f'Nearest holyday is {roshashana_name} in {holyday}')

# today()

# Exercise 2 : How Old Are You On Jupiter?
# Instructions
# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old, the function should output that they are 31.69 
#Earth-years old.

#ANSWER

# def how_old(age):
#     one_year = 31557600
#     mercury = one_year*0.2408467
#     venus = one_year*0.61519726 
#     mars = one_year*1.8808158
#     jupiter = one_year*11.862615
#     saturn = one_year*29.447498
#     uranus = one_year*84.016846
#     neptune = one_year*164.79132

#     print(f'Your age {(age/one_year)} Earth-years old')
#     print(f'Your age on Mercury {(age/mercury)} years old')

# how_old(1000000000)


# Exercise 3 : Regular Expression #1
# Instructions
# Hint: Use the RegEx (module)

# Use the regular expression module to extract numbers from a string.

# Example

# return_numbers('k5k3q2g5z6x9bn') 
# // Excepted output : 532569

#ANSWER

# import re

# def return_numbers(string):
#     return ''.join(re.findall(r'\d+', string))

# print(return_numbers('k5k3q2g5z6x9bn'))

# Exercise 4 : Regular Expression #2
# Instructions
# Hint: Use the RegEx (module)

# Ask the user for their full name (example: “John Doe”), and check the validity of their answer:
# The name should contain only letters.
# The name should contain only one space.
# The first letter of each name should be upper cased.

#ANSWER

# import re

# def check(full_name):
   
#     if bool(re.match("^[A-Za-z ]", full_name)) and len((re.findall("\s", full_name))) == 1 and len(re.findall(r'([A-Z])', full_name)) ==2:
#         return True
#     else:
#         return False

# print(check('John Doe'))

# Exercise 5: Python Password Generator
# Instructions
# Create a Python program that will generate a good password for you.

# Program flow:
# Ask the user to type in the number of characters that the password should have (password length) – between 6 and 
#30 characters.

# Validate the input. Make sure the user is inputing a number between 6 to 30. Create a loop which will continue 
#to ask the user for an input until they enter a valid one.

#ANSWER

# import re
# import random
# import string

# def gen_password():
#     while True:
#         user_input = input('How many characters password shound consist of? Choose the number from 6 to 30: ')
#         if 6 < int(user_input) < 30:
#             break
#         else:
#             ('Wrong number')

#     characters = string.ascii_letters + string.digits + string.punctuation
#     pattern = r"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{6,30}$"
#     password = ''.join(random.choice(characters) for i in range(int(user_input)))
#     while bool(re.match(pattern, password)) == False:
#         password = ''.join(random.choice(characters) for i in range(int(user_input)))
#     else:
#         print(f'Your password: {password}')

# gen_password()

# Generate a password with the required length.

# Print the password with a user-friendly message which reminds the user to keep the password in a safe place!

# Rules for the validity of the password


# Each password should contain:
# At least 1 digit (0-9)
# At least 1 lower-case character (a-z)
# At least 1 upper-case character (A-Z)
# At least 1 special character (eg. !, @, #, $, %, ^, _, …)
# Once there is at least 1 of each, the rest of the password should be composed of more characters from the 
#options presented above.

# Create a test function first!

# Do the following steps 100 times, with different password lengths:
# Generate a password.
# Test the password to ensure that:
# it fulfills all the requirements above (eg. it has at least one digit, etc.)
# it has the specified length.