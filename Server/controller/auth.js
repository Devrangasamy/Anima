import User from "../models/User.js"

export const register=async(req,res,next)=>{
    try{
        const newUser = new User(req.body)
        await newUser.save();
        res.status(200).json({ "status": "success", "data": newUser });
    }
    
    catch(err)
    {
        next(err);
    }
}
export const login=async(req,res,next)=>{
    try{
        const user= await User.find({email:req.body.email ,newpassword:req.body.newpassword});
        if(user.length>=1)
        {
            console.log(user);
            res.status(200).json({"status":"success","data":user});

        }
        else
        {
            res.status(400).json(user);
        }
    }
    catch(err)
    {
        next(err);
    }
}