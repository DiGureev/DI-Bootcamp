# 🌟 Exercise 1: Cats
# Instructions
# Using this class

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age
# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# lui_cat = Cat('Lui',3)
# tom_cat = Cat('Tom',5)
# jess_cat = Cat('Jass',7)

# eldest_cat = ''

# def old_cat(*other):
#     cur_max = 0
#     for index, cat in enumerate(other[::-1]):
#         if isinstance(cat, Cat):
#             if cat.age > cur_max:
#                 cur_max = cat.age
#                 eldest_cat = cat.name
#     print(f"The oldest cat is {eldest_cat}, and is {cur_max} years old.")

# old_cat(lui_cat, tom_cat, jess_cat)


# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog.
# In this class, create an __init__ method that takes two parameters : name and height. This function instantiates two attributes, which values are the parameters.
# Create a method called bark that prints the following string “<dog_name> goes woof!”.
# Create a method called jump that prints the following string “<dog_name> jumps <x> cm high!”. x is the height*2.
# Outside of the class, create an object called davids_dog. His dog’s name is “Rex” and his height is 50cm.
# Print the details of his dog (ie. name and height) and call the methods bark and jump.
# Create an object called sarahs_dog. Her dog’s name is “Teacup” and his height is 20cm.
# Print the details of her dog (ie. name and height) and call the methods bark and jump.
# Create an if statement outside of the class to check which dog is bigger. Print the name of the bigger dog.

#ANSWER

# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f"{self.name} goes woof!")

#     def jump(self):
#         x = self.height * 2
#         print(f"{self.name} jumps {x} cm high!")
    
# davids_dog = Dog('Rex', 50)
# jully_dog = Dog('Dok', 70)
# suzi_dog = Dog('Tie', 100)

# big_dog = ''

# def bigger_dog(*other):
#     cur_max = 0
#     for index, dog in enumerate(other[::-1]):
#         if isinstance(dog, Dog):
#             if dog.height > cur_max:
#                 cur_max = dog.height
#                 big_dog = dog.name
#     print(big_dog)

# bigger_dog(davids_dog,jully_dog,suzi_dog)

# print(f"{davids_dog.name} {davids_dog.height}")
# davids_dog.bark()
# davids_dog.jump()

# 🌟 Exercise 3 : Who’s The Song Producer?
# Instructions
# Define a class called Song, it will show the lyrics of a song.
# Its __init__() method should have two arguments: self and lyrics (a list).
# Inside your class create a method called sing_me_a_song that prints each element of lyrics on its own line.
# Create an object, for example:

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])


# Then, call the sing_me_a_song method. The output should be:

# There’s a lady who's sure
# all that glitters is gold
# and she’s buying a stairway to heaven

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
        
#         print('\n'.join(self.lyrics))

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])

# stairway.sing_me_a_song()

# Exercise 4 : Afternoon At The Zoo
# Instructions


# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. This method removes the animal from the list and of course the animal needs to exist in the list.

# class Zoo:
#     def __init__(self, zoo_name):
#         self.animals = []
#         self.zoo = zoo_name
#         self.my_dict = {}
    
#     def add_animal(self, new_animal = input('Which animal should we add to the zoo?')):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)
#         else:
#             print('This animal already in the Zoo')

#     def get_animals(self):
#         print(self.animals)

#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#         else:
#             print('This animal not in the Zoo')

# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }

    # def sort_animals(self):
    #     sorted(self.animals)
    #     for animal in self.animals:
    #         if animal[0] in self.my_dict:
    #             self.my_dict[animal[0]].append(animal)
    #         else:
    #             self.my_dict[animal[0]] = [animal,]
    #     print(self.my_dict)

# Create a method called get_groups that prints the animal/animals inside each group.

    # def get_groups(self, alpha_letter):
    #     if alpha_letter in self.my_dict:
    #         print(self.my_dict[alpha_letter])
    #     else:
    #         print('We dont have any animals of this letter in the zoo')

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)
            
# ramat_gan_safari = Zoo('Safari')

# ramat_gan_safari.add_animal()
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups("G")

