#Ex-3

# Predict the output of the following code snippets:
#     >>> 3 <= 3 < 9 → True
#     >>> 3 == 3 == 3 → True
#     >>> bool(0) → False
#     >>> bool(5 == "5") → False
#     >>> bool(4 == 4) == bool("4" == "4") → True
#     >>> bool(bool(None)) → False
    
    # # x = (1 == True) → Error
    # # y = (1 == False) → Error
    # a = True + 4 → Error
    # b = False + 10 → Error

    # # print("x is", x)
    # # print("y is", y)
    # print("a:", a)
    # print("b:", b)

#Ex-4

# Use python to find out how many characters are in the following text, use a single line of code (beyond the establishment of your my_text variable).

# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# print(len(my_text))

#Ex-5

# Keep asking the user to input the longest sentence they can without the character “A”.
# Each time a user successfully sets a new longest sentence, print a congratulations message.

user_choice = input("Create the longest sentence you can without 'A' character\n")

if "a" not in user_choice or "A" not in user_choice:
    print("Nice try, but no")
else:
    print("Wow! Congrats!")
