# 🌟 Exercise 1 : Pets
# Instructions
# Using this code:

#ANSWERS

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat(Pets):
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
    
# #Create another cat breed named Siamese which inherits from the Cat class.
    
# class Siamese(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# #Create a list called all_cats, which holds three cat instances : one Bengal, one Chartreux and one Siamese.

# all_cats = [Bengal('Tom',12), Chartreux('Lily',7), Siamese('Jony', 3)]

# #Those three cats are Sara’s pets. Create a variable called sara_pets which value is an instance of the Pet class, 
#and pass the variable all_cats to the new instance.

# sara_pets = Pets(all_cats)

# # Take all the cats for a walk, use the walk method.

# sara_pets.walk()

# 🌟 Exercise 2 : Dogs
# Instructions
# Create a class called Dog with the following attributes name, age, weight.

#ANSWER

# class Dog:
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight
    
# #Implement the following methods in the Dog class:
# #bark: returns a string which states: “<dog_name> is barking”.

    # def bark(self):
    #     return f'{self.name} is barking'

# #run_speed: returns the dogs running speed (weight/age*10).

    # def run_speed(self):
    #     return (self.weight/self.age*10)
    
# #fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string 
##stating which dog won the fight. The winner should be the dog with the higher run_speed x weight.

    # def fight(self,other_dog):
    #     if self.run_speed()*self.weight > other_dog.run_speed()*other_dog.weight:
    #         print(f'The winner is {self.name}')
    #     elif self.run_speed()*self.weight == other_dog.run_speed()*other_dog.weight:
    #         print('We have no winner')
    #     else:
    #         print(f'The winner is {other_dog.name}')
# #Create 3 dogs and run them through your class.

# first = Dog('Tom', 10, 20)
# second = Dog('Jerry', 3, 25)
# third = Dog('Call', 7, 13)

# print(first.bark())
# print(second.bark())
# print(third.bark())

# print(first.run_speed())
# print(second.run_speed())
# print(third.run_speed())

# first.fight(second)
# second.fight(third)
# third.fight(first)

# 🌟 Exercise 3 : Dogs Domesticated
# Instructions
# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should 
# be False by default.

# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True
# play: takes a parameter which value is a few names of other Dog instances (use *args). 
# The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

#ANSWER

# import Dogs
# import random

# class PetDog(Dogs.Dog):
    
#     def __init__(self, name, age, weight, trained = False):
#         super().__init__(name, age, weight)
#         self.trained = trained
    
#     def train(self):
#         print('I am now barking')
#         self.trained = True

#     def play(self, *other):
#         print(f"{self.name}, {','.join(other[0:-1])} and {''.join(other[-1])} all play together")

#     def do_a_trick(self):
#         sentences = [f"{self.name} does a barrel roll", 
#                      f"{self.name} stands on his back legs", 
#                      f"{self.name} shakes your hand", 
#                      f"{self.name} plays dead"]
#         if self.trained == True:
#             print(random.choice(sentences))

# one = PetDog('Tom', 7, 10)

# one.train()
# one.play('Lily', 'Jilly')
# one.do_a_trick()
