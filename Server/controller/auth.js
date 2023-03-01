import User from "../models/User.js"

export const register=async(req,res,next)=>{
    try{
        const newUser = new User(req.body)
        await newUser.save();
        res.status(200).send(newUser);
    }
    
    catch(err)
    {
        next(err);
    }
}
