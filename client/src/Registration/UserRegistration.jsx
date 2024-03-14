import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = ({ handleRegistrationSuccess }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/register/user', formData);
            if (response.data.success) {
                handleRegistrationSuccess();
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('An error occurred while registering. Please try again later.');
        }
    };

    return (
        <div>
            <h2>User Registration</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default UserRegistration;
