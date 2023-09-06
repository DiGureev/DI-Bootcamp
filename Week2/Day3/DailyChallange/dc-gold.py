# Instructions
# In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques.
# It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet.

# For example, with a left shift of 3 –> D would be replaced by A,
# –> E would become B, and so on.

# The method is named after Julius Caesar, who used it in his private correspondence.

# Create a python program that encrypts and decrypts messages with ceasar cypher.
# The user enters the program, and then the program asks him if he wants to encrypt or decrypt, and then execute encryption/decryption on a given message and a given shift.

# Check out this tutorial

# Hint:

# for letter in text:
#     cypher_text += chr(ord(letter) + 3)


# user_input = input('Do you want to encrypt or decrypt? If encrypt, press 1, if decrypt, press 2: ')
# alphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z'

# crypt_text = []

# if user_input == 1:
#     user_text = list[input('Give me the text to encrypt\n')]
#     user_choice = int(input('give me the number to encrypt'))
#     for a in user_text:
#         b = int(user_text[a]) - user_choice
#         c = alphabet[b]
#         crypt_text.append(c)
#     print(''.join(crypt_text))
# else:
#     pass


