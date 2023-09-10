
# class Dog :

#     def __init__(self, dog_name, dog_age, energy = "100", dog_color = "black") :
#         self.name = dog_name
#         self.age = dog_age
#         self.color = dog_color
#         self.energy = energy
#         # nb energypoints

#     # method happybirthday increment the age by one
#     def happy_birthday(self) :
#         self.age += 1

#     def show_info (self) :
#         print(f"The dog name is {self.name}, his age is {self.age}, he is of color {self.color}")

#     def go_to_groomer(self, owner_color) :
#         self.color = owner_color


#     def play (self, game) :
#         if self.energy >= 10:
#             if self.energy >= 10 and game == 'ball':
#                 self.energy -= 10
#                 print('Wow! I like ball')
#             elif self.energy >= 30 and game == 'frisbee':
#                 self.energy -= 30
#                 print('Wow! I like frisbee')
#             elif self.energy >= 70 and isinstance(game, Dog)':
#                 self.energy -=70
#                 game.energy -=70
#                 print('Wow! I like to play with another dog')
#             else:
#                 print('I dont have energy, choose another game')
#                 self.play(input('choose another game: '))
#         else:
#             print('I am exausted, I want to sleep')
#             def sleep(self):
#                 print('Zzzzzz')
#                 self.energy +=100
#                 print('I am ready to play again')
            
#             sleep(self)
            


# lea_dog = Dog("Spock", 2)
# # lea_dog.go_to_groomer("pink")
# # lea_dog.show_info()
# # print(lea_dog.__dict__)

# dan_dog = Dog("Rex", 4, "white")
# # # print(dan_dog.__dict__)
# # dan_dog.show_info()

# dan_dog.play('another dog')


# exercise

# Exercise 1 : Basic Classes
# Create a Employee class, With the attributes : firstname, lastname, age, job, salary

class Employee:
    def __init__(self, firstname, lastname, age, job, salary):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
    
    def get_fullname(self):
        return self.firstname +' '+ self.lastname

    def happybirthday(self):
        self.age +=1
        return self.age
    
    def get_promotion(self, promotion_amount):
        self.salary += promotion_amount
        return self.salary
    def show_info(self):
        print(f'{self.firstname},{self.lastname},{self.age}, {self.salary}')

lea_smith = Employee('Lea','Smith',30,'developer',25000)
david_schartz = Employee('David','Schartz',20,'project_manager',20000)

print(lea_smith.get_fullname())
print(lea_smith.happybirthday()) 
print(lea_smith.get_promotion(1000))
print(lea_smith.show_info())