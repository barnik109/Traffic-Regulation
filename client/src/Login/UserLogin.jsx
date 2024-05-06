import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const UserLogin = ({ handleUserLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform authentication logic here
        // Upon successful authentication, call handleUserLogin() to redirect to user dashboard
        try {
            // Make an HTTP POST request to your backend server
            const response = await axios.post('http://localhost:3001/login', {
                username,
                password
            });

            // Check if the login was successful
            if (response.data.success) {
                // Call the handleUserLogin function to handle successful login
                // handleUserLogin();
                alert("Login successful")
                navigate('/userDashboard');
                handleUserLogin(username);
            } else {
                // Handle authentication failure
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('An error occurred while logging in:', error);
            setError('An error occurred while logging in. Please try again later.');
        }
    };

    return (
        <section className='bg-gray-900'>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="bg-gray-800 w-1/2 rounded-xl">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your Account
                        </h1>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6">
                            <div className=" flex flex-col justify-center items-center gap-10 mb-10">
                                <div className='w-1/2'>
                                    <label for="badgeNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="text" id="badgeNumber" name="badgeNumber" value={username} onChange={(e) => setUsername(e.target.value)} class=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required="" />
                                </div>
                                <div className='w-1/2'>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-10 justify-center items-center">
                                <motion.button whileHover={{ scale: 1.2 }} type="submit" class="w-[200px] text-white bg-gray-600 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</motion.button>
                            </div>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserLogin;
