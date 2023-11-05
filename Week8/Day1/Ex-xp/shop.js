const products = require('./products.js')

// Create a function that takes a product name as a parameter and searches for the corresponding product object.

const prodInfo = (product) => {
    products.forEach(item => {
        if (item.name === product) {
            console.log(`Price is ${item.price}, category is ${item.category}`)
        }
    })
}

// Call this function with different product names and print the details of the products.

prodInfo('peach')

// Run shop.js and verify that the correct product details are displayed.