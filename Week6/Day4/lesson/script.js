// const numbers = [10,11,12,15,20]

// numbers.forEach((e) => {
//     e % 2 === 0 && console.log(e);
//     })

// numbers.some((value) => value%2 == 0) // if at least one element match

// const words = ['wow', 'hey', 'bye']

// console.log(words.some((value)=>value.startsWith('h')))

//.every - for checking if everithing match

// const newWords = ['hello', 'hey', 'hola']
// console.log(newWords.every((e)=>e.startsWith('h')))

let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]


let sum = party.reduce((acc, val) => {
    return val.desert !== 'Apple Pie' ? acc + val.calories : acc;
}, 0);

console.log(sum)



