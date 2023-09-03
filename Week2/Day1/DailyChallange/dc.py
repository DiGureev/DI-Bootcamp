# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.
# If it’s 10 characters, print a message which states “perfect string” and continue the exercise.
# Then, print the first and last characters of the given text.

# user_choice = input("Give me a string which is 10 characters long\n")

# if len(user_choice) < 10 :
#     print("string not long enough")
# elif len(user_choice) == 10 :
#     print("perfect string")
    
# else:
#     print("string too long")

# print(user_choice[0], user_choice[-1])

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "HelloWorld"
# Then, you have to construct the string character by character
# H
# He
# Hel
# ... etc
# HelloWorld


# for x in range(len('helloWorld')):
#     print('helloWorld'[0:x+1])


# 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:

# Hlrolelwod

# import random
# a = list("HelloWorld")
# random.shuffle(a)
# print(''.join(a))