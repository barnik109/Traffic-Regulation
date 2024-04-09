import React from 'react';

const AboutUs = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-gray-800">About Us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam libero vel dolor finibus congue.
                        Fusce non ligula tempor, consequat elit nec, pharetra nunc. Donec vitae eros id lectus tristique dictum.
                    </p>
                </div>
                <div className="flex justify-center mt-8">
                    <div className="mr-4">
                        <img src="image1.jpg" alt="Image 1" className="w-64 h-64 object-cover" />
                    </div>
                    <div className="mr-4">
                        <img src="image2.jpg" alt="Image 2" className="w-64 h-64 object-cover" />
                    </div>
                    <div className="mr-4">
                        <img src="image3.jpg" alt="Image 3" className="w-64 h-64 object-cover" />
                    </div>
                    <div>
                        <img src="image4.jpg" alt="Image 4" className="w-64 h-64 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
