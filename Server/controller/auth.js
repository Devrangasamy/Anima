import bcrypt from "bcryptjs";
import User from "../models/User.js";

// Aws
import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import crypto from "crypto";
import dotenv from "dotenv";
import sharp from "sharp";
dotenv.config();

const bucketname = process.env.BUCKET_NAME;
const bucketregion = process.env.BUCKET_REGION;
const accesskey = process.env.ACCESS_KEY;
const secretaccesskey = process.env.SECRET_ACCESS_KEY;

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

const s3 = new S3Client({
  credentials: {
    accessKeyId: accesskey,
    secretAccessKey: secretaccesskey,
  },
  region: bucketregion,
});

// Aws end

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.confirmpassword, salt);
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ status: "success", data: newUser });
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.find({
      email: req.body.email,
      newpassword: req.body.newpassword,
    });
    if (user.length >= 1) {
      console.log(user);
      res.status(200).json({ status: "Success", data: user });
    } else {
      res.status(400).json(user);
    }
  } catch (err) {
    next(err);
  }
};
// This is to login using the google
export const loginUsingGoogle = async (req, res, next) => {
  try {
    const user = await User.find({
      email: req.body.email,
    });
    console.log(user);
    if (user.length >= 1) {
      res.status(200).json({ status: "Sucess", data: user });
    } else {
      res.status(400).json(user);
    }
  } catch (err) {
    next(err);
  }
};

export const getusers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};
export const findMailId = async (req, res, next) => {
  console.log("Find mail");
  try {
    const email = req.params.emailID.slice(1);
    const user = await User.find({ email: email });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const deleteEmailID = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted the user");
  } catch (err) {
    next(err);
  }
};

// This is to update the password
export const updatepassword = async (req, res, next) => {
  const filter = { email: req.body.email };
  try {
    const updation = await User.findOneAndUpdate(
      filter,
      { $set: req.body },
      { new: true }
    );
    console.log(updation);
    res.status(200).json({ status: "sucess", response: updation });
  } catch (error) {
    res.status(400).json({ status: "Fail", response: updation });
  }
};

// get user information
export const getuser = async (req, res, next) => {
  console.log("Insidde the get user");
  try {
    const user = await User.find({ username: req.params.username });
    const userObject = user[0].toObject();
    if (userObject.image) {
      const getObjectParams = {
        Bucket: bucketname,
        Key: user[0].image,
      };
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      userObject.imageurl = url;
    }
    res.status(200).json(userObject);
  } catch (err) {}
};

export const updateuser = async function updateuser(req, res, next) {
  let imageName;

  if (req.file) {
    const fileBuffer = await sharp(req.file.buffer)
      .resize({ height: 1000, width: 1000, fit: "fill" })
      .toBuffer();
    imageName = generateFileName();
    const params = {
      Bucket: bucketname,
      Key: imageName,
      Body: fileBuffer,
      ContentType: req.file.mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3.send(command);
  }

  const filter = { username: req.params.username };

  try {
    const updateData = { ...req.body };
    if (imageName !== undefined) {
      updateData.image = imageName;
    }
    for (const key in updateData) {
      if (updateData[key] === "null" || updateData[key] === "undefined") {
        delete updateData[key];
      }
    }
    const deleteImage = await User.find(filter);
    if (deleteImage[0].image && imageName !== undefined) {
      const deleteObjectParams = {
        Bucket: bucketname,
        Key: deleteImage[0].image,
      };
      const command = new DeleteObjectCommand(deleteObjectParams);
      await s3.send(command);
    }
    const updatedusers = await User.findOneAndUpdate(
      filter,
      { $set: updateData },
      { new: true }
    );
    res.status(200).json(updatedusers);
  } catch (err) {
    if (err.code === 11000) {
      if (err.keyPattern && err.keyPattern.username) {
        res.status(400).json({
          message:
            "Username already exists. Please choose a different username.",
        });
      } else if (err.keyPattern && err.keyPattern.email) {
        res.status(400).json({
          message: "Email already exists. Please choose a different email.",
        });
      }
    } else {
      res
        .status(500)
        .json({ message: "An error occurred while creating the user." });
    }
    console.log(res);
  }
};

export const updateCart = async (req, res, next) => {
  const filter = { _id: req.body.id };
  try {
    const user = await User.find(filter);
    console.log(user[0].cartProducts);
    const updation = await User.findOneAndUpdate(
      filter,
      { $set: req.body },
      { new: true }
    );
    console.log(updation);
    res.status(200).json(updation);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getCartItems = async (req, res, next) => {
  try {
    const user = await User.find({ _id: req.body.id });
    console.log(user);
    res.status(200).json(user[0].cartProducts);
  } catch (err) {
    res.status(500).json({ status: "failed" });
  }
};
