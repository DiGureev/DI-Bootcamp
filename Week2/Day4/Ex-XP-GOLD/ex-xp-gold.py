# Exercise 1 : When Will I Retire ?
# Instructions
# The point of the exercise is to check if a person can retire depending on their age and their gender.
# Note : Let’s say retirement age is 67 for men, and 62 for women (born after April, 1947).

# Create a function get_age(year, month, day)   
# Hard-code the current year and month in your code (there are better ways of doing this, but for now it will be enough.)
# After calculating the age of a person, the function should return the age (the age is an integer).
# Create a function can_retire(gender, date_of_birth).
# It should call the get_age function (with what arguments?) in order to receive an age.
# Now it has all the information it needs in order to determine if the person with the given gender and date of birth is able to retire or not.
# Calculate. You may need to do a little more hard-coding here.
# Return True if the person can retire, and False if he/she can’t.

# user_birthday = input('When is your birthday? Answer YYYY/MM/DD: ')
# user_gender = input("What is your gender: 'm'or 'f'? ")

# date = user_birthday.split('/')

# year = int(date[0])
# month = int(date[1])

# cur_year = 2023
# cur_month = 9

# def get_age(year, month):
#     user_age = ((cur_year*12 + cur_month) - (year*12 + month))/12
#     if user_gender == 'f'and user_age >= 62:
#         print(f'You are {int(user_age)} years old, you can retire')
#     elif user_gender == 'm'and user_age>= 67:
#         print(f'You are {int(user_age)} years old, you can retire')
#     else:
#         print(f'You are {int(user_age)} years old, you cant retire yet')

# get_age(year, month)


# Exercise 2 : Sum
# Instructions
# Write a function that accepts one parameter (an int: X) and returns the value of X+XX+XXX+XXXX.
# Example:
# If X=3, the output when calling our function should be 3702 (3 + 33 + 333 + 3333)

# Hint: treating our number as a int or a str at different points in our code may be helpful

# x = '5'

# def sum_num (x):
#     start = 0
#     for a in range(1,5):
#         b = x*a
#         start += int(b)

#     print(start)

# sum_num(x)

# Exercise 3 : Double Dice
# Instructions
# Create a function that will simulate the rolling of a dice. Call it throw_dice. It should return an integer between
# 1 and 6.
# Create a function called throw_until_doubles.
# It should keep throwing 2 dice (using your throw_dice function) until they both land on the same number, ie. until we reach doubles.
# For example: (1, 2), (3, 1), (5,5) → then stop throwing, because doubles were reached.
# This function should return the number of times it threw the dice in total. In the example above, it should return 3.

# import random

# def throw_dice():
#     return random.randrange(1,6)

# def throw_until_doubles():
#     a = throw_dice()
#     b = throw_dice()
#     while a != b:
#         a = throw_dice()
#         b = throw_dice()
#     print(f'We have double: {a}:{b}!')



# def throw_until_doubles():
#     a = throw_dice()
#     b = throw_dice()
#     if a != b:
#         return False
#     return True, a , b

# def main():
#     counter = 0
#     double = 0
#     while double != 100:
#         x = throw_until_doubles()
#         if x == False:
#             counter += 1
#         else:
#             counter += 1
#             double += 1
#     aver = round(counter/double, 2)
#     print(f'We have {double} doubles, it takes {counter} times to throw')
#     print(f'Average throws to reach doubles: {aver}')

# main()


# Create a main function.
# It should throw doubles 100 times (ie. call your throw_until_doubles function 100 times), and store the results of those function calls (in other words, how many throws it took until doubles were thrown, each time) in a collection. 
# (What kind of collection? Read below to understand what we will need the data for, and this should help you decide which data structure to use).

# After the 100 doubles are thrown, print out a message telling the user how many throws it took in total to reach 100 doubles.
# Also print out a message telling the user the average amount of throws it took to reach doubles. Round this off to 2 decimal places.
# For example:

# If the results of the throws were as follows (your code would do 100 doubles, not just 3):
# (1, 2), (3, 1), (5, 5)
# (3, 3)
# (2, 4), (1, 2), (3, 4), (2, 2)

# Then my output would show something like this:
# Total throws: 8
# Average throws to reach doubles: 2.67.