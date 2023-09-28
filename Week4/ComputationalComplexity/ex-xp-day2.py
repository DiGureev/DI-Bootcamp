# 🌟 Exercise 1: Task Scheduler
# Instructions
# Write a Python program that simulates a task scheduler using a queue. The program should:

# Add a task to the queue with a description and priority level.
# Execute the next task based on its priority (First-In-First-Out if priority levels are the same).
# Show the current task queue.
# Use Python’s collections.deque for the queue implementation.

#ANSWER
from queue import PriorityQueue
from collections import deque


# queue = PriorityQueue()

# queue.put((10, 'Do the Homework'))
# queue.put((2, 'Clean the room'))
# queue.put((1, 'Go for a walk'))

# print(queue.get())
# print(queue.queue)


# 🌟 Exercise 2: Palindrome Checker
# Create a Python function to check if a given word or phrase is a palindrome using a queue. 
# Ignore spaces and case sensitivity.

# # Example:
# # check_palindrome("Racecar") -> Output: True
# # check_palindrome("hello") -> Output: False

def check_palindrome(my_string: str):
    my_queue = deque(my_string)
    equal = True

    while len(my_queue) > 1 and equal:
        first_l = my_queue.popleft()
        second_l = my_queue.pop()

        if first_l != second_l:
            equal = False

    return equal
    
# print(check_palindrome('aziza'))

# 🌟 Exercise 3: Merge Two Sorted Linked Lists


# linked_list


# Part 1: Create The Node Class
# Your first task is to create a Node class. This class should contain:

# An __init__ method that initializes two attributes:
# value, which holds the data the node will store.
# next, which is a reference to the next node in the list. It should be initialized as None.

class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

# Part 2: Create The LinkedList Class
# Your next step is to create a LinkedList class. This class should contain:

# An __init__ method that initializes a head attribute as None.
# An append method to add new nodes to the end of the list:
# Create a new node with the given value using the Node class.
# If the head is None, make this new node the head.
# Otherwise, traverse the list to find the last node and attach the new node there.
# This class will serve as a wrapper around the Node objects and will offer a way to manipulate the linked list.

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        if self.head == None:
            self.head = Node(value)
        else:
            cur = self.head
            while cur.next:
                cur = cur.next

            cur.next = Node(value)
            return self.head


# Part 3: Implement The Merge_sorted_linked_lists Function
# Finally, write a function named merge_sorted_linked_lists that does the following:

# Takes two sorted LinkedList objects as input arguments.
# Initializes a “dummy” node to help easily build the new sorted linked list.
# Uses two pointers to traverse both lists and a third pointer to construct the new list.
# Adds the node with the smaller value to the new list and advances the respective list pointer.
# If one list is exhausted, appends the remaining nodes from the other list to the new list.
# The function should return the head of the new sorted linked list.


#Answer - I did it with tutorial. but I feel like i don't understand how to work 
# with linkedlists at all, dont think I could write it myself ever :(
def merge_sorted_linked_lists(list1, list2):
    dummy = Node(0)
    tail = dummy
    while True:
        if list1.head == None:
            tail.next = list2.head
        if list2.head == None:
            tail.next = list1.head
        if list1.head.value <= list2.head.value:
            tail.next = list1.head
            list1.head = list1.head.next
        else:
            tail.next = list2.head
            list2.head = list2.head.next
        tail = tail.next
        return dummy.next
    
list1 = LinkedList()
list2 = LinkedList()

list1.append(5)
list1.append(10)
list1.append(15)

list2.append(2)
list2.append(3)
list2.append(20)

list1.head = merge_sorted_linked_lists(list1, list2)




    




# Example:


# # List1: 1 -> 3 -> 5
# # List2: 2 -> 4 -> 6
# # Merged List: 1 -> 2 -> 3 -> 4 -> 5 -> 6