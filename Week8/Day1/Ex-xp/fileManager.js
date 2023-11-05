// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

// Create a file “Hello World.txt” containing the sentence “Hello World !! “

// Create a file “Bye World.txt” containing the sentence “Bye World !! “

const fs = require("fs");

const readFunc = () => {
    fs.readFile('Hello-World.txt', 'utf-8', function (err, data) {
        if (err) {
            console.error(err)
            return
        }
    
        console.log(data)
    });
  };


const writeFunc = () => {
    fs.writeFile("Bye-World.txt", 'Writing to the file', function (err){ 
        if (err){ 
            console.log(err);
        }
        else{
            console.log('Write operation complete.');
        }
    });
};

module.exports = {readFunc,  writeFunc}