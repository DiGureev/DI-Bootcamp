# Problem Description
# Write a Python program that checks if the given expression has balanced parentheses or not. An expression is said 
#to have balanced parentheses if each opening symbol has a corresponding closing symbol and the pairs of parentheses are properly nested.

# For simplicity, you can consider these three types of parentheses: round (), square [], and curly {}.

# Input:
# A string expr containing an expression that may include parentheses, numbers, and basic arithmetic operators.

# Output:
# Return True if the expression has balanced parentheses.
# Return False otherwise.


# Example Inputs And Outputs
# Input: "(1 + 2) * {[(3 / 4) - 5]}"
# Output: True

# Input: "[1 + 2) * (3 - 4)]"
# Output: False

# Input: "((1 + 2)"
# Output: False

user_input = '(1 + 2) * {[(3 / 4) - 5]}'
open = ['[', '(', '{']
close = [']', ')', '}']

cur = ['[', ]

for i in user_input:
    if i in open:
        cur.append(i)
    if i in close:
        x = cur[-1] 
        cur.append(i)
        if open.index(x) == close.index(i):
            cur.pop()
        

if len(cur):
    print(False)
else:
    print(True)


# Constraints
# The expression string may contain numbers, arithmetic operators, and three types of parentheses.


# Hints
# Use a stack to keep track of the opening parentheses and make sure you pop the correct corresponding closing parenthesis.
# Every time you encounter a closing parenthesis, check if it corresponds to the last opened (and not closed) one.


# Bonus
# Can you modify the program to also validate other types of pairs like quotes (" and ')?