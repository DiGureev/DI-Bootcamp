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







def get_car_price(ages):
    if ages > 40:
        return 200
    else:
        return 300


def get_flight_price(destination):
    if destination == 'Paris':
        return 400
    else:
        return 600
    
def inform():
    age = int(input('How old are you?'))
    dest = input('Where are you going?')
    price_car = get_car_price(age)
    flight_price = get_flight_price(dest)
    total = price_car + flight_price
    print(total)

inform()