import React from 'react';

const Contact = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between'>
            <div className="md:w-1/2 ml-8">
                <div><h1 className='text-black text-5xl font-bold'>CONTACT US</h1></div>
                <div className="mt-8">
                    <div className='text-black text-2xl'><span>📞</span> Call Us</div>
                    <div className='text-black mt-2'>1 (234) 567-891, 1 (234) 987-654</div>
                </div>
                <div className="mt-8">
                    <div className='text-black text-2xl'><span>📍</span> Location</div>
                    <div className='text-black mt-2'>121 Rock Street, 21 Avenue, New York, NY 92103-9000</div>
                </div>
                <div className="mt-8">
                    <div className='text-black text-2xl'><span>⏰</span> Business Hours</div>
                    <div className='text-black mt-2'>Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed</div>
                </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 mr-12">
                <form action="">
                    <div className='flex flex-col md:flex-row justify-between'>
                        <input type="text" placeholder="Enter your Name" className="block w-full md:w-5/12 p-4 border-b-4 border-black rounded-md mb-4 md:mb-0" />
                        <input type="email" placeholder="Enter a valid email address" className="block w-full md:w-5/12 p-4 border-b-4 border-black rounded-md mb-4 md:ml-4 md:mb-0" />
                    </div>
                    <div>
                        <input type="text" placeholder='Enter your Address' className='block w-full p-4 border-b-4 border-black rounded-md mb-4' />
                    </div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Enter your Message" className="block w-full p-4 border-black border-b-4 rounded-md mb-4"></textarea>
                    <input type="submit" value="Submit" className="block w-full p-4 bg-black text-white rounded-md cursor-pointer" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
