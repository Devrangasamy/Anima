import express from "express";
import { getuser, getusers, login, updateusers } from "../controller/auth.js";
import { register } from "../controller/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", getusers);
router.put("/:username", updateusers);
router.get("/:username", getuser);
export default router;
