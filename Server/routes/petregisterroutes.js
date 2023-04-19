import express from "express";
const petroute = express.Router();

import { getPet, register, getbyid } from "../controller/petregiter.js";

petroute.get("/all/:username", getPet);
petroute.post("/", register);
petroute.get("/:id", getbyid);
export default petroute;
