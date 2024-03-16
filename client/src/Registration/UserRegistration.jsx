import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = ({ handleRegistrationSuccess }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fullName: '',
        dateOfBirth: '',
        address: '',
        licenseNumber: '',
        vehiclePlateNumber: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        phoneNumber: '',
        alternateEmail: '',
        termsAgreement: false
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val
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
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md overflow-y-auto" style={{ maxHeight: '80vh' }}>
            <h2 className="text-2xl font-semibold mb-4 text-black">User Registration</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name:</label>
                    <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">Driver's License Number:</label>
                    <input type="text" id="licenseNumber" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="vehiclePlateNumber" className="block text-sm font-medium text-gray-700">Vehicle Plate Number:</label>
                    <input type="text" id="vehiclePlateNumber" name="vehiclePlateNumber" value={formData.vehiclePlateNumber} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-700">Vehicle Make:</label>
                    <input type="text" id="vehicleMake" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">Vehicle Model:</label>
                    <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-700">Vehicle Year:</label>
                    <input type="text" id="vehicleYear" name="vehicleYear" value={formData.vehicleYear} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number:</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="alternateEmail" className="block text-sm font-medium text-gray-700">Alternate Email:</label>
                    <input type="email" id="alternateEmail" name="alternateEmail" value={formData.alternateEmail} onChange={handleChange} className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                </div>
                <div className="mb-4">
                    <input type="checkbox" id="termsAgreement" name="termsAgreement" checked={formData.termsAgreement} onChange={handleChange} className="mr-2" />
                    <label htmlFor="termsAgreement" className="text-sm text-gray-700">I agree to the terms and conditions</label>
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
            </form>
        </div>
    );
};

export default UserRegistration;