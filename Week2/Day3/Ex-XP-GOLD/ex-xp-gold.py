# Exercise 1: Birthday Look-Up
# Instructions
# Create a variable called birthdays. Its value should be a dictionary.
# Initialize this variable with birthdays of 5 people of your choice. For each entry in the dictionary, the key should be the person’s name, and the value should be their birthday. Tip : Use the format “YYYY/MM/DD”.
# Print a welcome message for the user. Then tell them: “You can look up the birthdays of the people in the list!”“
# Ask the user to give you a person’s name and store the answer in a variable.
# Get the birthday of the name provided by the user.
# Print out the birthday with a nicely-formatted message.

#ANSWER

# birthday = {
#     'Tom' : '1991/12/05',
#     'Ron' : '1993/10/29',
#     'Sam' : '1998/03/05',
#     'Rose' : '2005/01/13',
#     'Kris' : '1986/12/29'
# }

# user_input = input('Hi!You can look up the birthdays of the people in the list! Choose the name: ')

# if user_input in birthday:
#     print(f"{user_input}'s birthday is on {birthday[user_input]}.")

# Exercise 2: Birthdays Advanced
# Instructions
# Before asking the user to input a person’s name print out all of the names in the dictionary.
# If the person that the user types is not found in the dictionary, print an error message (“Sorry, we don’t have the birthday information for <person’s name>”)

#ANSWER

# birthday = {
#     'Tom' : '1991/12/05',
#     'Ron' : '1993/10/29',
#     'Sam' : '1998/03/05',
#     'Rose' : '2005/01/13',
#     'Kris' : '1986/12/29'
# }

# user_input = input(f'Hi! I have the list of birthdays of {birthday.keys()}. You can look up the birthdays of the people in the list! Choose the name: ')

# if user_input in birthday:
#     print(f"{user_input}'s birthday is on {birthday[user_input]}.")
# else:
#     print(f"Sorry, we don't have information abour {user_input}'s birthday")

# Exercise 3: Add Your Own Birthday
# Instructions
# Add this new code: before asking the user to input a person’s name to look up, ask the user to add a new birthday:
# Ask the user for a person’s name – store it in a variable.
# Ask the user for this person’s birthday (in the format “YYYY/MM/DD”) - store it in a variable.
# Now add this new data into your dictionary.
# Make sure that if the user types any name that exists in the dictionary – including the name that he entered himself – the corresponding birthday is found and displayed.

#ANSWER

# birthday = {
#     'Tom' : '1991/12/05',
#     'Ron' : '1993/10/29',
#     'Sam' : '1998/03/05',
#     'Rose' : '2005/01/13',
#     'Kris' : '1986/12/29'
# }

# user_name = input("Let's add somebody's birthday in the list! Type a name: ")
# user_birthday = input("Now type a date od birth 'YYYY/MM/DD: ")

# birthday[user_name] = [user_birthday]

# user_input = input(f'So, I have the list of birthdays of {birthday.keys()}. You can look up the birthdays of the people in the list! Choose the name: ')

# if user_input in birthday:
#     print(f"{user_input}'s birthday is on {birthday[user_input]}.")
# else:
#     print(f"Sorry, we don't have information abour {user_input}'s birthday")

# Exercise 4: Fruit Shop
# Instructions

# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }

# print(items.items())

# Using the dictionary above, each key-value pair represents an item and its price - print all the items and their prices in a sentence.
# Using the dictionary below, each value are dictionaries containing both the price and the amount of items in stock -
# write some code to calculate how much it would cost to buy everything in stock.

# items = {
#     "banana": {"price": 4 , "stock":10},
#     "apple": {"price": 2, "stock":5},
#     "orange": {"price": 1.5 , "stock":24},
#     "pear": {"price": 3 , "stock":1}
# }

# total = 0

# for i in items: 
#     total += items[i]["price"]*items[i]["stock"]

# print(total)


    
       


