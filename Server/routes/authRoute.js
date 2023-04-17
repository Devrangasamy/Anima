import express from "express";

// temp
import bcrypt from "bcryptjs";
import multer from "multer";
import User from "../models/User.js";

const upload = multer({ storage: multer.memoryStorage() });

import {
  deleteEmailID,
  findMailId,
  getuser,
  getusers,
  login,
  loginUsingGoogle,
  register,
  updatepassword,
  updateusers,
} from "../controller/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// This is for the Login during google
router.post("/loginUsingGoogle", loginUsingGoogle);
router.get("/", getusers);
// find if the mail id is in the database
router.get("/:emailID", findMailId);
router.put("/:username", updateusers);
// update the password in the database
router.post("/updatePassword", updatepassword);
router.delete("/:id", deleteEmailID);
router.get("/name/:username", getuser);
export default router;

// router.put("/:username", upload.single("avatar"), async (req, res, next) => {
//   const filter = { username: req.params.username };
//   try {
//     const img = req.file.buffer;
//     const encode_image = img.toString("base64");
//     const finalImg = {
//       contentType: req.file.mimetype,
//       image: new Buffer.from(encode_image, "base64"),
//     };
//     console.log(finalImg);
//     const updatedusers = await User.findOneAndUpdate(
//       filter,
//       { $set: { ...req.body, avatar: finalImg } },
//       { new: true }
//     );
//     res.status(200).json(updatedusers);
//   } catch (err) {
//     next(err);
//   }
// });
