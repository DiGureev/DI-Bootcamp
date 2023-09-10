# Exercise 1
# Instructions
# Draw the following pattern using for loops:
#   *
#  ***
# *****

# def piramid(rows):
#     stars = 1
#     spaces = rows-1

#     for i in range(rows):
#         print( ' '*spaces + '*'*stars)
#         stars += 2
#         spaces -= 1

# piramid(7)

# Draw the following pattern using for loops:
#     *
#    **
#   ***
#  ****
# *****

# def triangle(rows):
#     stars = 1
#     spaces = rows-1

#     for i in range(rows):
#         print( ' '*spaces + '*'*stars)
#         stars += 1
#         spaces -= 1

# triangle(7)

# Draw the following pattern using for loops:
# *
# **
# ***
# ****
# *****
# *****
#  ****
#   ***
#    **
#     *
# def triangle(number):
#     stars = 1
#     spaces = number-1
#     for i in range(number):
#         print('*'*stars)
#         stars += 1
#     spaces = 0
#     stars = number
#     for i in range(number):
#         print( ' '*spaces + '*'*stars)
#         stars -= 1
#         spaces += 1

# triangle(7)

# Exercise 2
# Instructions
# Analyse this code before executing it. Write some commnts next to each line. Write the value of each variable 
# and their changes, and add the final output. Try to understand the purpose of this program.

# my_list = [2, 24, 12, 354, 233]
# for i in range(len(my_list) - 1): #we take elements from zero to len-1
#     minimum = i #create a variable which equal i
#     for j in range( i + 1, len(my_list)): #then launching loop for numbers from next element 
#         if(my_list[j] < my_list[minimum]): #comparing element from first loop with element from second
#             minimum = j #if expression is true then general variable equal to current one
#             if(minimum != i): #if elements are not equal then we change their places in the list
#                 my_list[i], my_list[minimum] = my_list[minimum], my_list[i]
# print(my_list)