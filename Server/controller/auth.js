import bcrypt from "bcryptjs";
import User from "../models/User.js";
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
export const updateusers = async (req, res, next) => {
  const filter = { username: req.params.username };
  try {
    const updatedusers = await User.findOneAndUpdate(
      filter,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedusers);
  } catch (err) {
    next(err);
  }
};
export const findMailId = async (req, res, next) => {
  try {
    const email = req.params.emailID.slice(1);
    const user = await User.find({ email: email });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
export const getuser = async (req, res, next) => {
  try {
    const user = await User.find({ username: req.params.username });
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
