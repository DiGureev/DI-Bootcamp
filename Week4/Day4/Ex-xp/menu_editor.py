from functools import partial
from menu_item import MenuItem
from menu_manager import MenuManager

def view_item(menu_manager: MenuManager):
    item_name = input("Item name: ")
    item = menu_manager.get_by_name(item_name)
    if item is None:
        print(f"No such item in the menu: {item_name}")
    else:
        print(item[1], item[2])

def initiate_item():
    item_name = input("Item name: ")
    item_price = int(input("Item price: "))
    new_item = MenuItem(item_name, item_price)
    return new_item

def add_item():

    item = initiate_item()
    item.save()
    print(f"{item.item_name}, {item.item_price} WAS ADDED TO THE DATABASE")

def delete_item():

    item = initiate_item()
    item.delete()
    print(f"{item.item_name}, {item.item_price} WAS DELETED FROM THE DATABASE")

def update_item():

    item = initiate_item()
    new_item_name = input("New name (or skip): ")
    new_item_price = input("New price (or skip): ")
    item.update(new_name=new_item_name, new_price=new_item_price)

def pretty_print_menu(menu_list):

    print("\nWelcome to Vice's Wondrous World of Culinary Delights")
    print("=" * 50)
    print("{:<10} {:<25} {:<15}".format("Item No.", "Dish", "Price"))
    print("-" * 50)
    
    for item in menu_list:
        item_no, dish, price = item
        print("{:<10} {:<25} ${:<15.2f}".format(item_no, dish, price))
    
    print("=" * 50)

def show_menu(menu_manager: MenuManager):

    menu_items = menu_manager.all()
    pretty_print_menu(menu_items)

def show_user_menu():

    OPERATION_OPTIONS = {
        "V": partial(view_item, menu),
        "A": add_item,
        "D": delete_item,
        "U": update_item,
        "S": partial(show_menu, menu)
    }

    USER_OPTIONS = """
        View an Item (V)
        Add an Item (A)
        Delete an Item (D)
        Update an Item (U)
        Show the Menu (S)
    """

    menu = MenuManager()
    try:
        while True:

            print(USER_OPTIONS)

            user_choice = input("CHOICE: ")
            operation_choice = OPERATION_OPTIONS.get(user_choice)

            if operation_choice is None:
                show_user_menu()
            
            operation_choice()

    except KeyboardInterrupt:
        OPERATION_OPTIONS["S"]()


if __name__ == '__main__':
    show_user_menu()