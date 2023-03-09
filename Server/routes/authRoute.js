import express from "express";
import { getusers, login } from "../controller/auth.js";
import {register} from "../controller/auth.js"
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/",getusers);

export default router