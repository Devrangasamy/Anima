import feedback from '../models/feedback.js';

export const createfeedback=async(req,res,next)=>{
    const newfeedback=new feedback(req.body);
    try{
        const savedfeedback= await newfeedback.save()
        res.status(200).json(savedfeedback);
    }
    catch(err)
    {
        next(err);
    }
}
export const deletefeedback=async(req,res,next)=>{
    try{
        var id;
        const  feedbacks= await feedback.find()
        feedbacks.forEach(element => {
            if(element.email===req.params.email)
            {
                id=element.id;
            }
        });
        await feedback.findByIdAndDelete(id);
        res.status(200).json("deleted the feedback");
    }
    catch(err)
    {
        next(err);
    }
}
export const getfeedback=async(req,res,next)=>{
    try
    {
        const feedbacks= await feedback.find()
        res.status(200).json(feedbacks);
    }
    catch(err)
    {
        next(err);
    }
}
