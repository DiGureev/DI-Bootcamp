# Instructions : Old MacDonald’s Farm
# Take a look at the following code and output:
# File: market.py

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
# Output

# McDonald's farm

# cow : 5
# sheep : 2
# goat : 12

#     E-I-E-I-0!


# Create the code that is needed to receive the result provided above. Below are a few questions to assist you with your code:

# Create a class called Farm. How should it be implemented?

# class Farm:
#     def __init__(self,company_name):
#         self.name = company_name
#         self.my_dict = {}
    
#     def add_animal(self, animal_name, count = 1):
#         if animal_name not in self.my_dict:
#             self.my_dict[animal_name] = int(count)
#         else:
#             self.my_dict[animal_name] += int(count)

#     def get_info(self):
#         print(f"{self.name}'s Farm")
#         print()
#         for key, v in self.my_dict.items():
#             print(f"{key}: {v}")
#         print()
#         print('     E-I-E-I-0!')

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())

# Does the Farm class need an __init__ method? If so, what parameters should it take?
# How many methods does the Farm class need?
# Do you notice anything interesting about the way we are calling the add_animal method? What parameters should this function have? How many…?
# Test your code and make sure you get the same results as the example above.
# Bonus: nicely line the text in columns as seen in the example above. Use string formatting.


# Expand The Farm
# Add a method called get_animal_types to the Farm class. This method should return a sorted list of all the animal 
# types (names) in the farm. With the example above, the list should be: ['cow', 'goat', 'sheep'].

# Add another method to the Farm class called get_short_info. This method should return the following string: 
#“McDonald’s farm has cows, goats and sheep.”. The method should call the get_animal_types function to get a 
#list of the animals.

# class Farm:
#     def __init__(self,company_name):
#         self.name = company_name
#         self.my_dict = {}
#         self.animal_type = []
    
#     def add_animal(self, animal_name, count = 1):
#         if animal_name not in self.my_dict:
#             self.my_dict[animal_name] = int(count)
#             self.animal_type.append(animal_name)
#         else:
#             self.my_dict[animal_name] += int(count)

#     def get_animal_types(self):
#         return sorted(self.animal_type)


#     def get_info(self):
#         print(f"{self.name}'s Farm")
#         print()
#         for key, v in self.my_dict.items():
#             print(f"{key}: {v}")
#         print()
#         print('     E-I-E-I-0!')

#     def get_short_info(self):
#         lst = self.get_animal_types()
#         lst.insert(-1, 'and')
#         str_lst = ', '.join(lst)
#         print(f"{self.name}'s farm has {str_lst}")

# macdonald = Farm("McDonald")
# macdonald.add_animal('cow',5)
# macdonald.add_animal('sheep')
# macdonald.add_animal('sheep')
# macdonald.add_animal('goat', 12)
# print(macdonald.get_info())
# print(macdonald.get_animal_types())
# macdonald.get_short_info()
