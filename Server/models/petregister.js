import mongoose from "mongoose";
const petSchema = mongoose.Schema({
  userId: {
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
  medicalConditions: {
    type: String,
    // required: true,
  },
  allergies: {
    type: String,
    // required: true,
  },
  medications: {
    type: String,
    // required: true,
  },
  dietaryNeeds: {
    type: String,
    // required: true,
  },
  regularVet: {
    type: String,
    // required: true,
  },
  vaccinations: [
    {
      name: String,
      date: Date,
    },
  ],
});

export default mongoose.model("pets", petSchema);
