# Part 1
# You will have to create two classes:
# Human
# Queue


# Human
# Represents a citizen of the city, it has the following attributes: id_number (str), name (str), 
#age (int), priority (bool) and blood_type (str). Its blood type can be “A”, “B”, “AB” or “O”.

# This class has no methods.

# Queue
# Represents a queue of humans waiting for their vaccine.
# It has the following attribute : humans, the list containing the humans that are waiting. 
#It is initialized empty.

# This class is useful to manage who will get vaccinated in priority. It has the following methods:

# add_person(self, person) : Adds a human to the queue, if he is older than 60 years old or a 
#priority person, put him at the beginning of the list (at index 0) before every other.

# find_in_queue(self, person) : Returns the index of a human in the queue.

# swap(self, person1, person2): Swaps person1 with person2.

# get_next_blood_type(self, blood_type) : Returns the first human with this specific blood type.

# sort_by_age(self) : Sorts the queue
# first the priority people
# then, the older people
# then the younger people
# Every human returned by get_next and get_next_blood_type is removed from the list.
# Those functions return None if the list is empty (ie. no one in the list).

# Part 2
# Human
# Create an attribute family for the Human class.

# Initialized as empty, family is a list of all the humans that are living in the same 
#house with this human.
# Add a method add_family_member(self, person) that adds the person to this human’s family 
#and this human to the person3’s family.

# Queue
# Add the rearrange_queue(self) method to the Queue class, so that there won’t be two members 
#of the same family one after the other in the line.

class Human:

    family = []

    def __init__(self, id, name, age, priority, blood_type):
        self.id = id
        self.name = name
        self.age = age
        self.priority = priority
        self.blood_type = blood_type

    def add_family_member(self, person):
        self.family.append(person)
        person.family.append(self)



class Queue:

    humans_queue = []

    def add_person(self, person):
        if person in self.humans_queue:
            print('Human already exist in the list')
        elif person.age > 60 or person.priority == True:
            self.humans_queue.insert(0, person)
        else:
            self.humans_queue.append(person)

    def find_in_queue(self, person):
        if person in self.humans_queue:
            return self.humans_queue.index(person)

    def swap(self, person1, person2):
        self.humans_queue[self.find_in_queue(person1)], self.humans_queue[self.find_in_queue(person2)] = self.humans_queue[self.find_in_queue(person2)], self.humans_queue[self.find_in_queue(person1)]

    def get_next(self):
        if len(self.humans_queue) == 0:
            return None
        print(self.humans_queue[0].name)
        self.humans_queue.pop(0)


    def get_next_blood_type(self, blood_type):
        if len(self.humans_queue) == 0:
            return None
        first_human = next(filter(lambda x: x.blood_type == blood_type, self.humans_queue), None)
        print(first_human.name)
        self.humans_queue.remove(first_human)

    def sort_by_age(self):
        self.humans_queue.sort(key=lambda human: human.age, reverse=True)
        self.humans_queue.sort(key=lambda human: human.priority)
        print(self.humans_queue)

    def rearrange_queue(self):
        for index, i in enumerate(self.humans_queue[::1]):
            if self.humans_queue[index-1] in i.family:
                self.humans_queue[index-1], self.humans_queue[index-2] = self.humans_queue[index-2],  self.humans_queue[index-1]
        print(self.humans_queue)



Oleg = Human('1', 'Oleg', 34, True, 'A')
Nina = Human('2', 'Nina', 76, False, 'B')
John = Human('3', 'John', 87, True, 'AB')
Lily = Human('4', 'Lily', 12, False, 'O')

queue = Queue()

queue.add_person(Oleg)
queue.add_person(Nina)
queue.add_person(John)
queue.add_person(Lily)

print(queue.find_in_queue(Oleg))

queue.swap(Oleg, John)

print(queue.find_in_queue(Oleg))

queue.get_next()

queue.get_next_blood_type('AB')

queue.add_person(John)
queue.add_person(Oleg)

queue.sort_by_age()

Oleg.add_family_member(Nina)

queue.rearrange_queue()