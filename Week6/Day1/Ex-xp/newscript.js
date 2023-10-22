// Instructions
// Create a new structured HTML file and a new Javascript file

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it

// console.log(document.getElementById('container'))

// Change the name “Pete” to “Richard”.

let docLi = document.querySelectorAll('.list li')
docLi[1].textContent = 'Richard'

// Delete the second <li> of the second <ul>.

docLi = document.querySelectorAll('.list')

lastLi = docLi[1].querySelectorAll('li')
lastLi[1].remove()

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

for (let item of docLi){
    item.firstChild.textContent = 'Diana'
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

for (let item of docLi){
    item.classList.add("student_list")
}

docLi[0].classList.add("university", "attendance")


// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.

let div = document.querySelector('#container')

div.setAttribute('style', 'background-color: lightblue; padding: 20px;')

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)

let liDan = docLi[1].querySelectorAll('li')

liDan[1].setAttribute('style', 'display: none;')

// Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)

let liRichard = docLi[0].querySelectorAll('li')
liRichard[1].setAttribute('style', 'border: 1px solid black;')

// Change the font size of the whole body.

document.body.setAttribute('style', 'font-size: 50px;')

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (div.style.backgroundColor === 'lightblue') {
    alert('Hello x and y')
} else {
    alert('Smth wrong')
}


