let firstinput = document.getElementById('firstname')
let lastinput = document.getElementById('lastname')
let button = document.querySelector('button')

let fullname = {
  name: '',
  lastname: '',
}

button.addEventListener('submit', getVal)

function getVal(){
  fullname.name = firstinput.value
  fullname.lastname = lastinput.value
  firstinput.value = ''
  lastinput.value = ''
}


