// Exercise 1 : Promise.All()
// Instructions
// Use the Promise.all that will accept the 3 promises below.
// The method should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.

Promise.all([
    new Promise((resolve) => resolve(3)),
    new Promise((resolve) => resolve(42)),
    new Promise((resolve) => setTimeout(() => resolve("foo"), 3000)),
])
  .then((data) => console.log(data))
  .catch((e) => console.log(e));

// Promise.all gives ass array of whatever promises resolve after all of them done and rejects if even one promise rejected

// Exercise 2 : Analyse Promise.All()
// Instructions
// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync); // [2, 4, 6]

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });