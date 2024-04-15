import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OfficerLogin = ({ handleOfficerLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [badgeNumber, setBadgeNumber] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login/officer', {
                badgeNumber,
                password
            });

            if (response.data.success) {
                alert("Login successful");
                // Redirect to officer dashboard or perform any action after successful login
                navigate('/officerDashboard');
                handleOfficerLogin(badgeNumber);
                // console.log(badgeNumber)
            } else {
                setError('Invalid badge number or password');
            }
        } catch (error) {
            console.error('An error occurred while logging in:', error);
            setError('An error occurred while logging in. Please try again later.');
        }
    };

    return (
        <>
        <div className="flex justify-center items-center h-screen bg-content-background">
            <div className="relative w-full sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <h2 className="text-4xl font-semibold mb-10 text-black text-center sm:text-left">Traffic Officer Login</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="mb-4">
                            <label htmlFor="badgeNumber" className="block text-lg font-medium text-gray-700">Badge Number:</label>
                            <input
                                id="badgeNumber"
                                type="text"
                                value={badgeNumber}
                                onChange={(e) => setBadgeNumber(e.target.value)}
                                placeholder="Enter your badge number"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password:</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full sm:w-auto">Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default OfficerLogin;
