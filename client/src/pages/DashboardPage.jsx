import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    const fetchTasks = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            // Set auth token header
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const res = await axios.get('/api/tasks');
            setTasks(res.data);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/tasks', { title });
            setTitle('');
            fetchTasks(); // Refresh tasks list
        } catch (err) {
            console.error(err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`/api/tasks/${id}`);
            fetchTasks(); // Refresh tasks list
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <Link to="/">
                <button>Back</button>
            </Link>
            <h2>Task Dashboard</h2>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add a new task"
                    required
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        {task.title} ({task.status})
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;