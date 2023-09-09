# Instructions
# Write a script that inserts an item at a defined index in a list.

# my_list = ['one', 'two', 'three', 'four']
# my_list.insert(2,'five')

# print(my_list)


# Exercise 2
# Instructions
# Write a script that counts the number of spaces in a string.

# user_input = input('Give me the string: ')

# def count_blank():
#     count = 0
#     for i in user_input:
#         if i == ' ':
#             count +=1
#     print(count)

# count_blank()

# Exercise 3
# Instructions
# Write a script that calculates the number of upper case letters and lower case letters in a string.

# user_input = input('Give me the string: ')
# list_marks = [' ','.',',','!','?',]

# def count_letters():
#     count_up = 0
#     count_low = 0
#     for i in user_input:
#         if i.isupper() and i not in list_marks:
#             count_up +=1
#         elif i.isupper() == False and i not in list_marks:
#             count_low +=1
#     print(f"In this string we have {count_up} uppercase letters and {count_low} lowercase letter.")

# count_letters()

# Exercise 4
# Instructions
# Write a function to find the sum of an array without using the built in function:

# def my_sum(list_of_numbers):
#     total_sum = 0
#     for i in list_of_numbers:
#         total_sum += i
#     print(total_sum)

# my_sum([1,2,3,4,5,6,7,8,9])

# Exercise 5
# Instructions
# Write a function to find the max number in a list

#     >>>find_max([0,1,3,50])
#     >>>50

# def max_num(list_of_numbers):
#     max_number = [0]
#     for i in list_of_numbers:
#         if i > max_number[0]:
#             max_number[0] = i
#     print(max_number[0])

# max_num([0,1,57,50])


# Exercise 6
# Instructions
# Write a function that returns factorial of a number

#     >>>factorial(4)
#     >>>24

# factorial = 1

# def factor(num):
#     factorial = 1
#     for i in range(1,num+1):
#         if num < 0:
#             print('Factorial doesnt exist for this number')
#         elif num == 0:
#             print('Factorial for 0 is 1')
#         else:
#             factorial = factorial*i
#     print(factorial)

# factor(7)


# Exercise 7
# Instructions
# Write a function that counts an element in a list (without using the count method):

#     >>>list_count(['a','a','t','o'],'a')
#     >>>2

# def count_el(your_list, letter):
#     count_letter = 0
#     for i in your_list:
#         if i == letter:
#             count_letter +=1
#     print(count_letter)
        
# count_el(['a','a', 'a', 't','o'],'a')


# Exercise 8
# Instructions
# Write a function that returns the L2-norm (square root of the sum of squares) of the sum of a list:

#     >>>norm([1,2,2])
#     >>>3

# import math 

# def l2_norm(your_list):
#     sum = 0
#     for i in your_list:
#         sum += i**2 
#     print(int(math.sqrt(sum)))

# l2_norm([1,2,2])


# Exercise 9
# Instructions
# Write a function to find if an array is monotonic (sorted either ascending of descending)

#     >>>is_mono([7,6,5,5,2,0])
#     >>>True

#     >>>is_mono([2,3,3,3])
#     >>>True

#     >>>is_mono([1,2,0,4])
#     >>>False
# def if_mono(your_list):
#     a, b = [],[]
#     a.extend(your_list)
#     b.extend(your_list)
#     a.sort()
#     b.sort(reverse=True)
#     if a == your_list:
#         print('True, this list is monotonic (ascending)')
#     elif b == your_list:
#         print('True, this list is monotonic (descending)')
#     else:
#         print("No, this list isn't monitonic")

# if_mono([7,6,5,5,2,0])

# Exercise 10
# Instructions
# Write a function that prints the longest word in a list.

# def long_word(your_list):
#     max_len = 0
#     max_word = ''
#     for i in your_list:
#         if len(i) > max_len:
#             max_len = len(i)
#             max_word = i
#     print(max_word)
        
# long_word(['one', 'two', 'three'])


# Exercise 11
# Instructions
# Given a list of integers and strings, put all the integers in one list, and all the strings in another one.

# def check_list(your_list):
#     list_int = [i for i in your_list if type(i) == int]
#     list_str = [i for i in your_list if type(i) == str]
#     print(f"{list_int}\n{list_str}")

