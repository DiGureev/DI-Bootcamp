let mainDiv = document.getElementById('container')
let divColorsChoise = document.getElementById('colors')
let divAlotOfColors = document.getElementById('color-container')
let divColorTable = document.getElementById('color-table')
let button = document.getElementById('clear')

let mousePressed = false

const colors = ['#ff0000', '#ff4500', '#ffa500', '#ffff00', '#9acd32', '#90ee90', '#008000', '#40e0d0', '#00ffff', '#87cefa', '#1e90ff', '#0000ff', '#00008b', '#4b0082', '#8b008b', '#ee82ee', '#ffb6c1', '#d3d3d3', '#808080', '#000000', '#ffffff']

for (let i = 0; i< 1440; i++){
    let eachCell = document.createElement('div');
    eachCell.classList.add('cell');
    eachCell.style.height = '3б5vh'
    eachCell.style.border = '0.5px solid lightgrey'
    divColorTable.append(eachCell);
}

console.log(button)
button.addEventListener('click', function(event){
    event.preventDefault();
    let AllCells =  Array.from(document.getElementsByClassName('cell'))
    AllCells.forEach(cell => {
        cell.style.backgroundColor = ''
    })
})

mainDiv.addEventListener("mouseup", () => {
    mousePressed = false
    })


colors.forEach((item) =>{
    let eachColorDiv = document.createElement('div');
    eachColorDiv.classList.add('blocks');
    eachColorDiv.style.backgroundColor = item;
    divAlotOfColors.append(eachColorDiv)


    eachColorDiv.addEventListener('click', () => {
        let AllBlocks =  Array.from(document.getElementsByClassName('blocks'))
        AllBlocks.forEach(block => block.style.border = '0.5px solid black')

        eachColorDiv.style.border = '2px solid black'

        let color = eachColorDiv.style.backgroundColor
        
        let AllCells =  Array.from(document.getElementsByClassName('cell'))
        AllCells.forEach(cell => {
            cell.addEventListener("mousedown", () => {
                cell.style.backgroundColor = color
                mousePressed = true
            });

            cell.addEventListener("mousemove", () => {
                if (mousePressed == true){
                    cell.style.backgroundColor = color;
                }
            });

            });
        })
    })


