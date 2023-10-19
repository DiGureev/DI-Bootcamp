// Ex 1

const people = ["Greg", "Mary", "Devon", "James"];

// part I

// Write code to remove “Greg” from the people array.

// people.shift()

// Write code to replace “James” to “Jason”.

// people.splice(-1, 1, "Jason")

// Write code to add your name to the end of the people array.

// people.push("Diana")

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// console.log(people.indexOf('Mary'))

// Write code to make a copy of the people array using the slice method.

// arr = people.slice(1,-1)

// console.log(arr)

// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// console.log(people.indexOf("Foo"))

// Create a variable called last which value is the last element of the array.

// last = people[people.length-1]

// console.log(last)

// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// for (let name of people) {
//     console.log(name)
// }

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.

// for (let name of people) {
//     console.log(name)
//     if (name === 'Devon'){
//         break
//     }
// }


// Ex 2

// Instructions
// Create an array called colors where the value is a list of your five favorite colors.

let colors = ['green', 'blue', 'red', 'orange', 'white']

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

// for (let color of colors){
//     console.log(`My #${colors.indexOf(color)+1} choice is ${color}`)
// }

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

// let suffixes = ['st', 'nd', 'rd', 'th']

// for (let color of colors){
//     if (colors.indexOf(color) < 3){
//     console.log(`My ${colors.indexOf(color)+1}${suffixes[colors.indexOf(color)]} choice is ${color}`)
//     } else {
//         console.log(`My ${colors.indexOf(color)+1}${suffixes[suffixes.length-1]} choice is ${color}`)
//     }
// }

// Ex 3

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.

// let number = prompt("Please enter your number")
// number = parseInt(number)
// console.log(typeof number)

// let number = prompt("Please enter your number")
// do {
//     number = prompt("Please enter another number")
//     number = parseInt(number)
// } while (number < 10)


// Tip : Which while loop is more relevant for this situation?

// Ex 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.

// console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.

// console.log(building.numberOfAptByFloor['firstFloor'], building.numberOfAptByFloor['thirdFloor'])

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// console.log(building.nameOfTenants[1],building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0] )

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

// if (building.numberOfRoomsAndRent['sarah'][1] + building.numberOfRoomsAndRent['david'][1] > building.numberOfRoomsAndRent['dan'][1]) {
//     building.numberOfRoomsAndRent['dan'][1] += 1200
// }

// console.log(building.numberOfRoomsAndRent['dan'][1])

// Ex 5

// Instructions
// Create an object called family with a few key value pairs.

let family = {
    lastname: 'Potter',
    mother_name: 'Lily'
}

// Using a for in loop, console.log the keys of the object.

// for (let key in family){
//     console.log(key)
// }

// Using a for in loop, console.log the values of the object.

// for (let key in family){
//     console.log(family[key])
// }

// Ex 6

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// for (let key in details) {
//     console.log(`${key} ${details[key]}`)
// }

// Ex 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

// let secretName = ''

// for (let letter of names) {
//     secretName += letter[0]
// }

// secretName = secretName.split('')
// secretName = secretName.sort()
// secretName = secretName.join('')
// console.log(secretName)