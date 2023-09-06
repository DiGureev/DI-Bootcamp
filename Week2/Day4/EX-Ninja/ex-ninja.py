# Exercise 1 : Cars
# Instructions
# Copy the following string into your code: "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet".
# Convert it into a list using Python (don’t do it by hand!).

# my_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# my_list = my_string.split(',')

# Print out a message saying how many manufacturers/companies are in the list.

# print(f'In the list {len(my_list)} companies')

# Print the list of manufacturers in reverse/descending order (Z-A).

# print(sorted(my_list,reverse=True))

# Using loops or list comprehension:
# Find out how many manufacturers’ names have the letter ‘o’ in them.

# list_name_o = [word for word in my_list if 'o' in word]

# print(len(list_name_o))


# Find out how many manufacturers’ names do not have the letter ‘i’ in them.

# list_name_i_false = [word for word in my_list if 'i' not in word]

# print(len(list_name_i_false))

# Bonus: There are a few duplicates in this list:["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
# Remove these programmatically. (Hint: you can use set to help you).

# list_dupl = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# list_without_dupl = set(list_dupl)

# my_string = str(list_without_dupl).replace("'", "").replace("{", "").replace("}","")

# Print out the companies without duplicates, in a comma-separated string with no line-breaks (eg. “Acura, Alfa Romeo, Aston Martin, …”), also print out a message saying how many companies are now in the list.

# print(f'In the list {len(list_without_dupl)} companies: {my_string}')

# Bonus: Print out the list of manufacturers in ascending order (A-Z), but reverse the letters of each manufacturer’s name.

# my_string = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

# my_list = sorted(my_string.split(','))

# for word in my_list:
#     print(word[::-1])
    