import express from "express";
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
// update the password in the database
router.post("/updatePassword", updatepassword);
router.delete("/:id", deleteEmailID);
router.put("/:username", updateusers);
router.get("/name/:username", getuser);
export default router;
