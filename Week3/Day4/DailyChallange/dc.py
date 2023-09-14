# Instructions :
# The goal of the exercise is to create a class that will help you analyze a specific text. 
#A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.

# Part I
# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”
# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None 
#or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

#ANSWER

# class Text:
#     def __init__(self, text = 'A good book would sometimes cost as much as a good house.'):
#         self.text = text

#     def freq_word(self,word):
#         list_words = self.text.split()
#         count = 0
#         for i in list_words:
#             if i == word:
#                 count +=1
#         if count == 0:
#             return None
#         return count
    
#     def common(self):
#         list_words = self.text.split()
#         freq_word = {

#         }
#         for word in list_words:
#             for i in list_words:
#                 if list_words.count(word) > list_words.count(i):
#                     freq_word[word] = list_words.count(word)
        
#         if len(freq_word) > 1:
#             print(f'We have couple words with the same frequency: {freq_word}')
#         else:
#             print(freq_word)

#     def unique(self):
#         list_words = self.text.split()
#         list_unique = []
#         for word in list_words:
#             if list_words.count(word) == 1:
#                 list_unique.append(word)
#         print(list_unique)

# Part II
# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.
# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.

#ANSWER

# import os

# class Text:

#     @classmethod
#     def from_file(cls, input_file):
#         dir_path = os.path.dirname(os.path.realpath(__file__))
#         with open(f"{dir_path}/{input_file}", "r") as my_file:
#             return my_file.read()

# print(Text.from_file('the_stranger.txt'))

# Now, use the provided the_stranger.txt file and try using the class you created above.

# Bonus:
# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)

#ANSWER Note: I didn't manage with 'stop-words'part with nltk method, mb there is better way to implement?

# import nltk

# nltk.download('stopwords')

# class TextModification(Text):

#     def without_punc(self, input_file):
#         text = self.from_file(input_file)
#         result = ''.join(filter(lambda x: x.isalpha() or x.isdigit() or x.isspace(), text))
#         return result
    
#     def spec(self, input_file, char):
#         text = self.from_file(input_file)
#         return text.replace(char,'')

    
    # def stop(self,input_file):
    #     text = self.from_file(input_file)
    #     text_tokens = nltk.word_tokenize(text)
    #     tokens_without_sw = [word for word in text_tokens if not word in nltk.stopwords.words()]
    #     print(tokens_without_sw)

# a = TextModification()

# print(a.spec('the_stranger.txt', 'a'))
