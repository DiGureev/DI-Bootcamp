# Part 1 : Quizz :
# Answer the following questions

# What is a class? blueprint from which we create objects
# What is an instance? this is actually the object of a class
# What is encapsulation? thing which protect some methods of the class from changing or accessing from outer classes 
# What is abstraction? if a get it right, it is hiding the whole process from the user behind the scene.
# What is inheritance? ability to actually inherit properties and method from parent classes
# What is multiple inheritance? it is ability to inherit from several classes
# What is polymorphism? This is a thing that methods with the same name can be executed in many objects and classes
# What is method resolution order or MRO? it is order of inheritance according to which exact method will be searched in class hierarchy


# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card:
    suits = {
    'Suits': ['Hearts', 'Diamonds', 'Clubs', 'Spades'],
    'Cards' : ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
    }

class DeckOfCards:

    def __init__(self, deck):
        if isinstance(deck, Card) == False:
            raise Exception('Deck should be an integer')
        else:
            self.deck = deck

    def shuffle(self):
        shuffle_deck = []
        if isinstance(self.deck, Card) == False:
            raise Exception('Deck should be a Card class')
        else:
            for key in self.deck.suits['Suits']:
                random.shuffle(self.deck.suits['Cards'])
                for value in self.deck.suits['Cards']:
                    shuffle_deck.append(f'{key}:{value}')
            random.shuffle(shuffle_deck)
            return shuffle_deck
        
    def deal(self):
        my_list = self.shuffle()
        a = random.choice(my_list)
        print(a)
        my_list.remove(a)

a = Card()
b = DeckOfCards(a)

b.shuffle()
b.deal()


