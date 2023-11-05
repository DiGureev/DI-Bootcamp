import fs from 'fs'
import path from 'path'
const directoryPath = path.join('./');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            console.log(file); 
        })
    }
})
