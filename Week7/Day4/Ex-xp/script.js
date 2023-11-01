// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!



// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.

// const getGif = () => {
//     fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//             } else {
//             throw new Error("Respond not successful");
//             }
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err);
//     }); 
// }

// getGif()

// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.


const getGif = () => {
    let query = 'sun'
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    .then(response => {
        if (response.ok) {
            console.log(response)
            return response.json();
            } else {
            throw new Error("Respond not successful");
            }
    })
    .then(data => {
        let arr = Object.entries(data.data)
        console.log(arr.slice(2,12))
    })
    .catch((err) => {
        console.log(err);
    }); 
}

// getGif()

// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));

// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.


// const fetchData = async () => {
//   let data = await fetch("https://www.swapi.tech/api/starships/9/");
//   if (data.ok) {
//     return data.json();
//     } else {
//     throw new Error("Respond not successful");
//     }
// };
// fetchData();


// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();