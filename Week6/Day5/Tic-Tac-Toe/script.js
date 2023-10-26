const body = document.querySelector('body')
let table = document.createElement('table')
body.appendChild(table)

let o = 'O'
let x = 'X'

let buttonO = document.getElementById("O-side")
let buttonX = document.getElementById("X-side")

createTable()

const tdArr = document.querySelectorAll('td')
const tdArray = Array.from(tdArr)

for (i of tdArray){
    console.log(i.text)
}
console.log(tdArray)

// buttonO.addEventListener('click', function(){
//     playGame(o,x)})
// buttonX.addEventListener('click', function(){
//     playGame(x,o)})

// function createTable(){
//     let id = 1
//     for (i = 0; i < 3; i++){
//         let tr = document.createElement('tr')
//         tr.id = id
//         for (a = 0; a < 3; a++){
//             let td = document.createElement('td')
//             tr.appendChild(td)
//         }
//         id +=1
//         table.appendChild(tr) 
//     }
// }


// function checkCell(id){
//     if (tdArray[id-1].textContent == ''){
//         return true
//     } return false
// }

// function fillCell(side, cellId){
//     tdArray[cellId-1].append(document.createTextNode(side))
// }

// function checkEmpty(){
//     tdArray.forEach(item => item.textContent == '' ? true: false)
// }

// function randomFill(side){
//     let cellIndex = Math.floor(Math.random() * 9)
//     if (checkEmpty() == true){
//         while (tdArray[cellIndex].textContent != ''){
//             cellIndex = Math.floor(Math.random() * 9)
//         }

//         fillCell(side, cellIndex+1)
//         return true}
//     else {
//         alert('Draw! Play again')
//         return false
//     }
// }



// function checkWinner(side){
//     const winCombos = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [6, 4, 2]
//     ]

//     let checkArr = tdArray.map((i,index)=> index)
//     let filterArr = checkArr.filter((item => tdArray[item].textContent == side))

//     winCombos.forEach(list => {
//         if (filterArr.toString() == list.toString()) {
//             alert(`${side} win!`)
//             return true
//         } return false
//     })
// }

// function playGame(side1, side2){
//     let round = 1
//     do{
//         if (checkEmpty() == true){
//             tdArray.forEach((td, index) => {
//             td.addEventListener('click',fillCell(side1, index))
//         })
//         } 
//         checkWinner(side1)
//         randomFill(side2)
//         round +=1
//     } while (round < tdArray.length)

// }




