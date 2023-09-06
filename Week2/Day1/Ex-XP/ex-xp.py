# Ex-1

# Print the following output in one line of code:

# Hello world
# Hello world
# Hello world
# Hello world

#ANSWER

# a = "Hello world \n"

# print(a*4)

# Ex-2

# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

# ANSWER

# a = 99 ** 3

# print(a*8)

#Ex-3

# Predict the output of the following code snippets:
# >>> 5 < 3 → False
# >>> 3 == 3 → True
# >>> 3 == "3" → False
# >>> "3" > 3 → Error
# >>> "Hello" == "hello" → False

#Ex-4

# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

# ANSWER

# computer_brand = "Lenovo"

# print(f"I have a {computer_brand} computer")

# Ex-5

# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

#ANSWER

# name = "Diana"
# age = 31
# shoe_size = 41
# info = f"My name is {name} and I am {age} years old. Today I bought a {shoe_size} size shoes for myself."
# print(info)

# Ex-6

# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

#ANSWER

# a = 9
# b = 7

# if a > b :
#     print("Hello World")
# else:
#     print("No")

#Ex-7

# Write code that asks the user for a number and determines whether this number is odd or even.

# user_choice = int(input("Give me the number \n"))

#ANSWER

# if user_choice % 2 == 0 :
#     print("odd")
# else: 
#     print("even")

#Ex-8

# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

#ANSWER

# user_choice = input("What is your name?\n")

# if user_choice == "Diana":
#     print("Wow! I have same name!")
# else :
#     print("Nice!")

#Ex-9

# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

#ANSWER

# user_choice = float(input("What is your height in inches usind period '.'?\n"))

# if user_choice * 2.54 > 145:
#     print("You are tall enough to ride!")
# else:
#     print("You need to grow some more to ride :(")