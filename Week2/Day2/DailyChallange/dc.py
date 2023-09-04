# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.
# Examples
# number: 7 - length 5 ➞ [7, 14, 21, 28, 35]
# number: 12 - length 10 ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
# number: 17 - length 6 ➞ [17, 34, 51, 68, 85, 102]

#ANSWER

# my_list = []

# user_number = int(input('Give me the number: '))
# user_length = int(input('Give me the length: '))

# cur_number = 0
# while user_length > 0:
#     user_length -= 1
#     cur_number += user_number 
#     my_list.append(cur_number)
# print(my_list)

# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.
# Examples
# user's word : "ppoeemm" ➞ "poem"
# user's word : "wiiiinnnnd" ➞ "wind"
# user's word : "ttiiitllleeee" ➞ "title"
# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"

#ANSWER

# user_answer = input('Give me a string with duplicate letters in it: ')
# answer = []
# answer.append(user_answer[0])
# for index in range(len(user_answer))[1:]:
#     if user_answer[index] != user_answer[index - 1]:
#        answer.append(user_answer[index])
# print(''.join(answer))


