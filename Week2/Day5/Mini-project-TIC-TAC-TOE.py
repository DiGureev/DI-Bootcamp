board = [
    ' ',' ',' ',
    ' ',' ',' ',
    ' ',' ',' '
]

cur_player = 'X'
winner = None
game_running = True

#board-function

def print_board(board):
    print(
            f"****************\n"
            f"*  {board[0]} | {board[1]} |  {board[2]}  *\n"
            f"*----|---|-----*\n"
            f"*  {board[3]} | {board[4]} |  {board[5]}  *\n"
            f"*----|---|-----*\n"
            f"*  {board[6]} | {board[7]} |  {board[8]}  *\n"
            f"****************\n"
    )
#take player input

def player_input(board):
    inp = int(input("Enter a number from 1 to 9: "))
    if inp >= 1 and inp <=9 and board[inp-1] == ' ':
        board[inp-1] = cur_player
    else:
        print('Oops, player already in the spot')

#cheking winning combination

def check_horiz(board):
    global winner
    if board[0] == board[1] == board[2] and board[1] != ' ':
        winner = board[0]
        return True
    elif board[3] == board[4] == board[5] and board[4] != ' ':
        winner = board[3]
        return True
    elif board[6] == board[7] == board[8] and board[7] != ' ':
        winner = board[6]
        return True

def check_row(board):
    global winner
    if board[0] == board[3] == board[6] and board[3] != ' ':
        winner = board[0]
        return True
    elif board[1] == board[4] == board[7] and board[4] != ' ':
        winner = board[1]
        return True
    elif board[2] == board[5] == board[8] and board[5] != ' ':
        winner = board[2]
        return True

def check_diag(board):
    global winner
    if board[0] == board[4] == board[8] and board[4] != ' ':
        winner = board[0]
        return True
    elif board[2] == board[4] == board[6] and board[4] != ' ':
        winner = board[2]
        return True


def check_tie(board):
    global game_running
    if ' ' not in board:
        print_board(board)
        print("Its a tie!")
        game_running = False


def check_win():
    global game_running
    if check_diag(board) or check_horiz(board) or check_row(board):
        print(f"The winner is {winner}")
        game_running = False

#switch the player

def switch_player():
    global cur_player
    if cur_player == "X":
        cur_player = "O"
    else:
        cur_player = "X"

#Run game

while game_running:
    print_board(board)
    player_input(board)
    check_win()
    check_tie(board)
    switch_player()





