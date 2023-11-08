const {db} = require("../config/db.js")

const _getAllPosts = () => {
    return db("posts").select('id', 'title', 'content');
}

const _getPostById = (id) => {
    return db("posts").select('id', 'title', 'content').where({id});
}

const _createPost = (title, content) => {
    return db("posts").insert({title, content}, ['id', 'title', 'content'])
}

const _updatePost = (id, title, content) => {
    return db("posts").update({title, content}, ['id', 'title', 'content']).where({id});
}

const _deletePost = (id) => {
    return db("posts").where({id}).del();
}

module.exports = {
    _getAllPosts,
    _getPostById,
    _createPost,
    _updatePost,
    _deletePost
}