import express from "express";
import { login } from "../controller/auth.js";
import {register} from "../controller/auth.js"
const router=express.Router();

router.post("/register",register);
router.post("/login",login);

export default router