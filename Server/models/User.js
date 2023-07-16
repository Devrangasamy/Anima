import { json } from "express";
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    newpassword: {
      type: String,
      required: true,
    },
    confirmpassword: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    birthday: {
      type: String,
      default: "----------",
    },
    address: {
      type: String,
      default: "----------",
    },
    gender: {
      type: String,
      default: "----------",
    },
    cartProducts: {
      type: Array,
      default: [],
    },
    wishList: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
