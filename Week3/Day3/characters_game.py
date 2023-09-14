# Description
# Create a class called Character with the following attributes and methods:
# attribute name
# attribute life – starts with a default value of 20
# attribute attack – the base attack of a character (integer) will be a default of 10
# method basic_attack() - accepts another Character instance as a parameter. Your character will <attack> the other character so his <life> points should drop.

class Character:

    def __init__(self, name, life = 20, attack = 10):
        self.name = name
        self.life = life
        self.attack = attack

    def basic_attack(self, another_char):
        if isinstance(another_char, Character):
            if another_char.life <= self.attack:
                print(f'{another_char.name} died.')
            else:
                another_char.life -= self.attack
        return another_char.life

# Instructions
# Now create 3 different classes that inherit from Character:
# Every character type should say (ie. print) something when they are created, get creative :)
# Druid:
# meditate() - increases life by 10, decrease attack by 2
# animal_help()- increases attack by 5
# fight() - accepts another Character instance as a parameter and subtracts (0.75*life + 0.75*attack) from the other character’s life.
# Example:
# druid.fight(other_char): other_char.life - (0.75*self.life + 0.75*self.attack)

class Druid(Character):

    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print('Hi! I am druid.')

    def meditate(self):
        self.life += 10
        self.attack -= 2

    def animal_help(self):
        self.attack +=5

    def fight(self, another_char):
        if another_char.life <= self.attack + self.life:
            print(f'{another_char.name} died.')
        else:
            another_char.life -= (0.75*(self.life + self.attack))

# Warrior:
# brawl() - accepts another Character instance as a parameter, subtracts (2*attack) to the other characters life and adds (0.5*attack) to his own life.
# train() - increases both your attack and life points by 2.
# roar() - accepts another Character instance as a parameter and subtracts their attack points by 3.

class Warrior(Character):

    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print('Hi! I am warrior.')

    def brawl(self, another_char):
        if another_char.life <= self.attack:
            print(f'{another_char.name} died.')
        else:
            another_char.life -= 2*self.attack
            self.life += 0.5*self.attack

    def train(self):
        self.attack += 2
        self.life += 2
        print(f'My life now {self.life}, my attack - {self.attack}')
    
    def roar(self, another_char):
        another_char.attack -= 3


# Mage:
# curse() – accepts another Character instance as a parameter and subtracts their attack points by 2.
# summon() - increases attack attribute by 3 points.
# cast_spell() - accepts another Character instance as a parameter and subtracts attack/life to the other character’s life points (eg if your attack is 20 and life is 5 you will subtract 4 life points).

class Mage(Character):
    def __init__(self, name, life=20, attack=10):
        super().__init__(name, life, attack)
        print('Hi! I am a mage.')

    def curse(self, another_char):
        another_char.attack -=2

    def summon(self):
        self.attack += 3

    def cast_spell(self, another_char):
        if another_char.life <= self.attack:
            print(f'{another_char.name} died.')
        else:
            another_char.life -= self.attack/self.life

# Once all your classes are created start testing them, create one of each character and use each of their method.


a = Druid('Mike', 20, 20)
b = Warrior('Tomas', 20, 20)
c = Mage('Lily', 20, 20)

a.fight(b)

b.train()