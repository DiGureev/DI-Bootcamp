// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

// Exercise 1

function isBlank(str){
    checkString = str
    if (checkString.length > 0){
        return false
    } else {
        return true
    }
}

// console.log(isBlank(''))
// console.log(isBlank('abc'))

// Exercise 2

// Write a JavaScript function to convert a string into an abbreviated form.

function abbrevName(str){
    checkString = str.split(' ')
    abbName  = checkString[1][0]
    checkString[1] = abbName
    newName = checkString.join(' ')
    return newName
}

// console.log(abbrevName("Robin Singh"))

// Exercise 3 \

// Write a JavaScript function which takes a string as an argument and swaps the case of each character.

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

function switchCase(str){
    // checkString = str
    newString = ''
    for (letter of str){
        if (letter != ' '){
            if (letter.toUpperCase() === letter){
                letter = letter.toLowerCase()
                newString += letter
            } else {
                letter = letter.toUpperCase()
                newString += letter
            }
        } else {
            newString += letter
        }
    }
    console.log(newString)
}

// switchCase('The Quick Brown Fox')


// Exercise 4

// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.

function isOmnipresent(arrays, number){
    let numIn = true
    let numNotIn = false
    for (let array of arrays){
        if (array.includes(number)){
            numIn = true
        } else {
            numNotIn = true
        }
    }
    if (numNotIn == false){
        return true
    } else {
        return false
    }
}

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))


// Exercise 5

// Copy the code above and write some Javascript code to color all diagonal table cells in red.

let table = document.body.firstElementChild;
let cells = table.querySelectorAll('td')

for (let i = 0; i < cells.length; i +=2){
    cells[i].style.backgroundColor = 'red'
}
