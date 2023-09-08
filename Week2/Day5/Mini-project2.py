# Instructions
# The computer choose a random word and mark stars for each letter of each word.
# Then the player will guess a letter.
# If that letter is in the word(s) then the computer fills the letter in all the correct positions of the word.
# If the letter isn’t in the word(s) then add a body part to the gallows (head, body, left arm, right arm, left leg, right leg).
# The player will continue guessing letters until they can either solve the word(s) (or phrase) or all six body parts are on the gallows.
# The player can’t guess the same letter twice.

import random

def get_the_word():
    wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
    word = random.choice(wordslist)
    return word

def play(word):
    stars  = ('*' * len(word))
    guessed = False
    guessed_letters = []
    guessed_words = []
    tries = 6
    print("Let's play!")
    print(display_hangman(tries))
    print(stars)
    print("\n")
    while not guessed and tries > 0:
        user_input = input("Please guess the letter or word: ")
        if len(user_input) == 1 and user_input.isalpha():
            if user_input in guessed_letters:
                print("You are already guessed the letter" , user_input)
            elif user_input not in word:
                print(f"{user_input} is not in the word")
                tries -=1
                guessed_letters.append(user_input)
            else:
                print('Good job!')
                guessed_letters.append(user_input)
                stars_as_list = list(stars)
                indexes = [i for i,letter in enumerate(word) if letter == user_input]
                for index in indexes:
                    stars_as_list[index] = user_input
                stars = "".join(stars_as_list)
                if "*" not in stars:
                    guessed == True
        elif len(user_input) == len(word) and user_input.isalpha():
                if user_input in guessed_words:
                    print("You alredy guessed the word", user_input)
                elif user_input != guessed_words:
                    print(f"{user_input} is not an answer")
                    tries -=1
                    guessed_words.append(user_input)
                else:
                    guessed == True
                    stars = word
        else:   
            print('No..try again')
        print(display_hangman(tries))
        print(tries)
        print(stars)
        print('\n')
    if guessed:
        print("Congrats!You win!")
    else:
        print(f"Sorry, you are out of try, the word was {word}")

def display_hangman(tries):
    stages = [  # final state: head, torso, both arms, and both legs
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / \\
                   -
                """,
                # head, torso, both arms, and one leg
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |     / 
                   -
                """,
                # head, torso, and both arms
                """
                   --------
                   |      |
                   |      O
                   |     \\|/
                   |      |
                   |      
                   -
                """,
                # head, torso, and one arm
                """
                   --------
                   |      |
                   |      O
                   |     \\|
                   |      |
                   |     
                   -
                """,
                # head and torso
                """
                   --------
                   |      |
                   |      O
                   |      |
                   |      |
                   |     
                   -
                """,
                # head
                """
                   --------
                   |      |
                   |      O
                   |    
                   |      
                   |     
                   -
                """,
                # initial empty state
                """
                   --------
                   |      |
                   |      
                   |    
                   |      
                   |     
                   -
                """
    ]
    return stages[tries]


def main():
    word = get_the_word()
    play(word)
    while input("Play again? Y/N?") == "Y":
        word = get_the_word()
        play(word)

if __name__ == "__main__":
    main()