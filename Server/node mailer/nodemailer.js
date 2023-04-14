import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();
export const sendMailUsingNodemailer = async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "animalwelfareanima@gmail.com",
      pass: process.env.NODEMAILER_GOOGLE_PASSWORD,
    },
  });
  const mailOptions = {
    from : "animalwelfareanima@gmail.com",
    to : req.body.to_address,
    subject : req.body.subject,
    text : req.body.message
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log(error)
    }else{
      res.status(200).json({status : "sucess", response : info.reponse})
    }
  })
};
