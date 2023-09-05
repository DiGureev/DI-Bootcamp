# Exercise 1: Concatenate Lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

# list1 = [1,2,3]
# list2 = [4,5,6]
# for i in list2:
#     list1.append(i)

# print(list1)

# Exercise 2: Range Of Numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

# for x in range(1500,2500,1):
#     if x % 5 == 0 or x % 7 == 0:
#         print(x)

# Exercise 3: Check The Index
# Instructions
# Using this variable
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# user_answer = input('What is your name?')

# if user_answer in names:
#     print(names.index(user_answer))


# Exercise 4: Greatest Number
# Instructions
# Ask the user for 3 numbers and print the greatest number.
#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87

#     The greatest number is: 87


# user_input1 = input('Input the 1st number: ')
# user_input2 = input('Input the 2snd number: ')
# user_input3 = input('Input the 3rd number: ')

# if int(user_input1) > int(user_input2) and int(user_input1) > int(user_input3):
#     print(f'The greatest number is {user_input1}')
# elif int(user_input2) > int(user_input1) and int(user_input2) > int(user_input3):
#     print(f'The greatest number is {user_input2}')
# elif int(user_input3) > int(user_input1) and int(user_input3) > int(user_input2):
#     print(f'The greatest number is {user_input3}')
# elif int(user_input1) == int(user_input2) and int(user_input2) == int(user_input3):
#     print('The numbers are equal')
# else:
#     print("There is two equal numbers, I can't chose one")



# Exercise 5: The Alphabet
# Instructions
# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter and whether its a vowel or a consonant.

# alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

# for index,letter in enumerate(alphabet):
#     if index == 0 or index == 4 or index == 8 or index == 14 or index == 20:
#         print(f'The letter {letter} is a vowel')
#     else:
#         print(f'The letter {letter} is a consonant')

# Exercise 6: Words And Letters
# Instructions
# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable called letter.
# Loop through the words list and print the index of the first appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a friendly message with the word and the letter.

# user_input = input('Please, give me 7 words, separated by comma: ')
# words = list(user_input.split(","))
# letter = input('Plaese, give me any single character: ')

# for word in words:
#     if letter in word:
#         print(word.index(letter))
#     else:
#         print(f"There is no such letter {letter} in this word: '{word}'")


# Exercise 7:
# Instructions
# Create a list of numbers from one to one million and then use min() and max() to make sure your list actually starts at one and ends at one million. Use the sum() function to see how quickly Python can add a million numbers.

# numbers = [i for i in range(1,1000001)]

# print(numbers)
# a = min(numbers)
# b = max(numbers)

# print(a,b)

# print(sum(numbers))

# Exercise 8 : List And Tuple
# Instructions
# Write a program which accepts a sequence of comma-separated numbers. Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

# user_input = input('Give me numbers, separated by comma: ')

# list_numbers = list(user_input.split(","))
# tuple_numbers = tuple(user_input.split(","))

# print(list_numbers)
# print(tuple_numbers)


# Exercise 9 : Random Number
# Instructions
# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that says Winner.
# If the user guesses the wrong number print a message that says better luck next time.

# import random

# user_input = input('Guess the number from 1 to 9, included: ')
# letter = random.randrange(1,9)

# if user_input == letter:
#     print('Wow! You win!')
# else:
#     print('Better luck next time!')

# Bonus: use a loop that allows the user to keep guessing until they want to quit.

# import random
# letter = random.randrange(1,9)

# while True:
#     user_input = input('Guess the number from 1 to 9, included. Or type "quit" ')
#     print(user_input)
#     if user_input == 'quit':
#         break
#     elif int(user_input) == letter:
#         print('You won!')
#         break
#     else:
#         print('Better luck next time!')


# Bonus 2: on exiting the loop tally up and display total games won and lost.

# import random
# letter = random.randrange(1,9)

# points = 0
# losts = 0

# while True:
#     user_input = input('Guess the number from 1 to 9, included. Or type "quit" ')
#     print(user_input)
#     if user_input == 'quit':
#         print(f'Your won {points} time, You losted {losts} times. Bye!')
#         break
#     elif int(user_input) == letter:
#         points +=1
#         print(f'You won! Your won {points} time, You losted {losts} times')
#         break
#     else:
#         losts += 1
#         print('Better luck next time!')