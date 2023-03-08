
import express from "express";
import { createDoctor,updateDoctor,deleteDoctor,getDoctor, getDoctors } from "../controller/doctor.js";
const router=express.Router();
router.post("/",createDoctor);
router.put("/:id",updateDoctor);
router.delete("/:id",deleteDoctor);
router.get("/",getDoctors);
router.get("/:id",getDoctor);
export default router