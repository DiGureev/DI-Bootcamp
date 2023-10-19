//Console.log
// console.log("Hello World");

// Variables

// let x = 3
// console.log(x)


let addressNumber = '12';
let addressStreet = 'Hahagana';
let country = 'Israel';

// let globalAddress = "I live in".concat(" ", addressStreet, " ",addressNumber,", in ",country);

let betterGlobalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`

// console.log(betterGlobalAddress)

let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow']
// 
// console.log(pets[1])

pets.splice(3, 1, 'horse')

// console.log(pets)
// console.log(pets.length)

let names = ['john', 'sarah', 23, 'Rudolf', 34]

// for (let i of names) {
//     // console.log(i);
//     if (typeof i != 'string'){
//     continue;
//     } else {
//         if(i[0] !== i[0].toUpperCase()) {
//             i = i[0].toUpperCase() + i.slice(1)
//         }
//         console.log(i)

//     }
// }

for (let name of names) {
    if (typeof name != 'string') {
        continue;
    }
    console.log(name)

}