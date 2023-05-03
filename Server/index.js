import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
// To display the speed of the backend
import morgan from "morgan";
import { sendMailUsingNodemailer } from "./node mailer/nodemailer.js";
import authRoute from "./routes/authRoute.js";
import doctorRoute from "./routes/doctorRoute.js";
import feedbackRoute from "./routes/feedbackroute.js";
import petregister from "./routes/petregisterroutes.js";
import productRoute from "./routes/productRoute.js";

dotenv.config();
const app = express();
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb connected");
  } catch (error) {
    throw error;
  }
};

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected!");
});
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/auth", authRoute);
app.use("/api/product", productRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/feedback", feedbackRoute);
app.use("/api/petregister", petregister);
app.post("/sendMail", sendMailUsingNodemailer);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(8000, () => {
  connect();
  console.log("backend connected");
});
