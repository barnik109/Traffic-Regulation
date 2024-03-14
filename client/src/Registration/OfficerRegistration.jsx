import React, { useState } from 'react';
import axios from 'axios';

const OfficerRegistration = ({ handleRegistrationSuccess }) => {
    const [formData, setFormData] = useState({
        badgeNumber: '',
        department: '',
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
            const response = await axios.post('http://localhost:3001/register/officer', formData);
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
            <h2>Officer Registration</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="badgeNumber">Badge Number:</label>
                    <input type="text" id="badgeNumber" name="badgeNumber" value={formData.badgeNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="department">Department:</label>
                    <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
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

export default OfficerRegistration;
