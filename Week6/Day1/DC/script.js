// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).

// const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// const colors = ['lightblue', 'orange', 'green', 'red', 'lightgreen', 'grey', 'white', 'blue']

// const section = document.querySelector('.listPlanets')
// let planetClass = 1
// let colorIndex = 0

// const moon = ['moon']

// for (let planet of planets){
//     let div = document.createElement('div')
//     div.classList.add("planet", planetClass)
//     div.setAttribute('style', `background-color: ${colors[colorIndex]};`)
//     section.append(div)
//     planetClass += 1
//     colorIndex += 1
// }


// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

planet1 = {
    name: 'Mercury',
    moon: 0,
}

planet2 = {
    name: 'Venus',
    moon: 0,
}

planet3 = {
    name: 'Earth',
    moon: 1,
}

planet4 = {
    name: 'Mars',
    moon: 2,
}

planet5 = {
    name: 'Jupiter',
    moon: 4,
}

const planets = [planet1, planet2, planet3, planet4, planet5]

const colors = ['lightblue', 'orange', 'green', 'red', 'lightgreen', 'grey', 'white', 'blue']

const section = document.querySelector('.listPlanets')
let planetClass = 1
let colorIndex = 0

const moon = ['moon']

for (let planet of planets){
    let div = document.createElement('div')
    let marginLeft = 0
    let marginTop = 0
        for (let step = 1; step <= planet.moon; step++){
            let moon = document.createElement('div')
            moon.classList.add("moon")
            moon.setAttribute('style', `margin-left: ${marginLeft}px; margin-top: ${marginTop}px;`)
            marginLeft += 50
            div.append(moon)
        }
    div.classList.add("planet", planetClass)
    div.setAttribute('style', `background-color: ${colors[colorIndex]};`)
    section.append(div)
    planetClass += 1
    colorIndex += 1
}