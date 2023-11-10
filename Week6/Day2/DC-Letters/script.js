// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

let input = document.querySelector('input')
let body = document.querySelector('body')

let numbers = '0123456789'
let specialChar = "'./,?!@#$%^&*()_+-=\||`~:;"


input.addEventListener('keydown', function (e) {
    if (numbers.includes(e.key) || specialChar.includes(e.key)){
        document.querySelector('body').innerHTML = `You are trying to type in something that is not a letter`;
        setTimeout(()=>{
            location.reload()
        }, 2000)
    } else if (e.key == 'Enter') {
        document.querySelector('body').innerHTML = input.value
        setTimeout(()=>{
            location.reload()
        }, 2000)
    }

  });