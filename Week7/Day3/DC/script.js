// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// Test:

function sortWords(newArr) {
  newArr.sort()

  let two = new Promise((resolve, reject) => {
    if (newArr.length > 4) {
      resolve(newArr);
    } else {
      reject('Not enough');
    }
  })

  two
    .then(result => console.log(result))
    .catch(error => console.log(error))
}

function makeAllCaps(arr){
  let one = new Promise((resolve, reject) => {
    let check = (word) => typeof word == 'string' ? true : false
    if (arr.every(check)) {
      resolve(arr.map(word => word.toUpperCase()));
    } else {
      reject('At least one item not a string');
    }
  })

  one
    .then(result => sortWords(result))
    .catch(error => console.log(error))
}

// makeAllCaps([1, "pear", "banana"])

// makeAllCaps(["apple", "pear", "banana"])

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


function toJs(){
  let checkStr = new Promise((resolve, reject) => {
    let morseJS = JSON.parse(morse)
    if (Object.keys(morseJS).length !== 0) {
      resolve(morseJS);
    } else {
      reject('Empty object');
    }
  })

  checkStr
    .then(result => toMorse(result))
    .catch(error => console.log(error))
}

function toMorse(morseJS){
  let userWord = prompt('Give me a word or a sentence to encode');
  let checkStr = userWord.split(' ')

  let result = new Promise((resolve, reject) => {
    check = true
    checkStr.forEach(word =>{
      for (let letter of word.toLowerCase()) {

        if (Object.keys(morseJS).includes(letter)){
          check = true
        } else {
          check = false
        }
      }
    })

    if (check){
      let results = []
      
      checkStr.forEach(word => {
        newWord = ''
        for (let letter of word.toLowerCase()){
          letter = morseJS[letter]
          newWord +=letter
        }
        results.push(newWord)
      })
      resolve(results)
    } 
    else {
      reject('At least one element from the string not in a Morse dictionary')
    }  
  })

  result
    .then(result => joinWords(result))
    .catch(error => console.log(error))
}


function joinWords(morseTranslation){
  let div = document.getElementById('here')
  console.log(morseTranslation)
  morseTranslation.forEach(word => {
    let p = document.createElement('p')
    p.append(document.createTextNode(word))
    div.append(p)
  })

  // console.log(morseTranslation.join("\n"))
}

toJs()