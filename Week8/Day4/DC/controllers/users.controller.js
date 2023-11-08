const {
  _getAllUsers,
  _getUserById,
  _registerUser,
  _loginUser,
  _updateUser} = require("../models/users.model.js")


const getAllUsers = async (req, res) => {
  try{
    const data = await _getAllUsers()
    res.json(data);
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No users"});
  }
};

const getUserById = async (req, res) => {
  try{
    const {id} = req.params
    const data = await _getUserById(id)
    if (data.length === 0){
      res.json('No such user')
    } else{
      res.json(data);
    }
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No users"});
  }
};

const registerUser = async (req, res) => {
    try{
      console.log(req.body);
      const {email, username, password, first_name, last_name} = req.body;
      const data = await _registerUser(email, username, password, first_name, last_name)
      res.status(200).json({msg:'Successfully registered!'});
    }catch (e) {
      console.log(e)
      res.status(404).json({msg: "Somthing wrong"});
    }
};

const loginUser = async (req, res) => {
  console.log('I am here')
  const { username, password } = req.body;
  console.log(req.body);
  try{
    const data = await _loginUser(username)
    console.log(data)
    if (data[0]['password'] === password){
        res.status(200).json({msg:'Success!'})
        console.log('I am done')
      } else {
        res.status(404).json({msg:'Error!'})
        console.log('error here')
      }
    } catch (e) {
      console.log(e)
      res.status(404).json({msg: "No products to update"});
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const {first_name, last_name} = req.body
  try{
    const data = await _updateUser(id, first_name, last_name)
    res.status(200).json({msg: "Updated!"});
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "Can't update"});
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  loginUser,
  updateUser,
};
