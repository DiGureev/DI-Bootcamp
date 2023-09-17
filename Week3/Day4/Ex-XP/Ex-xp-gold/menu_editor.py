import pprint
import menu_manager

def load_manager():
    manager = menu_manager.MenuManager()
    return manager


def show_user_menu():
    choice = input('What do you want? Choose:\n1 - See menu\n2 - Add item\n3 - Remove item\n4 - Exit\n')
    if choice == '1':
        show_restaurant_menu()
    elif choice == '2':
        add_item_to_menu()
        show_user_menu()
    elif choice == '3':
        remove_item_from_menu()
        show_user_menu()
    elif choice == '4':
        manager.save_to_file()
        print('Changes saved')
    
def add_item_to_menu():
    name = input('Write the name of the item: ')
    price = input('Write the price of the item: ')
    manager.add_item(name, price)
    print('Item added')

def remove_item_from_menu():
    name = input('Write the name of the item: ')
    if manager.remove_item(name):
        print(f'Item {name} removed')
    else:
        print('Error, this item is not in the menu')
    
def show_restaurant_menu():
    pprint.pprint(manager.menu)
    show_user_menu()

manager = load_manager()
show_user_menu()