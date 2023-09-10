
# Exercise 1 : Call History
# Instructions
# Create a class called Phone. This class takes a parameter called phone_number. 
#When instantiating an object create an attribute called call_history which value is an empty list.

# class Phone:
#     call_history = []
#     messages = []

#     def __init__(self, phone_number):
#         self.phone_number = phone_number

# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. 
#The method should print a string stating who called who, and add this string to the phone’s call_history.

    # def call(self, other_phone):
    #    self.call_history
    #    if isinstance(other_phone, Phone):
    #        a = f'{other_phone.phone_number} is calling to {self.phone_number}'
    #        self.call_history.append(a)

# Add a method called show_call_history. This method should print the call_history.

    # def show_call_history(self):
    #     print(self.call_history)

# Add another attribute called messages to your __init__() method which value is an empty list.

# Create a method called send_message which is similar to the call method. Each message should be saved as 
#a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content

    # def send_message(self, other_phone, message):
    #     message_dict = {}
    #     if isinstance(other_phone, Phone):
    #        message_dict['to'] = self.phone_number
    #        message_dict['from'] = other_phone.phone_number
    #        message_dict['content'] = message
    #        self.messages.append(message_dict)

# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

#     def show_outgoing_messages(self):
#         for i in self.messages:
#             if i['to'] != self.phone_number:
#                 print(i)
    
#     def show_incoming_messages(self):
#         for i in self.messages:
#             if i['to'] == self.phone_number:
#                 print(i)

#     def show_messages_from(self, number):
#         for i in self.messages:
#             if i['from'] == number:
#                 print(i)

# me = Phone('0567778899')
# other = Phone('0587776655')

# me.call(other)
# me.show_call_history()
# me.send_message(other, 'message')
# other.send_message(me,'message 111')
# me.show_incoming_messages()
# me.show_outgoing_messages()