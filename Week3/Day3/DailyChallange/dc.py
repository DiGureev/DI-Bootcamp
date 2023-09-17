# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# import math
# from turtle import *

# class Circle:

#     all_circles = []

#     def __init__(self, radius = None, diametr = None):
#         if radius == None and diametr == None:
#             raise ValueError('Should be either radius or diametr')
#         elif radius == None:
#             self.radius = diametr/2
#             self.diametr = diametr
#         else:
#             self.radius = radius
#             self.diametr = radius*2
    
# # Other abilities of a Circle instance:

# # Compute the circle’s area

#     def area(self):
#         return math. pi*(self.radius**2)

# # Print the attributes of the circle - use a dunder method

#     def __str__(self):
#         return f'This circle has {self.radius} radius and {self.diametr} diametr and area {self.area()}'
        
#     def __repr__(self):
#         return f'Radius: {self.radius}, Diametr: {self.diametr}, Area: {self.area()}'
        
# # Be able to add two circles together, and return a new circle with the new radius - use a dunder method

#     def __add__(self, other_circle):
#         return Circle(self.radius + other_circle.radius)

# # Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method

#     def __gt__(self, other_circle) :
#         return self.diametr > other_circle.diametr
        
# # Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method

#     def __eq__(self, other_circle):
#         return self.diametr == other_circle.diametr

# # Be able to put them in a list and sort them

    # @staticmethod
    # def get_radius(circle):
    #     return circle.radius
        
    # @classmethod
    # def circle_list(cls):
    #     list_circle = sorted(cls.all_circles, key = cls.get_radius)
    #     for circle in list_circle:
    #         print(circle)
    #     return list_circle
    
# # Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

#     def draw(self):
#         my_list = circle_list() #dont know what atribute put here
#         penup()
#         goto(0,-100)
#         bgcolor("white")
#         color('black')
#         pendown()
#         begin_fill()
#         for circle in Circle.list_circle:
#             circle(circle.radius)
#         end_fill()

# one = Circle(10)
# two = Circle(5)

# one.circle_list(two)
# one.draw() #not working((



