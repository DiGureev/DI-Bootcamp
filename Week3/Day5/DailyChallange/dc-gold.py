# Using the requests and time modules, create a function which returns the amount of time it takes a 
#webpage to load (how long it takes for a complete response to a request).
# Test your code with multiple sites such as google, ynet, imdb, etc.

#Answer

from time import time
import requests

def meas(url):
    t1 = time()
    response = requests.get(url)
    t2 = time()
    result = t2-t1
    print(f'Took {result}')
    return result

meas('https://www.ynet.co.il/')

