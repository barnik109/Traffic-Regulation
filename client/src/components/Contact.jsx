import React from 'react';

const Contact = () => {
    return (
        <div className="relative h-screen w-full px-10 bg-gray-900 flex justify-center items-center"
            style={{
                backgroundImage: "url('https://images7.alphacoders.com/123/1239294.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >

            <div className='w-1/3 ml-10'>
                <h2 className=" top-8 left-8 text-6xl font-semibold text-white">CONTACT US</h2>
                <div className=" top-20 left-8 items-center mt-20">
                    <p className="text-3xl font-semibold text-white mb-5">Location</p>
                    <p className="text-lg font-semibold text-white">Jalpaiguri Governmet Engineering College,</p>
                    <p className='text-lg font-semibold text-white'>Jalpaigrui, India</p>
                </div>
            </div>


            <div className='relative w-1/2 bg-gray-100/30 py-5 rounded-[20px]'>
                
                <form className="text-white flex flex-col justify-center items-center">
                    <div className='flex flex-col w-2/3'>
                        <label htmlFor="name" className="mt-5 text-lg font-medium">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="  rounded-md"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className='flex flex-col w-2/3'>
                        <label htmlFor="email" className="mt-5 text-lg font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="  rounded-md"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className='flex flex-col w-2/3'>
                        <label htmlFor="message" className="mt-5 text-lg font-medium ">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="  rounded-md"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div className='mt-5'>
                        <button
                            type="submit"
                            className=" flex justify-center py-3 px-6 mb-5 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;