const {db} = require("../config/db.js")

const _getAllProduct = () => {
    return db("products").select('id', 'name', 'price').orderBy('id');
}

const _addProduct = (name, price) => {
    return db('products').insert({name, price}, ["id", "name", "price"])
}

const _updateProduct = (id, price) => {
    return db("products").update({price}, ["id", "name", "price"]).where({id});
}

module.exports = {
    
    _getAllProduct,
    _addProduct,
    _updateProduct
}