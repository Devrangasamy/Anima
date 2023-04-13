import express from "express";
import { createfeedback,getfeedback,deletefeedback } from "../controller/feedback.js";
const router=express.Router();
router.post("/",createfeedback);
router.delete("/:email",deletefeedback);
router.get("/",getfeedback);
export default router;