# Create a new file called anagram_checker.py which contains a class called AnagramChecker.

# The class should have the following methods:
# __init__ - should load the word list file (text file) into a variable, so that it can be searched later on in the code.
# is_valid_word(word) – should check if the given word (ie. the word of the user) is a valid word.
# get_anagrams(word) – should find all anagrams for the given word. (eg. if word of the user is ‘meat’, the function should return a list containing [“mate”, “tame”, “team”].)

# Hint: you might want to create a separate method called is_anagram(word1, word2), that will compare 2 words and return True if they contain the same letters (but not in the same order), and False if not.

# Note: None of the methods in the class should print anything.

import os

class AnagramChecker:

    def __init__(self, word):
        self.word = word.upper()
        dir_path = os.path.dirname(os.path.realpath(__file__))
        with open(dir_path + r"/words.txt", "r") as my_file:
            self.words = (','.join((my_file.readlines())).replace('\n','')).split(',')
        
    def is_valid_word(self):
            if self.word in self.words == False:
                raise Exception('This is not an english word')
            return True
   
    def get_anagrams(self):
        self.is_valid_word()
        list_of_anagrams = []
        for anag in self.words:
            if ''.join(sorted(anag)) == ''.join(sorted(self.word)) and anag != self.word:
                list_of_anagrams.append(anag.lower()) 
        print(f"YOUR WORD: {self.word}\nthis is a valid English word.\nAnagrams for your word: {', '.join(list_of_anagrams)}")
