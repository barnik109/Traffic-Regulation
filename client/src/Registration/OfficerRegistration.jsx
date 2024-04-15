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
                alert("registration successful")
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('An error occurred while registering. Please try again later.');
        }
    };

    return (
        <div className="content bg-content-background overflow-hidden">
            <div className="backGround overflow-y-auto py-6 flex flex-col h-screen sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
                            <h2 className="text-4xl font-semibold mb-10 text-black">Officer Registration</h2>
                            {error && <p className="text-red-500 mb-4">{error}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="badgeNumber" className="block text-lg font-medium text-gray-700">Badge Number:</label>
                                    <input type="text" id="badgeNumber" name="badgeNumber" value={formData.badgeNumber} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="department" className="block text-lg font-medium text-gray-700">Department:</label>
                                    <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password:</label>
                                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black" />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default OfficerRegistration;
