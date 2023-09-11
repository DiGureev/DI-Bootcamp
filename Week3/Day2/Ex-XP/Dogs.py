class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'
    
    def run_speed(self):
        return (self.weight/self.age*10)
    
    def fight(self,other_dog):
        if self.run_speed()*self.weight > other_dog.run_speed()*other_dog.weight:
            print(f'The winner is {self.name}')
        elif self.run_speed()*self.weight == other_dog.run_speed()*other_dog.weight:
            print('We have no winner')
        else:
            print(f'The winner is {other_dog.name}')