let infoDiv = document.getElementById('info')
let btn = document.getElementById('search')


const getChar = async () => {
    infoDiv.innerHTML = ''
    Loading()
    try {let response = await fetch(`https://www.swapi.tech/api/people/${GetNumber()}`);
    
    let data = await response.json();
    let data2 = await fetch(data['result']['properties']['homeworld'])
    let planetData = await data2.json()

    PutDataToDom(data, planetData)
    
    }catch (e) {
        console.log(`${e}: No such person`);
        }
    
}

function Loading() {
    let newDiv = document.createElement('div')
    newDiv.id = 'load'
    let icon = document.createElement('i')
    icon.classList.add('fa-solid','fa-spinner','fa-spin')
    newDiv.append(icon)
    let word = document.createElement('p')
    word.textContent = 'Loading...'
    newDiv.append(word)
    infoDiv.append(newDiv)
}

function GetNumber(){
    let num = Math.floor(Math.random() * 83) + 1;
    return num
}

const PutDataToDom = async (data, planetData) =>{
    infoDiv.innerHTML = ''

    let pName = document.createElement('p')
    pName.textContent = data['result']['properties']['name']

    pName.id = 'CharName'

    let pHeight = document.createElement('p')
    pHeight.textContent = `Height: ${data['result']['properties']['height']}`

    let pGender = document.createElement('p')
    pGender.textContent = `Gender: ${data['result']['properties']['gender']}`

    let pBD = document.createElement('p')
    pBD.textContent = `Birth year: ${data['result']['properties']['birth_year']}`

    let pPlanet = document.createElement('p')
    pPlanet.textContent = `HomeWorld: ${planetData['result']['properties']['name']}`

    infoDiv.append(pName, pHeight, pGender, pBD, pPlanet)
}

btn.addEventListener('click', getChar);