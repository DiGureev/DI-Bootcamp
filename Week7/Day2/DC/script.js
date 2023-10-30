let firstinput = document.getElementById('firstname')
let lastinput = document.getElementById('lastname')
let button = document.querySelector('button')
let div = document.getElementById('json')

let fullname = {
  name: '',
  lastname: '',
}

button.addEventListener('click', getVal)

function getVal(e){
  e.preventDefault()
  fullname.name = firstinput.value
  fullname.lastname = lastinput.value
  firstinput.value = ''
  lastinput.value = ''
  div.innerHTML = JSON.stringify(fullname)
}