# check_list([1,2,'3','4',15, 'string'])

# Exercise 12
# Instructions
# Write a function to check if a string is a palindrome:

#     >>>is_palindrome('radar')
#     >>>True

#     >>>is_palindrome('John)
#     >>>False

# def isPalindrome(str):
#     check_str = str.lower()
#     for i in range(0, int(len(check_str)/2)):
#         if check_str[i] != check_str[len(check_str)-i-1]:
#             return False
#     return True

# print(isPalindrome('Aziza'))

# Exercise 13
# Instructions
# Write a function that returns the amount of words in a sentence with length > k:

#     >>>sentence = 'Do or do not there is no try'
#     >>>k=2
#     >>>sum_over_k(sentence,k)
#     >>>3

# sentence = 'Do or do not there is no try'
# k=2

# def sum_over_k(sentence,k):
#     list_sent = sentence.split(' ')
#     list_k_words = []
#     for i in list_sent:
#         if len(i) > k:
#             list_k_words.append(i)
#     print(list_k_words)
    
# sum_over_k(sentence,k)

# Exercise 14
# Instructions
# Write a function that returns the average value in a dictionary (assume the values are numeric):

# dict_avg = {'a': 1,'b':2,'c':8,'d': 1}

# def avr_num(dict_avg):
#     av_value = 0
#     for i,num in dict_avg.items():
#         av_value += num
#     print(int(av_value/len(dict_avg)))

# avr_num(dict_avg)


# Exercise 15
# Instructions
# Write a function that returns common divisors of 2 numbers:
# common_div(10,20)
# [2,5,10]

# def common_div(a,b):
#     divisors = []
#     for i in range(2,a+1):
#         if a % i == 0 and b % i == 0 and i is not divisors:
#             divisors.append(i)
#     print(divisors)

# common_div(10,20)



# Exercise 16
# Instructions
# Write a function that test if a number is prime:

#     >>>is_prime(11)
#     >>>True

# a = 14
# def prime(a):
#     k = 0
#     for i in range(2, a // 2+1):
#         if a % i == 0:
#             k = k+1
#     if (k <= 0):
#         print("The number is prime")
#     else:
#         print("The number isn't prime")

# prime(a)


# Exercise 17
# Instructions
# Write a function that prints elements of a list if the index and the value are even:

#     >>>weird_print([1,2,2,3,4,5])
#     >>>[2,4]

# def if_even(your_list):
#     true_el = []
#     for i,element in enumerate(your_list):
#         if i %2 == 0 and element % 2 == 0:
#             true_el.append(element)
#     print(true_el)

# if_even([1,2,2,3,4,5])

# Exercise 18
# Instructions
# Write a function that accepts an undefined number of keyworded arguments and return the count of different types:

#     >>>type_count(a=1,b='string',c=1.0,d=True,e=False)
#     >>>int: 1, str:1 , float:1, bool:2

# def type_count(**other):
#     dict_new = {
#         'int': 0,
#         'str': 0,
#         'float': 0,
#         'bool': 0,
#     }
#     for key,value in other.items():
#         if type(value) == int:
#             dict_new['int'] += 1
#         elif type(value) == str:
#             dict_new['str'] += 1
#         elif type(value) == float:
#             dict_new['float'] += 1
#         elif type(value) == bool:
#             dict_new['bool'] += 1
#     print(dict_new)

# type_count(a=1,b='string',c=1.0,d=True,e=False)

# Exercise 19
# Instructions
# Write a function that mimics the builtin .split() method for strings.
# By default the function uses whitespace but it should be able to take an argument for any character and split with that argument.

# def splt(string, delimetr):
#     new_list = []
#     new_string = ''
#     for i in string:
#         if i != delimetr:
#             new_string += i
#         elif i == delimetr:
#             new_list.append(new_string)
#             new_string = ''
#     new_list.append(new_string)
#     return new_list
    
# print(splt(input('put string'), ','))


# Exercise 20
# Instructions
# Convert a string into password format.
# Example:
# input : "mypassword"
# output: "***********"

# user_input = input('write a password: ')
# print('*'*len(user_input))