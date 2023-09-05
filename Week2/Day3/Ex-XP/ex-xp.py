# 🌟 Exercise 1 : Convert Lists Into Dictionaries
# Instructions
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# Expected output:
# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}

#ANSWER

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# together = dict(zip(keys,values))
# print(together)


# 🌟 Exercise 2 : Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
# How much does each family member have to pay ?
# Print out the family’s total cost for the movies.

# Given the following object:

#ANSWER

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0

# for name,age in family.items():
#     if age < 3:
#         print(f'The ticket for {name} is free')
#         total_cost += 0
#     elif age < 12:
#         print(f'The ticket for {name} costs $10')
#         total_cost += 10
#     else:
#         print(f'The ticket for {name} costs $15')
#         total_cost += 15
# print(f"Total cost for you all is {total_cost}. See you!")

# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

#BONUS-ANSWER

# user_answer = input("What is your names and ages? Write separated by comma.")
# data = user_answer.split(",")
# names = []
# ages = []
# for a,b in enumerate(data):
#     if a % 2 == 0:
#         names.append(b)
#     else:
#         ages.append(b)

# family = dict(zip(names,ages))
# total_cost = 0

# for name,age in family.items():
#     if int(age) < 3:
#         print(f'The ticket for {name} is free')
#         total_cost += 0
#     elif int(age) < 12:
#         print(f'The ticket for {name} costs $10')
#         total_cost += 10
#     else:
#         print(f'The ticket for {name} costs $15')
#         total_cost += 15

# print(f"Total cost for you all is {total_cost}. See you!")


# 🌟 Exercise 3: Zara
# Instructions
# Here is some information about a brand.
# name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# The values type_of_clothes and international_competitors should be a list. The value of major_color should be a dictionary.

#ANSWER

# brand = {
#     'name': 'Zara',
#     'creation_date': 1975,
#     'creator_name': 'Amancio Ortega Gaona' ,
#     'type_of_clothes': ["men","women", "children", "home"],
#     'international_competitors': ['Gap', 'H&M', 'Benetton'] ,
#     'number_stores': 7000,
#     'major_color': 
#         {
#         'France': 'blue',
#         'Spain': 'red', 
#         'US': ['pink', 'green'],
#         }
# }

# # 3. Change the number of stores to 2.

# brand['number_stores'] = 2

# # 4. Print a sentence that explains who Zaras clients are.

# print(f"{brand['name']}'s clients are {brand['type_of_clothes'][0:3]}")

# # 5. Add a key called country_creation with a value of Spain.

# brand['country_creation'] = 'Spain'

# # 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.

# print('international_competitors' in brand)

# brand['international_competitors'].append('Desigual')

# print(brand)

# # 7. Delete the information about the date of creation.

# del brand['creation_date']

# # 8. Print the last international competitor.

# print(brand['international_competitors'][-1])

# # 9. Print the major clothes colors in the US.

# print(f"Major colors in US are {brand['major_color']['US']}")

# # 10. Print the amount of key value pairs (ie. length of the dictionary).
# print(len(brand))

# # 11. Print the keys of the dictionary.

# print(brand.keys())

# # 12. Create another dictionary called more_on_zara with the following details:

# more_on_zara = {
#     'creation_date': 1975, 
#     'number_stores': 10000,
# }

# # 13. Use a method to add the information from the dictionary more_on_zara to the dictionary brand.
# brand.update(more_on_zara)

# # 14. Print the value of the key number_stores. What just happened ?

# print(brand['number_stores']) #Number of stores (2) replaced by 10 000
 

# Exercise 4 : Disney Characters
# Instructions
# Use this list :

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :

# #1/

# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}

# #2/

# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}

# #3/ 

# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}


# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.

#ANSWER

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# indexes = [i for i,name in enumerate(users)]
# users_dict = dict(zip(users,indexes))
# print(users_dict)

# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.

#ANSWER

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# indexes = [i for i,name in enumerate(users)]
# users_dict = dict(zip(indexes, users))
# print(users_dict)

# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.

#ANSWER

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# indexes = [i for i,name in enumerate(users)]
# users_dict = dict(zip(users,indexes))
# users_dict = dict(sorted(users_dict.items()))
# print(users_dict)

# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.

#ANSWER

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# names = []
# indexes = []

# for i,name in enumerate(users):
#     if "i" in name:
#         indexes.append(i)
#         names.append(name)

# users_dict = dict(zip(names,indexes))

# print(users_dict)

# The characters, which names start with the letter “m” or “p”.

# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# names = []
# indexes = []

# for i,name in enumerate(users):
#     if name[0] == "M" or name[0] == "P":
#         indexes.append(i)
#         names.append(name)

# users_dict = dict(zip(names,indexes))

# print(users_dict)