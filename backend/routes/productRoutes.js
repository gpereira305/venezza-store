import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();
// fetch all products
router.get("/", asyncHandler(async (req, res) => {
   const products = await Product.find({});
  //  throw new Error('Error')
   res.json(products);
}));

// fetch single product
router.get("/:id", asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
   res.json(product);
  }else {
   res.status(404);
   throw new Error("Produto não encontrado!") 
  }

  res.json(product);
}));

export default router;