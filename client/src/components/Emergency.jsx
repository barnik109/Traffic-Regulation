import React from 'react';

function Emergency() {
    // Functionality for emergency assistance can be added here
    return (
        <div className="text-white min-h-screen flex justify-center items-center bg-red-600">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Emergency Assistance</h1>
                <p className="text-lg">Please dial your local emergency number for immediate assistance.</p>
                <p className="text-lg mt-4">If you are experiencing a medical emergency, please call your local emergency medical services.</p>
                <p className="text-lg mt-4">For other emergencies, please contact the appropriate authorities.</p>
            </div>
        </div>
    );
}

export default Emergency;
