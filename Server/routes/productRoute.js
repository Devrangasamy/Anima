import express from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controller/product.js"
// import Product from "../models/Product.js";
// import asyncHandler from "express-async-handler"

const router=express.Router();

router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);
router.get("/:id",getProduct);
// router.put("/")
// router.get("/:productname", asyncHandler(async (req, res) => {
//     const pageSize = 12;
//     const page = Number(req.query.pageNumber) || 1;
//     const keyword = req.query.keyword!=" "
//       ? {
//           productname: {
//             $regex: req.query.keyword,
//             $options: "i",
//           },
//         }
//       : {};
//     const count = await Product.countDocuments({ ...keyword });
//     console.log(keyword);
//     const products = await Product.find({ ...keyword })
//       .limit(pageSize)
//       .skip(pageSize * (page - 1))
//       .sort({ _id: -1 });
//     res.json({ products, page, pages: Math.ceil(count / pageSize) });
//   }));

router.get("/",getProducts);

export default router