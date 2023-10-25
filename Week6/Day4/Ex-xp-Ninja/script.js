// Exercise 1 : Dog Age To Human Years
// Instructions
// Using the following data

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

// Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years
// Using the reduce() method, find the sum of the dogs’ ages in human years.

// let dogAge = data.reduce((acc, val) => {
//     return acc + val.age*7
// }, 0)

// console.log(dogAge)


// Exercise 2 : Email
// Instructions
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).
// const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

// const newEmail = userEmail3.trim()
// console.log(newEmail)


// Exercise 3 : Employees #3
// Instructions
// Using this array

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
// Example: { 'Bradley Bouley': 'Full Stack Resident' }
// Hint: Step one, create an empty object.


// users.map((val, index) => {
//     let fullname = val.firstName + ' ' + val.lastName
//     let newObj = {
//         [fullname] : val.role
//     }
//     users[index] = newObj
// })

// console.log(users)

// Exercise 4 : Array To Object
// Instructions
// Using this array 
// const letters = ['x', 'y', 'z', 'z'];

// Use a for loop to get this output { x: 1, y: 1, z: 2 };

// let newObj = {
// }

// for (let i in letters){
//     newObj[letters[i]] = letters.filter(letter => letter === letters[i]).length
// }

// console.log(newObj)


// Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
// const letters = ['x', 'y', 'z', 'z'];
// let newObj = {
// }

// letters.reduce((acc, val) => {
//     console.log(acc)
//     console.log(val)
//     newObj[val] = letters.filter(letter => letter === letters[acc]).length
//     val = 1
//     return acc + val
// }, 0)

// console.log(newObj)


// Exercises XP Ninja 2

// Exercise 1 : Menu
// Instructions
// Using the array below:

const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]

// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.

// let dessert = menu.some((val) => val.type === "dessert")
// console.log(dessert)

// Using an array method, check if all the elements in the array are starters.

// let starter = menu.every((val) => val.type === "starter")
// console.log(starter)

// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.

// let main = (arr) => {
//     let newObj = {
//     }
//     if (arr.some((val) => val.type === "main") === false){
//         newObj.type = 'main course'
//         newObj.name = 'Steak'
//     } 
//     menu.push(newObj)
// }

// main(menu)
// console.log(menu)


// Using this array :

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.


// for (let word of vegetarian){
//     console.log(word)
//     let item = menu[0].name.toLowerCase()
//     console.log(item)
//     console.log(item.includes(word))
// }


// menu.map((item) => {
//     let name = item.name.toLowerCase()
//     for (let word of vegetarian){
//         if (name.includes(word)){
//             item.vegetarian = true
//         }
//     }
// })

// console.log(menu)

// Exercise 2 : Chop Into Chunks
// Instructions
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.

// function string_chop(str, num) {
//     let checkString = str
//     let newStr = []
//     for (let i= 0; i < str.length/num; i++) {
//         newStr.push(checkString.substr(0, num))
//         checkString = checkString.replace(checkString.substr(0, num), '')
//     }
//     return newStr
// }

// console.log(string_chop('developers',2));



// Example:

// console.log(string_chop('developers',2)); 
// ["de", "ve", "lo", "pe", "rs"] 




// Exercise 3 : You Said String ?
// Instructions
// Write a JavaScript function to find a word within a string.
// console.log(search_word('The quick brown fox', 'fox')); 
// "'fox' was found 1 times." 

// function search_word(str, word){
//     let checkList = str.replace(',', '').split(' ')
//     let arr = checkList.filter(item => item === word)
//     if (arr.length > 1 || arr.length === 0){
//         console.log(`${word} was found ${arr.length} times.`)
//     } else {
//         console.log(`${word} was found ${arr.length} time.`)
//     }

// }

// search_word('The quick brown fox', 'fox');

// Exercise 4 : Reverse Array
// Instructions
// Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

let a = [1,2,3,4,5,6,7,8,9,10]


function reverseArray(arr){
    return [...arr.reverse()]
    
}
console.log(reverseArray(a))

// Examples:

//    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
//    reverseArray([1,2]) // [2,1]
//    reverseArray([]) // []
//    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]