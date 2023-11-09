const bcrypt = require("bcrypt")
const fs = require('fs');

const getAllUsers = (req, res) => {
  fs.readFile("./config/users.json", "utf-8", function (err, rawData) {
    if (err) {
      console.log(err);
    } else {
      let data = JSON.parse(rawData)
      res.json(data); 
    }
})
};

const getUserById = (req, res) => {
  const {id} = req.params
  fs.readFile("./config/users.json", "utf-8", function (err, rawData) {
    if (err) {
      console.log(err);
    } else {
      let data = JSON.parse(rawData)
      let user = data.find(item => item.id == id)
      res.json(user); 
    }
})
};


const UpdateUser = (req, res) => {
  const {id} = req.params
  const {firstname = '', lastname = '', username = '', password = ''} = req.body
  const obj = {firstname, lastname, username, password}
  console.log(obj)
  fs.readFile("./config/users.json", "utf-8", function (err, rawData) {
    if (err) {
      console.log(err);
      res.json({msg: err})
      } else {
        let data = JSON.parse(rawData);
        let userInd = data.findIndex(item => item.id == id);
        for (i in obj) {
          if (obj[i] != ''){
            console.log(i)
            data[userInd][i] = obj[i]
          }
        }
        console.log(data)
        
        fs.writeFile('./config/users.json', JSON.stringify(data), (err) => {
        if (!err) {
          res.status(200).json({msg: 'Done'})
          }
        })
      }
    })
}

const registerUser = (req, res) => {
  const {firstname, lastname, email, username, password} = req.body;
  console.log(req.body);
  if(firstname != '' && lastname != '' && email !='' && username !='' && password !='') {
    fs.readFile("./config/users.json", "utf-8", async function (err, rawData) {
      if (err) {
        console.log(err);
        res.json({msg: err});
        } else {
          let data = JSON.parse(rawData);
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(password + "", salt);
          let checkUser = data.filter(item => item.username == username);
          if (checkUser.length > 0){
            res.status(404).json({msg: 'This user already exist'});
          } else {
            const newUser = {id: data.length+1, firstname, lastname, email, username, password: hash};
            data.push(newUser);

            fs.writeFile('./config/users.json', JSON.stringify(data), (err) => {
              if (!err) {
                res.status(200).json({msg: 'Hello! Your account is now created!'});
                }
            })
          }
      
          }
      })
    } else {
      res.status(404).json({msg: "Field can't be empty"});
    }
  }

const loginUser = (req, res) => {
  const {username, password} = req.body;
  fs.readFile("./config/users.json", "utf-8", async function (err, rawData) {
    if (err) {
      console.log(err);
      res.json({msg: err});
      } else {
        let data = JSON.parse(rawData);
        let checkUser = data.find(item => item.username == username);
        if (!checkUser){
          res.status(404).json({msg: 'Username is not register'});
        } else {
          bcrypt.compare(password, checkUser['password'], function(err, result) {
            if (result) {
              res.status(200).json({msg:  `Hello ${username}, welcome back!`});
              console.log('I am done');
            }else {
              res.status(404).json({msg:'Password is not correct!'});
              console.log('Error here');
            }
          })
        }
      }
  })
}


module.exports = {
  getAllUsers,
  getUserById,
  UpdateUser,
  registerUser,
  loginUser
};
