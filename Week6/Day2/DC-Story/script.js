// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

// Make sure the values are not empty

let noun = document.getElementById('noun')
let adjective = document.getElementById('adjective')
let person = document.getElementById('person')
let verb = document.getElementById('verb')
let place = document.getElementById('place')
let story = document.getElementById('story')

function getValue(e){
    e.preventDefault()
    noun = noun.value
    adjective = adjective.value
    person = person.value
    verb = verb.value
    place = place.value

    if (noun.length > 0 && adjective.length > 0 && person.length > 0 && verb.length > 0 && place.length > 0) {
    story.append(document.createTextNode(`Once upon a time ${noun} became ${adjective} flower. ${person} decided ${verb} to the ${place} and found a ${noun} there and a million dollars.`))
    } else {
        alert("You didn't fill the form")
    }
}

let button = document.getElementById('lib-button')
button.addEventListener('click', getValue)


// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.





// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.