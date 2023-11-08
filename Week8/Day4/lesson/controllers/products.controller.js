const { products } = require("../config/db.js");
const { _getAllProduct, _addProduct, _updateProduct} = require("../models/products.model.js")


const getAllProducts = async (req, res) => {
  try{
    const data = await _getAllProduct()
    res.json(data);
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No products"});
  }
};

const getOneProduct = (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) return res.status(404).json({ message: "Product Not Found" });
  res.json(product);
};

const search4Product = (req, res) => {
  console.log("query=>", req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  console.log(filtered);
  if (filtered.length === 0)
    return res.status(404).json({ message: "Not Found" });
  res.json(filtered);
};

const addProduct = async (req, res) => {
    try{
      const {name, price} = req.body
      const data = await _addProduct(name, price)
      res.json(data);
    }catch (e) {
      console.log(e)
      res.status(404).json({msg: "Can not add the product"});
    }
  // console.log("body=>", req.body);
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
  const { price } = req.body;
  try{
    const data = await _updateProduct(id,price)
    getAllProducts(req, res)
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No products to update"});
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  search4Product,
  addProduct,
  deleteProduct,
  updateProduct
};
