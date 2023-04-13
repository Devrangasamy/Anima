import express from "express";
import {
  deleteEmailID,
  findMailId,
  getuser,
  getusers,
  login,
  updateusers,
} from "../controller/auth.js";
import { register } from "../controller/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getusers);
router.get("/:emailID", findMailId);
router.delete("/:id", deleteEmailID);
router.put("/:username", updateusers);
router.get("/name/:username", getuser);
export default router;
