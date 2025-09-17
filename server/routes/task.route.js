import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { createTask, deleteTask, getTasks, updateTask } from "../controller/task.controller.js";


const router = express.Router();

// Apply 'protect' middleware to all task routes

router.use(protect);

// chaining method - to keep the code D.R.Y

router.route('/')
    .get(getTasks)
    .post(createTask);

router.route('/:id')
    .put(updateTask)
    .delete(deleteTask);

export default router;