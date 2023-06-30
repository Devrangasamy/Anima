import mongoose from "mongoose";
const { Schema } = mongoose;
const ProductSchema = new Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    animal: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    photos: {
      type: String,
    },
    description: {
      type: Array,
    },
    specification: {
      type: Array,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", ProductSchema);
