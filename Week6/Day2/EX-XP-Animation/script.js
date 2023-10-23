// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

// setTimeout(function(){
//     alert('Hello World')
// }, 2000)

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// setTimeout(function(){
//     let div = document.getElementById('container')
//     let p = document.createElement('p')
//     p.append(document.createTextNode('Hello World'))
//     div.append(p)
// }, 2000)

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// setInterval(function(){
//     let div = document.getElementById('container')
//     let p = document.createElement('p')
//     p.append(document.createTextNode('Hello World'))
//     div.append(p)
// }, 2000)

// The interval will be cleared (ie. clearInterval), when the user will click on the button.

// let id= setInterval(appendP, 2000);

// function appendP() {
//     let div = document.getElementById('container')
//     let p = document.createElement('p')
//     p.append(document.createTextNode('Hello World'))
//     div.append(p)
// }

// The interval will be cleared (ie. clearInterval), when the user will click on the button.

// let button = document.getElementById('clear')
// button.addEventListener('click', function(){clearInterval(id)})

// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// let id= setInterval(appendP, 2000);

// function appendP() {
//         let pList = document.querySelectorAll('p')
        
//         if (pList.length > 4) {
//             clearInterval(id)
//         } else {
//             let div = document.getElementById('container')
//             let p = document.createElement('p')
//             p.append(document.createTextNode('Hello World'))
//             div.append(p)
//         }
// }

// 🌟 Exercise 2

// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">

let child = document.getElementById("animate");
let position = 0;

function myMove(){
    let id = setInterval(function () {
    if (position == 350) {
        position = 0;
        clearInterval(id)
    } else {
        position += 1;
        child.style.left = position + "px";
    }
    }, 10);
}


// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions