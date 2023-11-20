const { db } = require("../config/db.js");

const _getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

const _getOneProduct = (id) => {
  return db("products").select("id", "name", "price").where({ id });
};

const _addProduct = (name, price) => {
  return db("products").insert({ name, price }, ["id", "name", "price"]);
};

const _search4Product = (name) => {
  return db("products").select("id", "name", "price").whereILike('name', `${ name }%`);
}

const _updatePost = (id, name, price) => {
  return db("products").update({name, price}, ['id', 'name', 'price']).where({id});
}

module.exports = {
  _getAllProducts,
  _getOneProduct,
  _addProduct,
  _search4Product,
  _updatePost
};
