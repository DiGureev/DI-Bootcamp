const { products } = require("../config/db.js");
const {
  _getAllProducts,
  _getOneProduct,
  _addProduct,
  _search4Product,
  _updatePost
} = require("../models/products.model.js");

const getAllProducts = async (req, res) => {
  try {
    const data = await _getAllProducts();
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "No Products" });
  }
};

const getOneProduct = async (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;

  try {
    const data = await _getOneProduct(id);
    if (data.length === 0)
      return res.status(404).json({ msg: "No Product Found" });
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "No Product Found" });
  }
  // const product = products.find((item) => item.id == id);
  // if (!product) return res.status(404).json({ message: "Product Not Found" });
  // res.json(product);
};

const search4Product = async (req, res) => {
  console.log("query=>", req.query);
  const { name } = req.query;
  try {
    const data = await _search4Product(name);
    if (data.length === 0)
      return res.status(404).json({ msg: "No Product Found" });
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "No Product Found" });
  }
};

const addProduct = async (req, res) => {
  console.log("body=>", req.body);
  const { name, price } = req.body;
  try {
    const data = await _addProduct(name, price);
    // res.json(data);
    getAllProducts(req, res);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Can not add a product" });
  }
  // const new_product = { ...req.body, id: products.length + 1 };
  // products.push(new_product);
  // res.status(201).json(products);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404); //.send('deleted')//.json({ message: "not found" });
  const deleted = products.splice(indx, 1);
  //   res.json(deleted)
  // res.send('deleted')
  res.sendStatus(201);
};

/*
id - params
data {name, price} - body
*/
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  console.log(id, name, price)
  try {
    const data = await _updatePost(id, name, price);
    // res.json(data);
    getOneProduct(req, res);
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: "Can not add a product" });
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  search4Product,
  addProduct,
  deleteProduct,
  updateProduct,
};
