# 🌟 Exercise 1 : Set
# Instructions
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

#ANSWER

# my_fav_numbers = {"1", "2", "3"}
# my_fav_numbers.update(["4", "5"])
# my_fav_numbers = list(my_fav_numbers) 
# my_fav_numbers.pop()
# my_fav_numbers = set(my_fav_numbers) 

# friend_fav_numbers = {"6", "7", "8"}
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# print(sorted(our_fav_numbers))

# 🌟 Exercise 2: Tuple
# Instructions
# Given a tuple which value is integers, is it possible to add more integers to the tuple?

#ANSWER

# my_tulipe = (1, 2, 3)
# my_tulipe = list(my_tulipe)
# my_tulipe.extend([4, 5, 6])
# my_tulipe = tuple(my_tulipe)

# print(type(my_tulipe[1]))

# 🌟 Exercise 3: List
# Instructions
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

#ANSWER

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.pop(0)
# basket.pop(-1)
# basket.append("Kiwi")
# basket.insert(0, "Apples")
# print(len(basket))
# basket.clear()

# print(basket)


# 🌟 Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float?
# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

#ANSWER

# my_list = []
# cur_number = 0
# for number in range(10):
#     my_list.append(cur_number)
#     cur_number += .5
    
# print(my_list)


# 🌟 Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# my_list = []

# numbers = list(range(1,22)) 
# for each_num in numbers:
#     if numbers.index(each_num) % 2 == 0:
#         print(each_num)  

# 🌟 Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

#ANSWER 

# active = True

# while active:
#     name = input("Please enter the name: ")
#     if name == "Diana":
#         break
#     else:
#         print("I don't like it, try another name, let's say, 'Diana'")
# print("Such a beautiful name!")


# 🌟 Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.

#ANSWER

# user_fruit = input('Give me a list of your favorit fruits. Please, separate each fruit with a space, eg. "apple mango cherry": ').split()
# user_choice = input('Give me one fruit you like\n')

# if user_choice in basket: 
#     print('You chose one of your favorite fruits! Enjoy!')
# else:
#     print('You chose a new fruit. I hope you enjoy')


# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

#ANSWER

# topping_list = []
# count = 0
# active = True

# user_choice = input("You wanna order pizza? Say yes if yes, say no, if no: ")

# if user_choice == "yes":
#     count += 10
 
#     while active:
#         users_topping = input('Which topping you will add to your pizza (type one)? Or type "quit" to finish: ')
#         if users_topping == "quit":
#             active = False
#         else:
#             topping_list.append(users_topping)
#             count += 2.5
#             print(f'You inserted {topping_list}, your order price is {count}.')
#     print(f'Your topping are {topping_list}, the price is {count} dollars')

# elif user_choice == "no":
#     print("Ok, bye!")

# else:
#     print("I have no idea what do you mean")

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

#ANSWER

# user_choice = input('Please, write age of each person who wants a ticket, separated by space, eg "3 8 30": ')

# person_age = user_choice.split()
# ticket_price = 0

# for age in person_age:
#     age = int(age)
#     if age < 3:
#         ticket_price += 0
#     elif age <12:
#         ticket_price += 10
#     else:
#         ticket_price += 15

# print(ticket_price)

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.

#ANSWER

# teens_names = ["Mike", "July", "Tom"]
# allowed = []

# for name in teens_names:
#     age = input(f"Please, write your age {name}: ")
#     if int(age) < 21:
#         print('Sorry, You are not permitted to watch the movie!')
#     else:
#         allowed.append(name)
#         print('You are permitted to watch the movie!')

# print(f"See you {allowed}!")

# Exercise 10 : Sandwich Orders
# Instructions
# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich

#ANSWER

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")
# print(sandwich_orders)

# sandwich_orders_items = sandwich_orders[:]
# print(sandwich_orders_items)

# finished_sandwiches = []    

# for orders in sandwich_orders_items:

# #     #❓When I remove item directly from the "sandwich_orders" without making a copy in "sandwich_orders_items", 
# #     #loop doesn't see Avocado and Chiken, i dont know why. Couldn't find a better solution :(

#       sandwich_orders.remove(orders)
#       finished_sandwiches.append(orders)
#       print(f'I finished your {orders}')
# print(sandwich_orders)