my_string = 'You have entered a wrong domain'

ordered_list = my_string.split(' ')

reverse_list = []

for i in ordered_list:
    reverse_list.insert(0,i)

print(' '.join(reverse_list))