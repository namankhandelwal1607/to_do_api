import express from 'express';
import addTask from '../controllers/addTask.js';
import getTasks from '../controllers/getTasks.js';
const router = express.Router();

router
.post('/addTask', addTask)
.get('/getTasks', getTasks)

export {router}