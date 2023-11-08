const {
  _getAllPosts,
  _getPostById,
  _createPost,
  _updatePost,
  _deletePost} = require("../models/posts.model.js")


const getAllPosts = async (req, res) => {
  try{
    const data = await _getAllPosts()
    res.json(data);
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No posts"});
  }
};

const getPostById = async (req, res) => {
  try{
    const {id} = req.params
    const data = await _getPostById(id)
    if (data.length === 0){
      res.json('No such post')
    } else{
      res.json(data);
    }
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No posts"});
  }
};

const createPost = async (req, res) => {
    try{
      console.log(req.body);
      const {title, content} = req.body;
      const data = await _createPost(title, content)
      getAllPosts(req,res);
    }catch (e) {
      console.log(e)
      res.status(404).json({msg: "Can not add the post"});
    }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try{
    const data = await _updatePost(id,title, content)
    res.json(data);
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No products to update"});
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  try{
    const data = await _deletePost(id)
    res.json('Deleted');
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "Can't delete"});
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
