# Instructions :
# Consider this list
# Look at this result :

# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module. Take a look at the googletrans module

#ANSWER

from googletrans import Translator

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 
english_words = []
translator = Translator()

for i in french_words:
    translation = translator.translate(i)
    english_words.append(translation.text)

my_dict = {french_words[i]: english_words[i] for i in range(len(french_words))}
print(my_dict)
