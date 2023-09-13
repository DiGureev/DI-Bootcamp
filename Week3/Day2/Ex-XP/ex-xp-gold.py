# Exercise 1: Bank Account
# Instructions
# Part I:

# Create a class called BankAccount that contains the following attributes and methods:
# balance - (an attribute)
# __init__ : initialize the attribute
# deposit : - (a method) accepts a positive int and adds to the balance, raise an Exception if the int is not positive.
# withdraw : - (a method) accepts a positive int and deducts from the balance, raise an Exception if not positive


# class BankAccount:

#     def __init__(self, balance = 0):
#         self.balance = balance
    
#     def deposit(self, balance):
#         try:
#             if balance > 0:
#                 self.balance += balance
#                 print(self.balance)
#             else:
#                 raise ValueError
#         except ValueError:
#             print('Balance have to be a positive number')
 
#     def withdraw(self, sum):
#         try:
#             if sum > 0:
#                 self.balance -= sum
#                 print(self.balance)
#             else:
#                 raise ValueError
#         except ValueError:
#             print('Sum have to be a positive number')

# Part II : Minimum balance account

# Create a MinimumBalanceAccount that inherits from BankAccount.
# Extend the __init__ method and accept a parameter called minimum_balance with a default value of 0.
# Override the withdraw method so it only allows the user to withdraw money if the balance remains higher than the minimum_balance, raise an Exception if not.

# class MinimumBalanceAccount(BankAccount):

#     def __init__(self, balance, minimum_balance = 1000):
#         super().__init__(balance)
#         self.min = minimum_balance

#     def withdraw(self, sum):
#         if self.balance - sum >= self.min and sum > 0:
#             self.balance -= sum
#             print(self.balance)
#         elif sum <= 0:
#             raise TypeError('Sum have to be a positive number')
#         else:
#             raise ValueError('We dont have this sum on the account')

# b = MinimumBalanceAccount(10000)
# b.withdraw(5000)

# Part III: Expand the bank account class

# Add the following attributes to the BankAccount class:
# username
# password
# authenticated (False by default)

# Create a method called authenticate. This method should accept 2 strings : a username and a password. If the username and password match the attributes username and password the method should set the authenticated boolean to True.

# Edit withdraw and deposit to only work if authenticated is set to True, if someone tries an action without being authenticated raise an Exception

# class BankAccount:

#     def __init__(self, username, password, balance = 0, authenticated = False):
#         self.balance = balance
#         self.username = username
#         self.password = password
#         self.authenticated = authenticated
    
#     def authenticate(self, username, password):
#         if username == self.username and password == self.password:
#             self.authenticated = True 

#     def deposit(self, balance):
#         if self.authenticated == True:
#             try:
#                 if balance > 0:
#                     self.balance += balance
#                     print(self.balance)
#                 else:
#                     raise ValueError
#             except ValueError:
#                 print('Balance have to be a positive number')
#         else:
#             print('Authentication fail')
 
#     def withdraw(self, sum):
#         if self.authenticated == True:
#             try:
#                 if sum > 0:
#                     self.balance -= sum
#                     print(self.balance)
#                 else:
#                     raise ValueError
#             except ValueError:
#                 print('Sum have to be a positive number')
#         else:
#             print('Authentication fail')

# a = BankAccount('diana', 'gureev', 10000)

# a.authenticate('diana', 'gureev')
# a.withdraw(5000)

# Part IV: BONUS Create an ATM class

# __init__:
# Accepts the following parameters: account_list and try_limit.
# Validates that account_list contains a list of BankAccount or MinimumBalanceAccount instances.
# Hint: isinstance()
# Validates that try_limit is a positive number, if you get an invalid input raise an Exception, then move along and set try_limit to 2.
# Hint: Check out this tutorial
# Sets attribute current_tries = 0

# Call the method show_main_menu (see below)

# class ATM(BankAccount):
    
#     def __init__(self, username, password, account_list, try_limit):
#         super().__init__(username, password)
#         for inst in account_list:
#             if not isinstance(inst, BankAccount):
#                 raise ValueError('Account list expects only BankAccount or MinimumBalanceAccount class')
#         else:
#             self.account_list = account_list
        
#         try:
#             if try_limit > 0:
#                 self.try_limit = try_limit
#             else:
#                 raise Exception
#         except Exception:
#             print('Invalid input of try_limit')
#             self.try_limit = 2

#         self.current_tries = 0

#     def log_in(self, username = input('Username: '), password = input('Password: ')):
#         while self.current_tries != self.try_limit:
#             for i in self.account_list:
#                 super().authenticate(username, password)

#                 if self.authenticated == True:
#                     print('Authentication succsess')
#                     show_account_menu()
#                 else:
#                     self.current_tries +=1
#         print('You reached max tries')
                

#     def show_main_menu(user_input = input('Choose what you want: deposit, withdraw or exit: ')):
#         if user_input == 'deposit':
#             a = int(input('Choose amount'))
#             super().deposit(a)
#         elif user_input == 'withdraw':
#             a = int(input('Choose amount'))
#             super().withdraw(a)
#         elif user_input == 'exit':
#             print('Bye')
#         else:
#             ('Something wrong, try again')
            

        
# Methods:
# show_main_menu:
# This method will start a while loop to display a menu letting a user select:
# Log in : Will ask for the users username and password and call the log_in method with the username and password (see below).
# Exit.

# log_in:
# Accepts a username and a password.
# Checks the username and the password against all accounts in account_list.
# If there is a match (ie. use the authenticate method), call the method show_account_menu.
# If there is no match with any existing accounts, increment the current tries by 1. Continue asking the user for a username and a password, until the limit is reached (ie. try_limit attribute). Once reached display a message saying they reached max tries and shutdown the program.

# show_account_menu:
# Accepts an instance of BankAccount or MinimumBalanceAccount.
# The method will start a loop giving the user the option to deposit, withdraw or exit.
