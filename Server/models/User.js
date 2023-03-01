import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    newpassword:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }, 
  }
  ,{timestamps:true});

export default mongoose.model("User",UserSchema);