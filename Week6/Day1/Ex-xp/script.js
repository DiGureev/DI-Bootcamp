// 🌟 Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 
// 368 391 414 437 460 483
// Sum : 5313

function displayNumbersDivisible(divisor) {
    let sum_all = 0
    for (let i = 0; i < 501; i++) {
        if (i % divisor == 0){
            console.log(i)
            sum_all += i
        }
    }
    console.log(sum_all)
}

// displayNumbersDivisible(47)

// Bonus: Add a parameter divisor to the function.

// displayNumbersDivisible(divisor)

// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3, 
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45, 
// and their sum


// 🌟 Exercise 2 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList = ['banana', 'orange', 'apple']

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

function myBill() {
    let total = 0
    for(let item of shoppingList) {
        if (item in prices && stock[item] > 0) {
            total += prices[item]
            stock[item] -= 1
            } else if (stock[item] <= 0) {
        console.log(`${item} not in stock right now`)
        } else {
            console.log(`${item} not in the price list`)
        }
    }
    console.log(total)
}

// myBill()


// Bonus: If the item is in stock, decrease the item’s stock by 1


// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

function changeEnough(itemPrice, amountOfChange) {
    const quarters = amountOfChange[0]*0.25
    const dimes = amountOfChange[1]*0.10
    const nickel = amountOfChange[2]*0.05
    const penny = amountOfChange[3]*0.01

    if (quarters+dimes+nickel+penny >= itemPrice){
        console.log(true)
    } else { 
        console.log(false)
    }
}

// changeEnough(0.75, [0,0,20,5])

// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)


// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true


// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(){
    let totalPrice = 0
    let answer = false 
    while (answer == false){
        let userAnswer = Number(prompt('How many nights you would like to stay in the hotel?'))
        if (Number.isInteger(userAnswer) == true && userAnswer != 0) {
            answer = true
            totalPrice = userAnswer*140
        }
    }
    return totalPrice

}

// hotelCost()

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost() {
    let totalPrice = 0
    let answer = false 
    while (answer == false) {
        let userAnswer = prompt('Where you are going?')
        if (typeof userAnswer === 'string' && userAnswer != '' && Number.isInteger(Number(userAnswer)) == false) {
            if (userAnswer === 'London') {
                answer = true
                totalPrice += 183
                return totalPrice
                // console.log(`Your plane ride cost is ${totalPrice}$`)
            } else if (userAnswer === 'Paris'){
                answer = true
                totalPrice += 220
                return totalPrice
                // console.log(`Your plane ride cost is ${totalPrice}$`)
            } else {
                answer = true
                totalPrice += 300
                return totalPrice
                // console.log(`Your plane ride cost is ${totalPrice}$`)
            }
        }
    }
}

// planeRideCost()

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {
    let totalPrice = 0
    let answer = false 
    while (answer == false) {
        let userAnswer = Number(prompt('For how long you need a car (days)?'))
        if (Number.isInteger(userAnswer) == true && userAnswer != 0) {
            answer = true
            if (userAnswer < 10) {
            totalPrice = userAnswer*40
            } else {
                totalPrice = userAnswer*40 - userAnswer*40*0.05
            }
        }
    }
    return totalPrice
}

// rentalCarCost()

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
    totalCost = hotelCost() + planeRideCost() + rentalCarCost()
    console.log(`Your vacation total cost: ${totalCost}$`)
}

// totalVacationCost()


// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


// 🌟 Exercise 5 : Users - in newscript file in this folder


// 🌟 Exercise 6 : Change The Navbar - in navbar file in this folder
// 


// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).


let book1 = {
    title: 'Harry Potter',
    author: 'JK Roling',
    image: 'https://musicart.xboxlive.com/7/5dbd5100-0000-0000-0000-000000000002/504/image.jpg',
    alreadyRead : true,
}

let book2 = {
    title: 'Pride and Prejudice',
    author: 'Jane Austin',
    image: 'https://i.ebayimg.com/images/g/BR0AAOSw7I9hMTin/s-l1600.jpg',
    alreadyRead : false,
}

allBooks = [book1, book2]

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).

let sec = document.querySelector('.listBooks')

for (let book of allBooks){
    let info = document.createElement('div')
    let descCont = document.createElement('p')
    let desc = document.createTextNode(`${book.title} written by ${book.author}`)
    let img = document.createElement('img')
    img.setAttribute('src', book.image)
    img.setAttribute('width', '100px')
    img.setAttribute('height', '150px')
    descCont.append(desc)
    info.append(img)
    info.append(descCont)

    if (book.alreadyRead == true){
        info.setAttribute('style', 'color: red')
    }
    
    sec.append(info)
}

// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.