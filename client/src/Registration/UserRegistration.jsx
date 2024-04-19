import React, { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

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
                // handleRegistrationSuccess();
                alert("Registration successful")
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('An error occurred while registering. Please try again later.');
        }
    };

    return (
        <>
            <section class="bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div class="bg-gray-800 w-1/2 rounded-xl">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register your Account
                            </h1>
                            {error && <p className="text-red-500 mb-4">{error}</p>}
                            <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6">
                                <div className="flex flex-wrap w-full justify-center items-center gap-10 mb-10">

                                    <div>
                                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                        <input type="username" name="username" value={formData.username} onChange={handleChange} id="username" class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required="" />
                                    </div>
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="fullName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                        <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="dateOfBirth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                                        <input type="date" name="dateOfBirth" id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder="Enter DOB" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} placeholder="City Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="licenseNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Driving License Number</label>
                                        <input type="text" id="licenseNumber" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} placeholder="Driving License Number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="vehiclePlateNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vehicle Plate Number</label>
                                        <input type="text" id="vehiclePlateNumber" name="vehiclePlateNumber" value={formData.vehiclePlateNumber} onChange={handleChange} placeholder="Driving License Number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="vehicleMake" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vehicle Make</label>
                                        <input type="text" id="vehicleMake" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} placeholder="Driving License Number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="vehicleModel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vehicle Model</label>
                                        <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} placeholder="Model Name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="vehicleYear" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vehicle Year</label>
                                        <input type="text" id="vehicleYear" name="vehicleYear" value={formData.vehicleYear} onChange={handleChange} placeholder="Vehicle Year" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="9123456780" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                </div>
                                <div class="flex items-start px-16">
                                    <div class="flex items-center h-5">
                                        <input type="checkbox" id="termsAgreement" name="termsAgreement" checked={formData.termsAgreement} onChange={handleChange} class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label htmlFor="termsAgreement" class="text-gray-500 dark:text-gray-300">I agree to the <a className='hover:underline text-blue-400' href="#">terms and conditions.</a></label>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-10 justify-center items-center">
                                    <motion.button whileHover={{ scale: 1.2 }} type="submit" class="w-[200px] text-white bg-gray-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</motion.button>
                                </div>
                                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Alredy have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserRegistration;