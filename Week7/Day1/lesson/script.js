// let myObj = {
//     name : "John",
//     lastName : "Doe",
//     age : 25,
//     friends : ["Mark", "Lucie", "Ana"]
// }

// let newObj = Object.entries(myObj)
// // console.log(Object.values(myObj))

// newObj.forEach((entry, index)=> {
//     console.log(entry)
// })



// // console.log( `The x# key is : ${totalKey} The x# value is : ${totalVal}`)

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.speak('Booo')
blackRabbit.speak('Nooo')