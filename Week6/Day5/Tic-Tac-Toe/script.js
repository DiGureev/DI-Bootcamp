const container = document.getElementById('container')
let form = document.getElementById('choice')
let table = document.createElement('table')
table.style.fontSize = '3em'
table.style.color = 'white'
container.appendChild(table)

let o = 'O'
let x = 'X'

let buttonO = document.getElementById("O-side")
let buttonX = document.getElementById("X-side")


buttonO.addEventListener('click', function(event){
    event.preventDefault()
    playGame(o,x)})
buttonX.addEventListener('click', function(event){
    event.preventDefault()
    playGame(x,o)})

function createTable(){
    let id = 0
    for (i = 0; i < 3; i++){
        let tr = document.createElement('tr')
        for (a = 0; a < 3; a++){
            let td = document.createElement('td')
            td.id = id
            td.append(document.createTextNode(''))
            id +=1
            tr.appendChild(td)
        }
        table.appendChild(tr) 
    }
}

createTable()

let tdList = Array.from(document.querySelectorAll('td'))

function playGame(side1, side2){
    form.style.visibility = 'hidden'
    let win = false
    addEvent(side1, side2)
}


function CheckEmptyTd(){
    const turn = (td) => td.innerHTML == ''
    return tdList.some(turn)
}

function addTurnSide2(side2){
    if (CheckEmptyTd() == true){
        let emptyArr = tdList.filter(td => td.innerHTML == '')
        let chosenTd = emptyArr[(Math.floor(Math.random() * emptyArr.length))]
        chosenTd.innerHTML = side2
    }

}

function checkWinner(side1, side2){
    let checkArray = tdList.filter(td => td.innerHTML != '')
    let idArr = checkArray.map(td => td.getAttribute('id'))

    let win = false

    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ]

    let winCombo = winCombos.filter(arr =>
        (idArr.toString().includes(arr[0].toString()) && idArr.toString().includes(arr[1].toString()) && idArr.toString().includes(arr[2].toString())))

    let winSide1 = winCombo.filter(item => (tdList[item[0]].innerHTML == side1 && tdList[item[1]].innerHTML == side1 && tdList[item[2]].innerHTML == side1))

    let winSide2 = winCombo.filter(item => (tdList[item[0]].innerHTML == side2 && tdList[item[1]].innerHTML == side2 && tdList[item[2]].innerHTML == side2))

    if (winSide1.length > 0){
        win = side1
        return win
    } else if (winSide2.length > 0) {
        win = side2
        return win
    } else {
        return win
    }

}



function addEvent(side1,side2){
    tdList.forEach(td => {
        td.addEventListener('click', function(){
            if (td.innerHTML==''){
            td.innerHTML = side1
            addTurnSide2(side2)
            let a = checkWinner(side1, side2)

            setTimeout(() => {
                if (a == side1){
                    container.innerHTML = ''
                    let div = document.createElement('div')
                    div.id = 'final'
                    div.append(document.createTextNode('You are the winner!'))
                    container.append(div)

                    let reload = document.createElement('button')
                    reload.append(document.createTextNode('Play again'))
                    container.appendChild(reload)
                    reload.addEventListener('click', function(){
                        location.reload();
                        return false;
                    })

                } else if (a == side2){
                    container.innerHTML = ''
                    let div = document.createElement('div')
                    div.id = 'final'
                    div.append(document.createTextNode('You lose! Try again :)'))
                    container.append(div)

                    let reload = document.createElement('button')
                    reload.append(document.createTextNode('Play again'))
                    container.appendChild(reload)
                    reload.addEventListener('click', function(){
                        location.reload();
                        return false;
                    })
                } else if(CheckEmptyTd() == false){
                    container.innerHTML = ''
                    let div = document.createElement('div')
                    div.id = 'final'
                    div.append(document.createTextNode('Its draw! Try again :)'))
                    container.append(div)

                    let reload = document.createElement('button')
                    reload.append(document.createTextNode('Play again'))
                    container.appendChild(reload)
                    reload.addEventListener('click', function(){
                        location.reload();
                        return false;
                    })
                }
              }, 200);
        }

        })
    })
}

