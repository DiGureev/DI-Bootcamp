// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

// let randNum = Math.floor((Math.random() * 100) + 1);
// console.log(randNum)

// for ( let i = 0; i < randNum+1; i++){
//     if (i%2 == 0){
//         console.log(i)
//     }
// }

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']


// function capitalize(str){
//     newStr1 = ''
//     newStr2 = ''
//     for(let index in str){
//         if(index == 0 || index%2 == 0){
//             newStr1 += str[index].toUpperCase()
//             newStr2 += str[index]
//         } else {
//             newStr1 += str[index]
//             newStr2 += str[index].toUpperCase()
//         }
//     }

//     console.log(newStr1)
//     console.log(newStr2)
// }

// capitalize("abcdef")

// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
// palindrome


// function palind(word){
//     let checkWord = word.split('')
//     checkWord.reverse()
//     newWord = checkWord.join('')
//     return newWord == word
// }
// console.log(palind('lol'))

// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;


// const array =['a', 3, 4, 2]

// function biggestNumberInArray(arrayNumber){
//     let biggestNum = 0
//     arrayNumber.map(item => {
//         if (typeof item === 'number' && item > biggestNum){
//             biggestNum = item
//         }
//     })
//     return biggestNum
// }

// console.log(biggestNumberInArray(array))



// Example:

// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0


// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]


// array=[1,2,3,3,3,3,4,4,5]

// function onlyUnique(arr){
//     newArr = []
//     arr.map(item => {
//         if (newArr.includes(item) === false){
//             newArr.push(item)
//         }
//     })
//     return newArr
// }

// console.log(onlyUnique(array))

// Exercise 6 : Calendar
// Instructions
// Create a function called createCalendar(year, month)
// The function should create a calendar for the given year/month.
// The calendar should be a table, where a week is <tr>, and a day is <td>. The table top should be <th> with weekday names: the first day should be Monday, and so on until Sunday.
// For instance, createCalendar(2012, 9) should generate the following calendar:

function createCalendar(year, month){
    const body = document.querySelector('body')
    const table = document.createElement('table')
    body.append(table)

    const checkMonth = {
        '1': 31,
        '2': 0,
        '3': 31,
        '4':30,
        '5': 31,
        '6':30,
        '7':31,
        '8':31,
        '9':30,
        '10':31,
        '11': 30,
        '12': 31,
    }

    checkFabruary(year)

    const checkDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    

    function checkFabruary(year){
        if (year%4 == 0){
            checkMonth[2] = 29
        } else {
            checkMonth[2] = 28
        }
    }

    function checkWeeks(month){
        // index = 0
        // checkDay.forEach((item, i)=>{
        //     if (item == firstDay(year, month)){
        //         index = i
        //     }
        // })
        return Math.ceil(checkMonth[month]/7)
    }

    function firstDay(year,month){
        let dateStart = new Date(year,month);
        return dateStart.toString().slice(0,3)
    }


    function createTable(){
        let rowClass = 1
        let index = 0
        let th = document.createElement('th')
        for(i = 0; i < 7; i++){
            let td = document.createElement('td')
            td.append(document.createTextNode(checkDay[index]))
            index +=1
            th.append(td)
        }
        table.append(th)

        for (i = 0; i < checkWeeks(month); i++){
            let tr = document.createElement('tr')
            if (rowClass%2 == 0){
                tr.style.backgroundColor = 'lightgrey'
            }
            tr.classList.add(rowClass)
            rowClass +=1
            for(a = 0; a < 7; a++){
                let td = document.createElement('td')
                tr.append(td)
            }
            table.append(tr)
        }
    }


    function findStartCell(){
        let targetIndex = 0
        checkDay.forEach((item, index) => {
            if (item == firstDay(year, month)){
                targetIndex = index+7
            }
        })
        return targetIndex
    }


    function fillTable(){
        let day = 1
        for (i = findStartCell(); i < checkMonth[month]+findStartCell(); i++){
            tdList[i].append(document.createTextNode(day))
            day += 1
        }
        
    }

    
    createTable()
    let tdList = document.querySelectorAll('td')
    console.log(tdList.length)

    fillTable()
    
}


createCalendar(2023, 10)
