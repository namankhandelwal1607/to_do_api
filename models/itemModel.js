import mongoose from "mongoose";
import {Schema} from "mongoose";

const taskSchema = new Schema({
    taskName: {type: String, required: true},
    taskDone: {type: Boolean, default: false}

});

const Task = mongoose.model('Task', taskSchema);

export {Task}