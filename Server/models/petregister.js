import mongoose from "mongoose";
const petSchema = mongoose.Schema({
  username: {
    type: String,
  },
  name: {
    type: String,
    // required: true,
  },
  species: {
    type: String,
    // required: true,
  },
  breed: {
    type: String,
    // required: true,
  },
  color: {
    type: String,
    // required: true,
  },
  weight: {
    type: Number,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
});

export default mongoose.model("pets", petSchema);
