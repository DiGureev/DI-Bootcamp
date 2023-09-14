# It should do the following:
# Show a menu, offering the user to input a word or exit. Keep showing the menu until the user chooses to exit.

# If the user chooses to input a word, it must be accepted from the user’s keyboard input, and then be validated:
# Only a single word is allowed. If the user typed more than one word, show an error message. (Hint: how do we know how many words were typed?)
# Only alphabetic characters are allowed. No numbers or special characters.
# Whitespace should be removed from the start and end of the user’s input.

# Once your code has decided that the user’s input is valid, it should find out the following:
# All possible anagrams to the user’s word.
# Create an AnagramChecker instance and apply it to the steps created above.
# Display the information about the word in a user-friendly, nicely-formatted message such as:


# YOUR WORD :”MEAT”
# this is a valid English word.
# Anagrams for your word: mate, tame, team.

from anagram_checker import AnagramChecker

def get_the_input():
    while True:
        word = (input('Give me the word or type "exit" to quit: ').strip())
        if word == 'exit':
            break
        elif len(word.split()) > 1:
            print('I can take just one word in a time')
            continue
        elif word.isalpha() == False:
            print('I can understand only words')
            continue
        else:
            break
    return AnagramChecker(word)

a = get_the_input()

a.is_valid_word()
a.get_anagrams()