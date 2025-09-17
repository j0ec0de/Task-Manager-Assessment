import Task from "../models/task.model.js"



export const getTasks = async(req, res) => {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
}

export const createTask = async(req, res) => {
    const { title } = req.body;

    if(!title) {
        return res.status(400).json({ message: 'Please add a title' });
    }

    const task = await Task.create({
        title,
        user: req.user.id,
    });

    res.status(201).json(task);
}

export const updateTask = async(req, res) => {
    const task = await Task.findById(req.params.id);

    if(!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if(task.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask)
}

export const deleteTask = async(req, res) => {
    const task = await Task.findById(req.params.id);

    if(!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if(task.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized' });
    }

    await task.deleteOne();
    res.json({ id: req.params.id });
}