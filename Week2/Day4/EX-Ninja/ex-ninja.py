# Exercise 1 : What’s Your Name ?
# Instructions
# Write a function called get_full_name() that takes three arguments: 1: first_name, 2: middle_name 3: last_name.
# middle_name should be optional, if it’s omitted by the user, the name returned should only contain the first and the last name.
# For example, get_full_name(first_name="john", middle_name="hooker", last_name="lee") will return John Hooker Lee.
# But get_full_name(first_name="bruce", last_name="lee") will return Bruce Lee.

#ANSWER

# def get_full_name(first_name, last_name, middle_name = ''):
#     map_object = map(lambda s: s.capitalize(),[first_name, last_name, middle_name])
#     print(' '.join(map_object))

# get_full_name(first_name="john", middle_name="hooker", last_name="lee")

# Exercise 2 : From English To Morse
# Instructions
# Write a function that converts English text to morse code and another one that does the opposite.
# Hint: Check the internet for a translation table, every letter is separated with a space and every word is separated with a slash /.

#ANSWER

# def morse(text):
#     encrypt = {
#         'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
#         'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
#         'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
#         'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
#         '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
#         '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
#         ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
#         '＄': '...-..-', '@': '.--.-.', ' ': '/'
#     }
    
#     decrypt = { value:key for key, value in encrypt.items()}
    
#     if '-' in text:
#         return ''.join(decrypt[i] for i in text.split())
#     return ' '.join(encrypt[i] for i in text.upper()) 

# print(morse('.--. -.-- - .... --- -.'))

# Exercise 3 : Box Of Stars
# Instructions
# Write a function named box_printer that takes any amount of strings (not in a list) and prints them, one per line, in a rectangular frame.
# For example calling box_printer("Hello", "World", "in", "reallylongword", "a", "frame") will result as:
# ******************
# * Hello          *
# * World          *
# * in             *
# * reallylongword *
# * a              *
# * frame          *
# ******************

# words = input('Give me the strings separated by comma: ')
# list_words = words.split(',')

def maxword (list_words):
    max_len = 0
    for word in list_words:
        if max_len < len(word):
            max_len = len(word)
    return max_len

# def box_printer(list_words):
#     max_len = maxword(list_words)
#     my_string = '*' * max_len
#     print(f"**{my_string}**")
#     for word in list_words:
#         print( f"* {word}{' '*(max_len - len(word))} *")
#     print(f"**{my_string}**")

# box_printer(list_words)

# Exercise 4
# Analyse this code before executing it. What is the purpose of this code?

# def insertion_sort(alist):
#    for index in range(1,len(alist)):

#      currentvalue = alist[index]
#      position = index

#      while position>0 and alist[position-1]>currentvalue:
#          alist[position]=alist[position-1]
#          position = position-1

#      alist[position]=currentvalue

# alist = [54,26,93,17,77,31,44,55,20]
# insertion_sort(alist)
# print(alist)