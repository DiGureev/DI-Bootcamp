# Exercise 1 : Family
# Instructions
# Create a class called Family and implement the following attributes:

# 2. Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ first name.

# class Family:

#     def __init__(self):
#         self.last_name = 'Smith'
#         self.members = [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False, 'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False, 'power': 'read minds','incredible_name':'SuperWoman'},
#         ]
    
#     def born(self, **child):
#         new_dict = {}
#         for key, value in child.items():
#             new_dict[key] = value
#         self.members.append(new_dict)
#         print('Congrats!')

#     def is_18(self, name):
#         for i in self.members:
#             if i['name'] == name:
#                 print(i['is_child'])

#     def family_presentation(self):
#         print(f"The family's last name is {self.last_name}.There are:")
#         for i in self.members:
#             print(i['name'])

# Exercise 2 : TheIncredibles Family
# Instructions
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore we need to add the following keys to our dictionaries: power and incredible_name.

# Initial members data:

# Add a method called use_power, this method should print the power of a member only if they are over 18 years old. 
# If not raise an exception (look up exceptions) which stated they are not over 18 years old.

# class TheIncredibles(Family):
    
#     def __init__(self):
#         super().__init__()
    
#     def use_power(self):
#         for i in self.members:
#             try:
#                 i['is_child'] == False
#                 print(f"{i['name']} has a power: {i['power']}")
#             except:
#                 print(f"{i['name']} not over 18 years old")

#     def incredible_presentation(self):
#         print(super().family_presentation())
#         for i in self.members:
#             print(f"{i['name']}'s increadible name is {i['incredible_name']} and super-power is {i['power']}!")
            

# lize = TheIncredibles()

# lize.born(name = 'Jack', age = 0, gender = 'Female', is_child = True, incredible_name = 'Lol', power = 'Unknown power' )
# lize.is_18('Jack')
# lize.family_presentation()          

# lize.use_power()
# lize.incredible_presentation()



# Add a method called incredible_presentation which :

# Prints the family’s last name and all the members’ first name (ie. use the super() function, to call the family_presentation method)
# Prints all the members’ incredible name and power.

# Call the incredible_presentation method.


# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.


# Call the incredible_presentation method again.