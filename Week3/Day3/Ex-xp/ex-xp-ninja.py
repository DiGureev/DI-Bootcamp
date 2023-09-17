# Exercise 1 : Temperature
# Instructions
# Write a base class called Temperature.
# Implement the following subclasses: Celsius, Kelvin, Fahrenheit.
# Each of the subclasses should have a method which can convert the temperture to another type.
# You must consider different designs and pick the best one according to the SOLID Principle.

class Temperature:

    def __init__(self, temp, conv):
        self.temp = temp
        self.conv = conv

    def turn_from_cels(self):
        if self.conv == 'Kelvin':
            self.temp += 273.15
            return self.temp
        elif self.conv == 'Fahrenheit':
            self.temp = self.temp*1.800+32
            return self.temp
        
    def turn_from_kelv(self):
        if self.conv == 'Celsius':
            self.temp -= 273.15
            return self.temp
        elif self.conv == 'Fahrenheit':
            self.temp = (self.temp - 273.15)* 1.8000 + 32.00
            return self.temp
        
    def turn_from_far(self):
        if self.conv == 'Celsius':
            self.temp = (self.temp - 32) * 5/9
            return self.temp
        elif self.conv == 'Kelvin':
            self.temp = (self.temp - 32) * 5/9 + 273.15
            return self.temp

class Celsius(Temperature):

    def __init__(self, temp, conv):
        super().__init__(temp, conv)
    
    def turn(self):
        super().turn_from_cels()
    
class Kelvin(Temperature):
    def __init__(self, temp, conv):
        super().__init__(temp, conv)

    def turn(self):
        super().turn_from_kelv()
    
class Fahrenheit(Temperature):
    
    def __init__(self, temp, conv):
        super().__init__(temp, conv)

    def turn(self):
        super().turn_from_far()


a = Celsius(32, 'Kelvin')

print(a.turn())

# Exercise 2: In The Quantum Realm
# Instructions
# Write a class called QuantumParticle and implement the following:
# The attributes - The particle has an initial position (x), momentum (y) and spin (p)

# The method position() - Position measurement: generate a random position (integer between 1 and 10,000)

# The method momentum() - Momentum measurement: generate a random momentum (float - a number between 0 and 1)

# The method spin() - Spin measurement: can randomly be 1/2 or -1/2

# Create a method that implements a disturbance. A disturbance occurs each time a measurement is made (e.g. 
#one of the measurements method is called). Disturbance changes the position and the momentum of the particle 
#(randomly generated) and then prints ‘Quantum Interferences!!’

import random

class QuantumParticle:
    def __init__(self, x = 0, y = 0, p = 0.5):
        self.pos = x
        self.mom = y
        self.sp = p
        self.pos_m = True
        self.mom_m = True

    def __repr__(self):
        return f"Position: {self.pos}, Momentum: {self.mom}, Spin: {self.sp}"
    
    def position(self):
        self.pos = random.randrange(1,10000)
        self.pos_m = False
        return self.pos
    
    def momentum(self):
        self.mom = random.randrange(0.0,1.0)
        self.mom_m = False
        return self.mom
    
    def spin(self):
        a_list = [0.5,-0.5]
        self.sp = random.choice(a_list)
        return self.sp

    def q_int(self, x, y, p):
        super.__init__(x, y, p)
        if self.pos_m == False:
            self.momentum()
            print(self.__repr__())
        elif self.mom_m == False:
            self.position()
            print(self.__repr__())
        elif self.sp == 0.5:
            self.momentum()
            self.position()
            print(self.__repr__())
        elif self.sp == -0.5:
            self.momentum()
            self.position()
            print(self.__repr__())
        print('Quantum Interferences!!')
        self.pos_m = True
        self.mom_m = True

    def entangle(self, other_part):
        self.spin()
        if isinstance(other_part, QuantumParticle):
            if self.sp == 0.5:
                other_part.sp = -0.5
            elif self.sp == -0.5:
                other_part.sp = 0.5
        else:
            print('Other particle is not a QuantumParticle')
        print('Spooky Action at a Distance !! Particle one is now in quantum entanglement with Particle two')



# Implement a meaningful representation of the particle (repr)

# Quantum Entanglement: two particle can be entangled, meaning that if I measure the spin of one of them the 
#second one is automatically set to the opposite value. A quantum particle can only be entangled to another 
#quantum particle (check that when you run the method !!)

# Modify as you see fit the attributes and methods of your class to fit the previous definition
# When two particles are entangled print: ‘Spooky Action at a Distance !!’
# >>>p1 = QuantumParticle(x=1,p=5.0)
# >>>p2 = QuantumParticle(x=2,p=5.0)
# >>>p1.entangle(p2)
# >>>'Particle p1 is now in quantum entanglement with Particle p2'
# >>>p1 = QuantumParticle()
# >>>p2 = QuantumParticle()
# >>>p1.entangle(p2)
# >>>'Spooky Action at a Distance'