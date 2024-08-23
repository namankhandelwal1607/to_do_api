import {Task} from "../models/itemModel.js";

const addTask = async(req, res)=>{
    try{
    const {taskName} = req.body;

    const payload={
        taskName
    }

    const task = new Task(payload);
    const taskSave = await task.save();

    return res.status(401).json({
        message: 'Project Added Successfully',
        success: true,
        data: taskSave
    })
}catch(err){
    return res.status(400).json({
        message: err.message || err,
        error: true
    })
    }
    
}

export default addTask;
