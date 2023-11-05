// for (let index = 0; index < 5 ; index++) {
//     console.log(index)
// }

// let data = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

const getData = async() => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json()
        return data

    } catch (e) {
        console.log(e)
    }
}

// getData()

// const name = "Mike Taylor";

// const greeting = function (name) {
//   console.log(`Hello ${name}, welcome to NodeJS`);
// };

// const hello = function (name) {
//     console.log(`Hello ${name}`);
//   };

module.exports = getData
