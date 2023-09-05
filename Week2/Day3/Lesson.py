# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history": 80
#          }
#       }
#    }
# }

# a = sample_dict["class"]["student"]["marks"]["history"]

# print(a)

# words = ['PYTHON', "JOHN", "chEEse", "ham", "DOE", "123"]

# new_list = [word for word in words if word.isupper()]
# print(new_list)

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# # }

# # del sample_dict["name"]
# # del sample_dict["salary"]

# # print(sample_dict)



# Exercise 3
# Print the total duration of the playlist

# playlist = {
#     'title': "Hello World",
#     'author': "Planet",
#     'songs': [
#         {
#             'song_title': "Song One",
#             'artist': ['Artist 1', 'Artist 2'],
#             'duration': 4.31,
#         },
#         {
#             'song_title': "Song Two",
#             'artist': ['Artist 1'],
#             'duration': 2.53,
#         },
#         {
#             'song_title': "Song Three",
#             'artist': ['Artist 1', 'Artist 2', 'Artist 3'],
#             'duration': 3.43,
#         }
#     ]
# }

# total_duration = 0

# for x in playlist['songs']:
#     total_duration += x['duration']
# print(total_duration)

a = "Helllloooo"

for i,char in enumerate(a):
    print(char)
    i += 1

