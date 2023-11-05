
import { users } from './data.js';

function AvAge(){
    let sum = 0
    users.forEach(person => {
        sum += person.age
    })

    let avAge = sum/users.length
    console.log(avAge)
}

AvAge()

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.

// 🌟 Exercise 3: File Management Using CommonJS Syntax
// Instructions
// Create a file named fileManager.js.

// Create another file named app.js.

// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.

const {readFunc,  writeFunc} = require('./fileManager.js')

readFunc()
writeFunc()