// 🌟 Exercise 1 
// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// Here the a == 3. Since a declared in bigger scope then if, we can reach it and define a new value.

// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared with const instead of let ?

// We will geet the error since we can't redefine const variable

//#2
// let a = 0;

// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree() // 0
// funcTwo() //
// funcThree() // 5
// #2.2 What will happen if the variable is declared
// with const instead of let ?

// funcThree() // 0
// funcTwo() // error
// funcThree() // 0


//#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour() // nothing, since we declare that a is a global variable, but not concole log anything
// funcFive() // hello

//#4
// let a = 1;
// function funcSix() {
//     const a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:
// funcSix() //we will get a as a test because alert will use local variabla a instead of global because of scope.

// #4.2 What will happen if the variable is declared 
// with const instead of let ? //nothing will change since it is two different variables. 


//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }

// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console 

// alert1 == 5 - it calls local scope
// alert2 == 2 - it calls global scope and doesn't see local variable from if scope

// #5.2 What will happen if the variable is declared 
// with const instead of let ? // nothing will change

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.

// const winBattle = () => false

// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

// const experiencePoints = winBattle() ? 10 : 1;

// console.log(experiencePoints)


// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false

// const isString = (value) => {
//     if(typeof value === 'string'){
//         return true
//     } else {
//         return false
//     }
// }

// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false


// 🌟 Exercise 4 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// const sum = (x, y) => x + y

// 🌟 Exercise 5 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.

// function kgTog(kg){
//     return kg*1000
// }

// console.log(kgTog(2))

// Then, use function expression and invoke it.

// const kgTog = function (kg) {console.log(kg*1000)}(2)

// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// const kgTog = kg => kg*1000

// console.log(kgTog(2))

// 🌟 Exercise 6 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// const sentence = function (numberOfChildren, partnerName, location, job){
//     let body = document.querySelector('body')
//     let p = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`
//     body.append(p)
// }(8,'Sergey','Tel-Aviv', 'Full Stack Developer')

// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

const welcome = function(name){
    let nav = document.querySelector('nav')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')

    p.append(document.createTextNode(`Welcome, ${name}!`))
    div.append(img)
    div.append(p)
    nav.append(div)
}('John')

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// let body = document.querySelector('body')

// let makeJuice = function (size){
//     function addIngredients(one, two, three){
//         let p = `The client wants a ${size} juice, containing ${one}, ${two} and ${three}`
//         body.append(p)
//     }
//     addIngredients('banana', 'apple', 'grapes')
// } ('small')


// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

let body = document.querySelector('body')

let makeJuice = function (size){
    const ingredients = []

    function addIngredients(one, two, three){
        ingredients.push(one);
        ingredients.push(two);
        ingredients.push(three);
    }

    function displayJuice(){
        if (ingredients.length > 3) {
            let p = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}.`
            body.append(p)
        } else {
            let p = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]} and ${ingredients[2]}.`
            body.append(p)
        }
    }
    addIngredients('banana', 'apple', 'grapes')
    addIngredients('carrot', 'pineapple', 'fig')
    displayJuice()
}
// console.log(makeJuice('small'))


