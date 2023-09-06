# Given a “Matrix” string:

# my_string = '7ii Tsx h%? i # sM $a #t% ^r!'
# matrix = list(my_string)

# matrix = [
#     ['7', 'i', 'i'], 
#     ['T', 's', 'x'], 
#     ['h', '%', '?'], 
#     ['i', ' ', '#'], 
#     ['s', 'M', ' '], 
#     ['$', 'a', ' '], 
#     ['#', 't', '%'], 
#     ['^', 'r', '!']
# ]

# decrypt = []

# alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Za b c d e f g h i j k l m n o p q r s t u v w x y z $'

# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting only the alpha characters and connecting them. Then he replaces every group of symbols between two alpha characters by a space.
# Using his technique, try to decode this matrix.

# for simbol in matrix:
#     if simbol[0] in alphabet:
#         decrypt.append(simbol[0])
# for simbol in matrix:
#     if simbol[1] in alphabet:
#         decrypt.append(simbol[1])
# for simbol in matrix:
#     if simbol[2] in alphabet:
#         decrypt.append(simbol[2])

# result = ''.join(decrypt)

# print(result.replace('$',' '))    
