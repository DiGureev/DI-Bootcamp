// Exercise 1 : Select A Kind Of Music

// let select = document.getElementById("genres")

//Display the value of the selected option.

// select.addEventListener("change", ()=>{
//     console.log(select.value)

// })

//Add an additional option to the select tag:

// let newOpt = document.createElement("option")
// newOpt.value = "classic"
// newOpt.innerHTML = "Classic"
// select.append(newOpt)

//The newly added option should be selected by default.

// newOpt.setAttribute('selected', 'selected')

// Exercise 2: Delete Colors

// Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

// let btn = document.querySelector('input')
// let select = document.getElementById("colorSelect")
// let options = Array.from(document.querySelectorAll('option'))

// btn.addEventListener('click', ()=>{
//     console.log(select.value)
//     removecolor(select.value)
// })


// function removecolor(value){
//     let curOpt = options.findIndex(item => item.value == value)
//     console.log(curOpt)
//     options[curOpt].style.display = 'none'
//     options[curOpt+1].setAttribute('selected', 'selected')
// }

//Exercise 3 : Create A Shopping List

// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = []

let root = document.getElementById('root')

let form = document.createElement('form')
let input = document.createElement('input')
input.setAttribute('type', 'text')
let addItemBtn = document.createElement('button')
addItemBtn.textContent = 'Add Item'
let cleanAll = document.createElement('button')
cleanAll.textContent = 'Clean All'
root.append(input,addItemBtn,cleanAll)
root.append(form)

addItemBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    addItem()
})

cleanAll.addEventListener('click', (e)=>{
    e.preventDefault()
    clearAll()
})

function addItem(){
    console.log(input.value)
    if (input.value != '') {
        shoppingList.push(input.value)
        let div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML = input.value
        root.append(div)
        input.value = ''
    }
}

function clearAll() {
    console.log(shoppingList)
    let itemList = Array.from(document.getElementsByClassName('item'))
    itemList.forEach(element => {
        element.remove()
        shoppingList = []
    });
    console.log(shoppingList)
}