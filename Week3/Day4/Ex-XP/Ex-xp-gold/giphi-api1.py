# Exercise 2 : Giphy API #1
# Instruction
# Hint: For this exercise, check out the documentation of the Giphy API

#ANSWER
import requests
import json
import pprint

# query = 'hilarious'
# response = requests.get(f"https://api.giphy.com/v1/gifs/search?q={query}&rating=g&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
# if response.status_code == 200:
#     items = response.json()

# def filt():
#     gif_list = []
#     for item in items['data']:
#         if int(item['images']['original']['height']) > 100:
#             gif_list.append(item['images']['original']['url'])
#     print(gif_list)
#     return len(gif_list)

# print(filt())

# Use f-strings and variables to build the URL string we’re using for the fetch.
# If the status code is 200 return the result as a JSON object.
# Only return gifs which have a height bigger then 100.
# Return the length of the object you received in the previous question.
# Only return the first 10 gifs. Hint: In the Giphy Documentation, check out the relevant Request Parameters.


# Exercise 3 : Giphy API #2
# Instructions
# Hint: For this exercise, You will work with this part of the documention
# You will use this API KEY : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

# Create a small Python program which asks the user for a term or phrase and returns all the relevant gifs. (Example: all
# the “hilarious” gifs)
# If the term or phrase doesn’t exist or if the user didn’t enter a correct term or phrase, return the trending gifs of the day 
#and a message stating that you couldn’t find the requested term or phrase.
# Note from the documentation : GIPHY Trending returns a list of the most relevant and engaging content each and every day.

#ANSWER
# query = input('What are you searching for? ')
# response = requests.get(f"https://api.giphy.com/v1/gifs/search?q={query}&rating=g&limit=100&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
# if response.status_code == 200:
#     items = response.json()

# if response.status_code == 200 and len(items['data']) == 0:
#     print("Couldn't find the requested term or phrase")
#     query = 'trending'
#     response = requests.get(f"https://api.giphy.com/v1/gifs/search?q={query}&rating=g&limit=100&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
#     if response.status_code == 200:
#         items = response.json()

# def filt():
#     gif_list = []
#     for item in items['data']:
#         if int(item['images']['original']['height']) > 100:
#             gif_list.append(item['images']['original']['url'])
#     print(gif_list)
#     return len(gif_list)

# print(filt())