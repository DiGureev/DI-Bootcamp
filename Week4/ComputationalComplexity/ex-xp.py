# 🌟 Exercise 1: Identifying Time Complexity
# Instructions
# Identifying the Time Complexity for each of the below programs

from time import time

def timer(func):

    def wrapper(*args, **kwargs):
        start = time()
        func(*args, **kwargs)
        end = time()
        print(f"Time <{func.__name__}>: {end-start}")

    return wrapper

@timer
def function1():
    for i in range(10):
        print(i)


# timer(function1()) #0.013947486877441406

@timer
def function2():
    for i in range(10):
        for j in range(10):
            print(i, j)

# timer(function2()) #0.008568763732910156

@timer
def function3():
    i = 1
    while i < 8:
        i *= 2
        print(i)

# timer(function3()) #0.0011527538299560547

# 🌟 Exercise 2: Understanding Insertion Sort
# Instructions
# Insertion Sort is an in-place, stable sorting algorithm that works in a manner similar to sorting a hand 
# of playing cards. It sorts the array by moving each element to its correct position in the sorted part of 
# the array.

# insertion_sort

# Algorithm Explanation

# Start from the second element (index 1), assume the element at index 0 is sorted.
# Compare the current element with the previous elements.
# If the current element is smaller than the previous element, move the previous element to the right.
# Repeat the process until the correct position for the current element is found and then insert it.
# Continue the process for each of the elements in the unsorted section of the array.


# Complexity

# Best-case time complexity: O(n) when the array is already sorted.
# Average-case time complexity: O(n^2)
# Worst-case time complexity: O(n^2) when the array is sorted in reverse order.
# Space complexity: O(1) (In-place)

# Rules

# Insertion sort is stable; it does not change the relative order of equal elements.
# It’s an in-place algorithm; it sorts the array by making changes within the array itself.
# It’s adaptive, meaning it becomes faster if the array is partially sorted.


# Your task is to implement this algorithm in Python and understand its performance characteristics.
# You can use the following starting point:

# numbers = [5, 2, 9, 1, 5, 6]

# def insertion_sort(numbers: list) -> None:
#    pass

# insertion_sort(numbers) # sorts the numbers list
# print(numbers) # check that the sorting is successfull

#ANSWER

def insertion_sort(numbers: list) -> None:
   for i in range(1, len(numbers)):
      value = numbers[i]
      j = i - 1
      while value < numbers[j] and j >= 0:
         numbers[j + 1] = numbers[j]
         j -= 1
      numbers[j + 1] = value

# 🌟 Exercise 3: Understanding Binary Search
# Instructions
# Binary Search is an efficient algorithm for finding a target value within a sorted array. 
# Unlike linear search, which checks each element in order, binary search divides the array in half and eliminates half of the remaining elements in each iteration.

# binary_search

# Algorithm Explanation

# Ensure that the array is sorted.
# Define three pointers: low, high, and mid. Initialize low at index 0 and high at the last index of the array.
# Calculate mid as the average of low and high.
# Compare the mid-element with the target.
# If it’s equal, return the index of mid.
# If it’s less, update low = mid + 1 and continue.
# If it’s more, update high = mid - 1 and continue.
# If low exceeds high, the target is not in the array.

# Complexity

# Best-case time complexity: O(1) when the target is in the middle of the array.
# Average-case time complexity: O(log n)
# Worst-case time complexity: O(log n)
# Space complexity: O(1) (In-place)


# Rules

# Binary search only works on sorted arrays.
# It’s an in-place algorithm; it doesn’t require extra space to operate, aside from variables for the pointers.
# It can return incorrect results on non-distinct arrays if you’re not careful about updating low and high.


# Your task is to implement this algorithm in Python and understand its performance characteristics.

#ANSWER

desire_number = 7
low = 0
last = 10
mid = (low + last) // 2 #8

while mid != desire_number:
    if desire_number > mid:
        low = mid + 1
    elif desire_number < mid:
        last = mid - 1
    mid = (low + last) // 2
    print(mid)
