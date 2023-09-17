# Exercise

# Create a colorize(text, color) function that contain 
#this tuple colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
# If the color is not present in the tuple, raise a 
#ValueError exception
# If the text is not a string raise a TypeError Exception
# make sure to catch the exception

def colorize(text, color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    try:
        if color not in colors:
            raise ValueError('No such color in a list')
        if not isinstance(text,str):
            raise TypeError('Wrong datatype')
    except ValueError as error:
        print(error)
        print('Problem with color')
    except TypeError as error:
        print(error)
        print('Problem with the text')
    else:
        print('Everithing is ok')

colorize(1, 'black')

