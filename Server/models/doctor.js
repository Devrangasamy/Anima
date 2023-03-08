import mongoose from "mongoose";
const {Schema} = mongoose;
const DoctorSchema = new Schema({
    doctorname:{
        type:String,
        required:true,
    },
    doctornumber:{
        type:Number,
        required:true, 
    },
    doctorlocation:{
        type:String,
        required:true, 
    },
    doctorage:{
        type:Number,
        required:true, 
    },
    doctorspecilitation:{
        type:String,
    },
    doctorexperience:{
        type:String,
        required:true, 
    },
    doctorcerification:{
        type:String,
        required:true, 
    },
},{timestamps:true});
export default mongoose.model("Doctor",DoctorSchema);