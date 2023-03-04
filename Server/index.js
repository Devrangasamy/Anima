import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authRoute.js"
import productRoute from "./routes/productRoute.js"
dotenv.config();
const app=express()
mongoose.set('strictQuery', false);
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected")
      } catch (error) {
        throw error;
      }
}
const corsOpts = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type']
  };
app.use(cors(corsOpts));
mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected!");
})
app.use(express.json());
app.use("/api/auth",authRoute);
app.use('/api/product',productRoute);
app.use((err,req,res,next)=>{
    const errorStatus=err.status||500;
    const errorMessage=err.message||"something went wrong";
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})
app.listen(8000,()=>{
    connect()
    console.log("backend connected");
})