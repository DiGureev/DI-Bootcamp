# rock-paper-scissors.py : create 3 functions
# get_user_menu_choice() - this should display a simple menu, get the user’s choice (with data validation), and return the choice. No looping should occur here.
# The possibles choices are : Play a new game or Show scores or Quit

# print_results(results) – this should print the results of the games played. It should have a single parameter named results; which will be a dictionary of the results of the games played. It should display these results in a user-friendly way, and thank the user for playing.
# Note: results should be in this form: {win: 2,loss: 4,draw: 3}. Bear in mind that this dictionary will need to be created and populated in some other part of our code, and passed in to the print_results function at the right time.
# main() - the main function. It should take care of 3 things:
# Displaying the menu repeatedly, until the user types in the value to exit the program: ‘x’ or ‘q’, whatever you decide. (Make use of the get_user_menu_choice function)

# When the user chooses to play a game:
# Create a new Game object (see below), and call its play() function, receiving the result of the game that is returned.
# Remember the results of every game that is played.

# When the user chooses to exit the program, call the print_results function in order to display a summary of all the games played.

from game import Game

def get_user_menu_choice():
    user_input = input('What would you like to do?\n1 - Play a new game\n2 - Show scores\n3 - Quit\n')
    if user_input == '1' or user_input == '2' or user_input == '3':
        return user_input
    else:
        print('Chose right number')
        get_user_menu_choice()

def print_results(result):
    print(f'You result is: {result}.') 

def main():
    player = Game()
    while True:
        a = get_user_menu_choice()
        if a == '1':
            print(player.play())
        elif a == '2':
            print_results(player.results)
        elif a == '3':
            print_results(player.results)
            print('Thanks for playing!')
            break

main()