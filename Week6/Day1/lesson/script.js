// function drinkCoffee(){
//     console.log('The user')
// }

// drinkCoffee()

// function drinkCoffee(username, coffees) {
//     console.log(`The user ${username} drinks ${coffees} cups of coffee in the morning`)
// }

// drinkCoffee('Diana', 4)
// drinkCoffee('Lily', 3)

// function userInfo(username, userAge = 26) {
//     console.log(`smth`)
// }

// function myParentsAge(myAge){
//     const momAge = myAge*2
//     const dadAge = momAge*1.2
//     return `My mom's age: ${momAge} years old, My dad's age: ${dadAge} years old`
// }


// function myMomAge(myAge){
//     const momAge = myAge*2
//     return `My mom's age: ${momAge} years old`
// }

// const result = myMomAge(20)
// console.log(result)

//DOM


const header = document.querySelector('h1')

// console.log(header)

const li = document.querySelector('ul')

// console.log(li.innerHTML)

// const lists = document.querySelectorAll('ul')

// console.log(lists[1])

// const lists = document.getElementById('second')

// console.log(lists)


// Create DOM node

// const container = document.getElementById('first')
// const newHeader = document.createElement("h2")
// const newTextNode = document.createTextNode('Second h2')

// newHeader.append(newTextNode)
// newHeader.textContent = 'New header'
// container.append(newHeader)

// container.removeChild(newHeader)
// container.remove()

const container = document.getElementById('container') // document.querySelector('#container') //document.querySelector('div')

const lis = document.querySelectorAll('.list li')

// for (let li of lis) {
//     console.log(li.textContent)
// }

// const uls = document.getElementsByClassName('list')

// for (let li of uls){
//     console.log(li.firstElementChild.textContent)
// }


