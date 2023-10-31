// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


let compareToTen = (num) => {
    let compare = new Promise((resolve, reject) => {
          if (num < 10) {
            resolve(true);
          } else {
            reject(false);
          }
        });

    compare
        .then(result => console.log(result))
        .catch(error => console.log(error))
    
}

compareToTen(6)


// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

Promise.resolve("success").then((data) => setTimeout(() => console.log(data), 4000));


// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

Promise.resolve(3).then((value) => console.log(value));
Promise.reject("Boo!").catch((error) => console.log(error));


// Exercise 4: Quizz - Not Mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.



