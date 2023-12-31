# game.py – this file/module should contain a class called Game. It should have 4 methods:
# get_user_item(self) – Ask the user to select an item (rock/paper/scissors). Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.

# get_computer_item(self) – Select rock/paper/scissors at random for the computer. Return the item at the end of the function. Use python’s random.choice() function (read about it online).

# get_game_result(self, user_item, computer_item) – Determine the result of the game.
# Parameters:
# user_item – the user’s chosen item (rock/paper/scissors)
# computer_item – the computer’s chosen (random) item (rock/paper/scissors)
# Return either win, draw, or loss. Where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.

# play(self) – the function that will be called from outside the class (ie. from rock-paper-scissors.py). It will do 3 things:
# Get the user’s item (rock/paper/scissors) and remember it

# Get a random item for the computer (rock/paper/scissors) and remember it

# Determine the results of the game by comparing the user’s item and the computer’s item
# Print the output of the game; something like this: “You selected rock. The computer selected paper. You lose”, “You selected scissors. The computer selected scissors. You drew!”

# Return the results of the game as a string: win;draw;loss;, where win means that the user has won, draw means the user and the computer got the same item, and loss means that the user has lost.

import random

class Game:

    def __init__(self):
        self.results = {'win': 0,
                        'loss': 0,
                        'drew': 0}

    def get_user_item(self):
        while True:
            self.user_choice = input('Choose one:\nr - rock\np - paper\ns - scissors\n')
            if self.user_choice == 'r' or self.user_choice == 'p' or self.user_choice == 's':
                break
            else:
                print('Wrong input!')
        return self.user_choice

    def get_computer_item(self):
        list_of_choice = ['r', 'p', 's']
        self.computer_choice = random.choice(list_of_choice)
        return self.computer_choice
    
    def get_game_result(self, user_item, computer_item):
        if (user_item == 'r' and computer_item == 's') or (user_item == 'p' and computer_item == 'r') or (user_item == 's' and computer_item == 'p'):
            print(f'You chose {user_item}. Computer chose {computer_item}. You won!')
            return 'win'
        elif (user_item == 'r' and computer_item == 'r') or (user_item == 'p' and computer_item == 'p') or (user_item == 's' and computer_item == 's'):
            print(f'You chose {user_item}. Computer chose the same. Its tie!')
            return 'drew'
        else:
            print(f'You chose {user_item}. Computer chose {computer_item}. You lose!')
            return 'loss'
    
    def play(self):
        print('Lets play the game!')
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        self.results[result] +=1
        return result