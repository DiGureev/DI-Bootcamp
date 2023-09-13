# Instructions
# These are the rules of the Game of Life (as stated in Wikipedia):

# The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively).

# Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

# Any live cell with fewer than two live neighbours dies, as if by underpopulation.
# Any live cell with two or three live neighbours lives on to the next generation.
# Any live cell with more than three live neighbours dies, as if by overpopulation.
# Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
# Using these rules, implement the Game. (Hint: use Classes !!!!)
# Use a few different initial states to see how the game ends.

# Notes:

# Display the grid after each generation
# The end of the game is fully determined by the initial state. So have it pass through your program and see how it ends.
# Be creative, but use classes
# The game can have fixed borders and can also have moving borders. First implement the fixed borders. Each “live” cell that is going out of the border, exits the game.
# Bonus: Make the game with ever expandable borders, make the maximum border size a very large number(10,000) so you won’t cause a memory overflow


import time
import pygame
import numpy as np

COLOR_BG = (10, 10, 10)
COLOR_GRID = (40,40,40)
COLOR_DIE_NEXT = (170,170,170)
COLOR_ALIVE_NEXT = (255,255,255)

def update(screen, cells, size, with_progress = False):
    updated_cells = np.zeros((cells.shape[0], cells.shape[1]))

    for row, col in np.ndindex(cells.shape):
        alive = np.sum(cells[row-1:row+2, col-1:col+2]) - cells[row, col]
        color = COLOR_BG if cells[row,col] == 0 else COLOR_ALIVE_NEXT

        if cells[row,col] == 1:
            if alive < 2 or alive > 3:
                if with_progress:
                    color = COLOR_DIE_NEXT
                elif 2 <= alive <= 3:
                    updated_cells[row,col] = 1
                    if with_progress:
                        color = COLOR_ALIVE_NEXT
        else:
            if alive == 3:
                updated_cells[row,col] = 1
                if with_progress:
                    color = COLOR_ALIVE_NEXT

        pygame.draw.rect(screen, color, (col*size, row*size, size - 1, size -1))

    return updated_cells


def main():
    pygame.init()
    screen = pygame.display.set_mode((800, 600))

    cells = np.zeros((60,80))
    screen.fill(COLOR_GRID)
    update(screen, cells, 10)

    pygame.display.flip()
    pygame.display.update()

    running = False

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    running = not running
                    update(screen, cells, 10)
                    pygame.display.update()
            if pygame.mouse.get_pressed()[0]:
                pos = pygame.mouse.get_pos()
                cells[pos[1] // 10, pos[0] // 10] = 1
                update(screen, cells, 10)
                pygame.display.update()
        
        screen.fill(COLOR_GRID)

        if running:
            cells = update(screen, cells, 10, with_progress=True)
            pygame.display.update()

        time.sleep(0.001)


if __name__ == '__main__':
    main()