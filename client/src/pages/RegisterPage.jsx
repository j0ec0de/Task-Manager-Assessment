import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/register', formData);
            navigate('/login');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>Register</h2>
            <input type="text" name="name" placeholder="Name" onChange={onChange} required />
            <input type="email" name="email" placeholder="Email" onChange={onChange} required />
            <input type="password" name="password" placeholder="Password" onChange={onChange} required />
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;