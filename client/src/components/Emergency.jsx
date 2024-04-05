import React from 'react';

function Emergency() {
    // Functionality for emergency assistance can be added here
    return (
        <>
        <h1 className='text-bold'>Emergency Assistance</h1>
        <div className="text-white min-h-screen flex justify-center items-center">
            <div className="">
                <h2>Emergency Response Support System (ERSS) is a Pan-India single number (112) based emergency response system for citizens
                    in emergencies. Each State/ UT is required to designate a dedicated Emergency Response Centres (ERC) to handle emergency
                    requests.If you require emergency assistance from Police, Fire & Rescue, Health and other services, you may :
                </h2>
                <ul>
                    <li>Dial 112 from your phone;</li>
                    <li>Press power button on your smart phone 3 times quickly to activate Panic call; </li>
                    <li>In case of feature phone, long press ‘5’ or ‘9’ key to activate Panic call;</li>
                    <li>Log on to State ERSS website and place your SOS request; </li>
                    <li>Email SOS alert to State ERC; and </li>
                    <li>Use 112 India Mobile App (available in Google Playstore and Apple store) to activate a panic call to ERC.</li>
                </ul>
                <div className='flex flex-row'>
                    <div className='w-full bg-red-900 border-2 border-dashed border-red-600'>
                        <p>* In case of women and children, you can use 112 India mobile App to activate SHOUT feature, which alerts registered volunteers in vicinity for immediate assistance apart from activating ERC. </p>
                        <p>THIS IS AN EMERGENCY FACILITY.</p>
                        <p>USERS ARE ADVISED TO USE THIS SERVICE CAREFULLY. </p>
                    </div>
                    <div className='w-full'>
                        <img src="../src/assets/india-ners.png" alt="" />
                    </div>
                </div>
                
            </div>
            
            </div>
            </>
    );
}

export default Emergency;
