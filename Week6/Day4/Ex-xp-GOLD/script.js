// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

// let a = [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });

// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );


// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

// console.log(newArray)
// What is the value of i ?


// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array 
// const array = [[1],[2],[3],[[[4]]],[[[5]]]] 
// and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

// const newArray = array.map((e, i)=> i > 2 ? array[i][0][0] : e[0])

// console.log(newArray)

// Using a method, take this array 
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
// and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
// Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.

// function unitString(str){
//     let newArray = str.map((el) => el.join(' '))
//     return newArray.reduce((acc, el) => acc + ' ' + el)
// }
// console.log(unitString(greeting))

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]

// arr = [...trapped]
// for (let i = 0; i < 25 ; i++) {
//     arr = [...arr[0]]
// }

// console.log(arr)


// EX-xp GOLD 2

// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.

// array = [1,2,3,4,5,6,7,8,9,10,11]

// const sumFunc = (arr) => arr.reduce((acc,val) => acc+val)

// console.log(sumFunc(array))

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.

// array = [1,2,2,3,3,4,4,5, 5, 6, 7,7]

// const moveDuplicates = (arr) => arr.map((val, i) => {
//     let checkArr = arr.filter(e=>e === val)
//     checkArr.length > 1 && arr.splice(i, 1)
// })

// moveDuplicates(array)
// console.log(array)


// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

// const array = [NaN, 0, 15, false, -22, '', undefined, 47, null]

// let checkNum = array.filter(item => item) //delete all falsy number

// console.log(checkNum)

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

// let repeat = (str, n) => {
//     let myStr = str
//     for (i = 1; i<n; i++){
//         myStr = myStr.concat(str)
//     }
//     return myStr
// }

// console.log(repeat('Ha!',5));

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(9, ' ');
let rabbit = '🐇'.padStart(9, ' ');

// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

// turtle = turtle.trim().padEnd(9, '=')

    console.log(startLine);
    console.log(turtle);
    console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'


// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?

