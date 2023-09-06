# Challenge 1
# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}

#ANSWER

# word = input('Give me a word: ')

# word_dict = {}

# for value,key in enumerate(word):
#     if key in word_dict:
#         word_dict[key].append(value)
#     else:
#         word_dict[key] = [value]

# print(word_dict)

# Challenge 2
# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Examples

# The key is the product, the value is the price

# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100" 

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1" 

# ➞ "Nothing"

#ANSWER

items_dict = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5000",
  "Tablet": "$1200"
}

wallet = "$1500" 
my_item_list = []

convert_wallet = int(wallet.replace("$", " "))

for key, value in items_dict.items():
    value = int(value.replace("$", " "))
    if value <= convert_wallet:
        my_item_list.append(key)
        convert_wallet -= value
        
print(f" I've already bought {my_item_list}, I can't afford anithing else, I have {convert_wallet} dollars left")
