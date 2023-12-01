import { getallproducts } from "../modules/product.module.js";

export const _getallproducts = async (req, res) => {
    try {
      console.log(req)
      const rows = await getallproducts();
      res.json(rows);
    } catch (e) {
      console.log(e);
      res.status(404).json({ msg: e.message });
    }
  };
  