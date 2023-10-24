let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

console.log()

// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

const displayGroceries = () => {groceries.fruits.forEach(element => {console.log(element)});}

// displayGroceries()

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)

const cloneGroceries = () => {
    user = client
    client = 'Betty'
    shopping = groceries
    groceries.totalPrice = '35$'
    groceries.other.paid = false
    console.log(groceries.other)
    console.log(shopping.other)
}

cloneGroceries()


// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ? / No, because it copied just a value of the client and not an actuall variable

// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ? / Yes, because we copied actuall variable, when its value changes, ours also changes

// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ? / Yes same reason

// Invoke the cloneGroceries function.