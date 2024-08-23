import { Task } from "../models/itemModel.js";

const getTasks = async(req,res)=>{
    try{
        const tasks = await Task.find();

        return res.status(200).json({
            message: "fetched successfully",
            data: tasks,
            success: true
        })
    }catch(err){
        return res.status(400).json({
            messgae: err.message || err,
            error: true
        })
    }
}

export default getTasks;