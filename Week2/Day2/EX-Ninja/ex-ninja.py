# Exercise 1: Formula
# Instructions
# Write a program that calculates and prints a value according to this given formula:
# Q = Square root of [(2 * C * D)/H]
# Following are the fixed values of C and H:
# C is 50.
# H is 30.
# Ask the user for a comma-separated string of numbers, use each number from the user as D in the formula and return all the results
# For example, if the user inputs: 100,150,180
# The output should be:

# 18,22,24

# import math

# C = 50
# H = 50
# user_input = input('Give me three numbers,separated by comma: ') #1,2,3
# D = list((user_input.split(",")))

# def some_formula(item):
#     return math.sqrt((2 * C * int(item))/H)
# Q = list(map(some_formula,(D)))
# print(Q)


# Exercise 2 : List Of Integers
# Instructions
# Given a list of 10 integers to analyze. For example:

#     [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
#     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2] 
#     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76] 
#     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]
# Store the list of numbers in a variable.

# some_numbers = [18, 19, 2, 56, 33, 17, 41, -63, -82, 1]

# Print the following information:
# a. The list of numbers – printed in a single line

# print(*some_numbers, sep = "\n")

# b. The list of numbers – sorted in descending order (largest to smallest)

# print(sorted(some_numbers))

# c. The sum of all the numbers

# print(sum(some_numbers))

# A list containing the first and the last numbers.

# other_list = [some_numbers[0], some_numbers[-1]]

# print(other_list)

# A list of all the numbers greater than 50.

# other_list = [x for x in some_numbers if x > 50]
# print(other_list)

# A list of all the numbers smaller than 10.

# other_list = [x for x in some_numbers if x < 10]
# print(other_list)

# A list of all the numbers squared – eg. for [1, 2, 3] you would print “1 4 9”.

# def multiple(item):
#     return item**2

# print(list(map(multiple,some_numbers)))

# The numbers without any duplicates – also print how many numbers are in the new list.

# other_list = []

# for number in some_numbers:
#     number_str = str(number)
#     if len(number_str) == len(set(number_str)):
#         other_list.append(number)

# print(other_list)

# The average of all the numbers.

# print(sum(some_numbers)/(len(some_numbers)))


# The largest number.

# a = max(some_numbers)
# print(a)

# 10.The smallest number.

# a = min(some_numbers)
# print(a)

# 11.Bonus: Find the sum, average, largest and smallest number without using built in functions.
# 12.Bonus: Instead of using pre-defined lists of numbers, ask the user for 10 numbers between -100 and 100. Ask the user for an integer between -100 and 100 – repeat this question 10 times. Each number should be added into a variable that you created earlier.

# some_list = []

# for i in range(10):
#     a = input('Give me a number from -100 to 100')
#     some_list.append(a)
# print(some_list)

# 13.Bonus: Instead of asking the user for 10 integers, generate 10 random integers yourself. Make sure that these random integers are between -100 and 100.

# import random

# some_numbers = []

# for i in range(10):
#     letter = random.randrange(-100,101)
#     some_numbers.append(letter)
# print(some_numbers)

# 14.Bonus: Instead of always generating 10 integers, let the amount of integers also be random! Generate a random positive integer no smaller than 50.

# 15.Bonus: Will the code work when the number of random numbers is not equal to 10?

# Exercise 3: Working On A Paragraph
# Find an interesting paragraph of text online. (Please keep it appropriate to the social context of our class.)
# Paste it to your code, and store it in a variable.

text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

# Let’s analyze the paragraph. Print out a nicely formatted message saying:
# How many characters it contains (this one is easy…).
print(len(text))

# How many sentences it contains.
text_sent = text.split('.')
print(len(text_sent))

# How many words it contains.

text_convert = text.replace('.', ' ').replace(',',' ')
text_word = text_convert.split(' ')
print(len(text_word))

# How many unique words it contains.

unique_words = set(text_word)
print(len(unique_words))

# Bonus: How many non-whitespace characters it contains.
text_space = text.replace(' ', '')
print(len(text_space))

# Bonus: The average amount of words per sentence in the paragraph.

print(len(text_word)/len(text_sent))
# Bonus: the amount of non-unique words in the paragraph.

print((len(text_word))-len(unique_words))

