// 🌟 Exercise 1

// Using a DOM property, retrieve the h1 and console.log it.

// const h1 = document.querySelector('h1')
// console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.

// const article = document.querySelector('article')
// article.lastElementChild.remove()

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// let h2 = document.querySelector('h2')

// h2.addEventListener('click', function(){
//     h2.style.backgroundColor = 'red'
// } )

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// let h3 = document.querySelector('h3')

// h3.addEventListener('click', function(){
//     h3.style.display = 'none'
// } )

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// btn.addEventListener('click', function(){
//     makeBigger()
// })

// function makeBigger(){
//     let p = btn.previousElementSibling
//     p.style.fontSize = 'larger'
// }

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// let a = Math.floor(Math.random() * 100)

// h1.addEventListener('mouseover', function(){
//     h1.style.fontSize = `${a}px`;
// })

// h1.addEventListener('mouseout', function(e){
//     h1.style.fontSize = ''
// })

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// h2.addEventListener('mouseover', function(){
//     fadeOut();
// })

// h2.style.opacity = '50'

// function fadeOut() {
//     setInterval(function () {
//         if (h2.style.opacity > 0) {
//             h2.style.opacity -= 0.1;
//         }
//     }, 10);
//   }

// 🌟 Exercise 2

// Retrieve the form and console.log it.

// let form = document.querySelector('form')
// console.log(form.innerHTML)

// Retrieve the inputs by their id and console.log them.

// let input1 = document.getElementById('fname')
// let input2 = document.getElementById('lname')

// console.log(input1, input2)


// Retrieve the inputs by their name attribute and console.log them.

// console.log(input1.name, input2.name)

// When the user submits the form (ie. submit event listener)

// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

// let button = document.getElementById('submit')
// let ul = document.querySelector('.usersAnswer')

// button.addEventListener('click', function(e){
//     e.preventDefault()
//     createLi();
// })

// function createLi(){
//     console.log(input1.value)
//     console.log(input2.value)
//     if (input1.value.length > 0 && input2.value.length > 0){
//         let li = document.createElement('li')
//         let text = document.createTextNode(`${input1.value} ${input2.value}`)
//         li.append(text)
//         ul.append(li)
//         input1.value = ''
//         input2.value = ''
//     }
// }

// 🌟 Exercise 3

// Declare a global variable named allBoldItems.
// let allBoldItems = []
// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// let strong = document.querySelectorAll('strong')

// function getBoldItems(){
//     for (let word of strong){
//         boldWord = word.innerHTML
//         allBoldItems.push(boldWord)
//     }
// }

// Create a function called highlight() that changes the color of all the bold text to blue.

// function highlight(){
//     for (let word of strong){
//         word.style.color = 'blue'
//     }
// }

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// function returnItemsToDefault(){
//     for (let word of strong){
//         word.style.color = ''
//     }
// }


// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout 

// let string = document.getElementById('string')

// string.addEventListener('mouseover', function(){
//     highlight()
// })
// string.addEventListener('mouseout', function(){returnItemsToDefault()
// })

// 🌟 Exercice 4

// Write a JavaScript program to calculate the volume of a sphere.

function volumeSphere(){
  let radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  let volume = (4/3)* Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 }

let button = document.getElementById('submit') 
button.addEventListener('click', function(e){
     e.preventDefault()
     volumeSphere();
 })
