# Exercise 1 : Geometry
# Instructions
# Write a class called Circle that receives a radius as an argument (default is 1.0).
# Write two instance methods to compute perimeter and area.
# Write a method that prints the geometrical definition of a circle.

# import math

# class Circle:
#     def __init__(self, radius = 1.0):
#         self.radius = radius

#     def per(self):
#         perimetr = 2 * math.pi * self.radius
#         print(int(perimetr))

#     def ar(self):
#         area = math.pi * (self.radius**2)
#         print(int(area))
    
#     def defin(self):
#         print("In geometry, a circle can be defined as a closed shape, two-dimensional shape, curved shape.")

# a = Circle()

# a.per()
# a.ar()
# a.defin()


# Exercise 2 : Custom List Class
# Instructions
# Create a class called MyList, the class should receive a list of letters.
# Add a method that returns the reversed list.
# Add a method that returns the sorted list.
# Bonus : Create a method that generates a second list with the same length as mylist. The list should be 
#constructed with random numbers. (use list comprehension).

# import random

# class MyList:
#     def __init__(self, letters):
#         self.letters = letters

#     def rev(self):
#         self.letters.reverse()
#         print(self.letters)
    
#     def sorter(self):
#         print(sorted(self.letters))

#     def new_list(self):
#         num_list = [random.randrange(100) for i in self.letters]
#         print(num_list)

# a = MyList(['a', 'c', 'b'])
# a.rev()
# a.sorter()
# a.new_list()


# Exercise 3 : Restaurant Menu Manager
# Instructions
# The purpose of this exercise is to create a restaurant menu. The code will allow a manager to add and delete dishes.

# Create a python file called menu_manager.py.

# Create a class called MenuManager.

# Create a method __init__ that instantiates an attribute called menu. The menu attributes value will be all 
# the current dishes (list of dictionaries). Each dish will be stored in a dictionary where the keys are name, 
# price, spice level and gluten index (which value is a boolean).

# Here is a list of the dishes currently on the menu:

#     Soup – 10 – B - False
#     Hamburger – 15 - A - True
#     Salad – 18 - A - False
#     French Fries – 5 - C - False
#     Beef bourguignon– 25 - B - True

#     Meaning: For the spice level:
#        • A = not spicy,
#        • B = a little spicy,
#        • C = very spicy


# The dishes provided above should be the value of the menu attribute.


# class MenuManager:
#     def __init__(self):
#         self.menu = [
#             {'Name': 'Soup', 
#              'Price': 10, 
#              'Spice_level': 'B', 
#              'Gluten_index': False,
#              },

#             {'Name': 'Hamburger', 
#              'Price': 15, 
#              'Spice_level': 'A', 
#              'Gluten_index': True},

#             {'Name': 'Salad', 
#              'Price': 18, 
#              'Spice_level': 'A', 
#              'Gluten_index': False},
            
#             {'Name': 'French fries', 
#              'Price': 5, 
#              'Spice_level': 'C', 
#              'Gluten_index': False},

#             {'Name': 'Beef bourguignon', 
#              'Price': 25, 
#              'Spice_level': 'B', 
#              'Gluten_index': True}
            
#         ]

# Create a method called add_item(name, price, spice, gluten). This method will add new dishes to the menu.

    # def add_item(self, name, price, spice, gluten):
    #     self.menu.append({
    #         'Name': name,
    #         'Price': price,
    #         'Spice_level': spice,
    #         'Gluten_index': gluten
    #     })
    
# Create a method called update_item(name, price, spice, gluten). This method checks whether a dish is in the menu, 
# if the dish exists then update it. If not notify the manager that the dish is not in the menu.

    # def update_item(self, name, price, spice, gluten):
    #     for i in self.menu:
    #         if name == i['Name']:
    #             i['Price'] = price
    #             i['Spice_level'] = spice
    #             i['Gluten_index'] = gluten
    #             print('Changed')
    #             break
    #     else:
    #         print('the dish is not in the menu')

    # Create a method called remove_item(name). This method should check if the dish is in the menu, 
    # if the dish exists then delete it and print the updated dictionary. If not notify the manager that the dish 
    # is not in the menu.
    
#     def remove_item(self,name):
#         for i in self.menu:
#             if name == i['Name']:
#                 self.menu.remove(i)
#                 print(f'{name} have been removed')
#                 break
#         else:
#             print('the dish is not in the menu')
            


# me = MenuManager() 

# me.add_item('Borsch', '15', 'A', True)

# me.update_item('Borsch', '20', 'B', False)

# me.remove_item('Borsch')

# print(me.menu)


