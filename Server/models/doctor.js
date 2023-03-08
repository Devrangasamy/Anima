import mongoose from "mongoose";
const { Schema } = mongoose;
const DoctorSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    specialization:{
        type:String,
        required:true,
    },
    degree: {
      type: String,
      required: true,
    },
    clinic_name: {
      type: String,
      required: true,
    },
    clinic_address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    years_of_experience: {
      type: Number,
      required: true,
    },
    certifications: {
      type: Array,
      required: true,
    },
    languages_spoken: {
      type: Array,
      required: true,
    },
    services_provided: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Doctor", DoctorSchema);
