# Instructions :
# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

# The Pagination class will accept 2 parameters:
# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)

class Pagination:
    def __init__(self, items = None, page_size = 10):
        self.items = items
        self.page_size = int(page_size)
        self.general_list = []
        self.cur_num = 0


    def getVisibleItems(self, page_number):
        page = []
        for i in self.items:
            if len(page) < self.page_size:
                page.append(i)
            else:
                self.general_list.append(page)
                page = []
                page.append(i)
        self.general_list.append(page)
        print(self.general_list[page_number])
        self.cur_num = page_number

    def firstPage(self):
        print(self.getVisibleItems(0))

    def lastPage(self):
        print(self.getVisibleItems(-1))

    def goToPage(self, pageNum):
        if int(pageNum) == 1:
            self.firstPage(self)
        elif int(pageNum) == len(self.general_list)-1:
            self.lastPage(self)
        elif int(pageNum) > len(self.general_list):
            self.lastPage(self)
        elif int(pageNum) == 0:
            print('Give me the number from 1')
        else:
            print(self.getVisibleItems(int(pageNum)-1))
    

    def prevPage(self):
        print(self.getVisibleItems(self.cur_num - 1))

    def nextPage(self):
        print(self.getVisibleItems(self.cur_num + 1))


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.getVisibleItems()

# The Pagination class will have a few methods:

# getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# You will have to implement various methods to go through the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)





# Here’s a continuation of the example above using nextPage and lastPage:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]

# p.nextPage()

# p.getVisibleItems()
# # ["e", "f", "g", "h"]

# p.lastPage()

# p.getVisibleItems()
# # ["y", "z"]


# Notes

# The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
# The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
# Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
# If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).
