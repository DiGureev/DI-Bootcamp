# Exercise 1 : What Are You Learning ?
# Instructions
# Write a function called display_message() that prints 
#one sentence telling everyone what you are learning in this course.
# Call the function, and make sure the message displays correctly.

#ANSWER

# def display_message():
#     print('We are learning functions')

# display_message()


# 🌟 Exercise 2: What’s Your Favorite Book ?
# Instructions
# Write a function called favorite_book() that accepts one parameter called 
# title.
# The function should print a message, such as "One of my favorite books 
# is <title>".
# For example: “One of my favorite books is Alice in Wonderland”
# Call the function, make sure to include a book title as an argument 
# when calling the function.

#ANSWER

# def favorite_book(title):
#     print(f'So, your fav book is {title}')

# title = input('What is your fav book?\n')
# favorite_book(title)

# 🌟 Exercise 3 : Some Geography
# Instructions
# Write a function called describe_city() that accepts the name of a city and its country as parameters.
# The function should print a simple sentence, such as "<city> is in <country>".
# For example “Reykjavik is in Iceland”
# Give the country parameter a default value.
# Call your function.

#ANSWER

# def describe_city(city, country = 'Israel'):
#     print(f'{city} in {country}')

# describe_city('TLV')

# Exercise 4 : Random
# Instructions
# Create a function that accepts a number between 1 and 100 and generates 
#another number randomly between 1 and 100.
# Compare the two numbers, if it’s the same number, display a success message,
# otherwise show a fail message and display both numbers.

#ANSWER

# import random

# a = random.randrange(1,100)

# def rand_number():
#     b = random.randrange(1,100)
#     if a == b:
#         print('Wow! You won!')
#     else:
#         print(f'Fail! {a} and {b} are not the same')

# rand_number()

# 🌟 Exercise 5 : Let’s Create Some Personalized Shirts !
# Instructions
# Write a function called make_shirt() that accepts a size and the text of 
#a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and 
#the message printed on it, such as "The size of the shirt is <size> and the 
#text is <text>"
# Call the function make_shirt().
# Modify the make_shirt() function so that shirts are large by default with 
# a message that reads “I love Python” by default.

#ANSWER

# def make_shirt(size = 'Large',text = 'I love Python'):
#     print(f'Your size is {size}, your text will be "{text}"')

# make_shirt()

# Make a large shirt with the default message

#ANSWER

# size = input('Your size?\n')

# def make_shirt(size,text="I love python"):
#     print(f'Your size is {size}, your text will be "{text}"')

# if size == "Large":
#     make_shirt('Large')
# else:
#     text = input('Your text?\n')
#     make_shirt(size,text)

# Make medium shirt with the default message

#ANSWER

# size = input('Your size?\n')

# def make_shirt(size,text="I love python"):
#     print(f'Your size is {size}, your text will be "{text}"')

# if size == "Medium":
#     make_shirt('Medium')
# else:
#     text = input('Your text?\n')
#     make_shirt(size,text)

# Make a shirt of any size with a different message.

#ANSWER

# size = input('What is your size?\n')

# def make_shirt():
#     if size == 'XS':
#         text = "You are XS"
#     elif size == 'S':
#         text = "You are S"
#     elif size == 'M':
#         text = "You are M"
#     elif size == 'L':
#         text = "You are L"
#     elif size == 'XL':
#         text = "You are XL"
#     print(f'Your size is {size}, your text will be "{text}"')

# make_shirt()

# Bonus: Call the function make_shirt() using keyword arguments.


# 🌟 Exercise 6 : Magicians …
# Instructions
# Using this list of magician’s names

# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    print(str(magician_names))

def make_great():
    for name in magician_names:
        name = name + 'The Great'
        magician_names.append(name)
    print(str(magician_names))
make_great()

# 🌟 Exercise 7 : Temperature Advice
# Instructions
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

get_random_temp()

# Create a function called main().
# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”

# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40

# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.


# 🌟 Exercise 8 : Star Wars Quiz
# Instructions
# This project allows users to take a quiz to test their Star Wars knowledge.
# The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

# Here is an array of dictionaries, containing those questions and answers

# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.