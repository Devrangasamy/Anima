import express from "express";
import User from "../models/User.js";
// temp
import {
  deleteEmailID,
  findMailId,
  getCartItems,
  getuser,
  getusers,
  login,
  loginUsingGoogle,
  register,
  updateCart,
  updatepassword,
  updateuser,
} from "../controller/auth.js";
const router = express.Router();

// For image
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// This has to be updated since it conflicts with other code.
// router.put("/:username", upload.single("image"), updateuser);

router.post("/register", register);
router.post("/login", login);
// This is for the Login during google
router.post("/loginUsingGoogle", loginUsingGoogle);
router.get("/", getusers);
// find if the mail id is in the database
router.get("/getCartItems",  getCartItems); 

// This should be updated else the forgot password wont work
router.get("/:emailID", findMailId);

// update the password in the database
router.post("/updatePassword", updatepassword);
router.put("/updateCart", updateCart);
router.delete("/:id", deleteEmailID);
router.get("/name/:username", getuser);

// To update the items in the cart
// To get the items in the cart


export default router;
