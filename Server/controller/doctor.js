import Doctor from "../models/doctor.js";

export const createDoctor=async(req,res,next)=>{
    const newDoctor=new Doctor(req.body);
    try{
        const savedDoctor= await newDoctor.save()
        res.status(200).json(savedDoctor);
    }
    catch(err)
    {
        next(err);
    }
}
export const updateDoctor=async(req,res,next)=>{
    try{
        const updateDoctor= await Doctor.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updateDoctor);
    }
    catch(err)
    {
        next(err);
    }
}
export const deleteDoctor=async(req,res,next)=>{
    try{
        await Doctor.findByIdAndDelete(req.params.id)
        res.status(200).json("deleted the product");
    }
    catch(err)
    {
        next(err);
    }
}
export const getDoctor=async(req,res,next)=>{
    try
    {
        const Doctor= await Doctor.findById(req.params.id)
        res.status(200).json(Doctor);
    }
    catch(err)
    {
        next(err);
    }
}
export const getDoctors=async(req,res,next)=>{
    try
    {
        const  Doctors= await Doctor.find()
        res.status(200).json(Doctors);
    }
    catch(err)
    {
        next(err);
    }
}
