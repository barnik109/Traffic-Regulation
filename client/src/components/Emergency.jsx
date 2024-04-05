import React from 'react';

function Emergency() {
    // Functionality for emergency assistance can be added here
    return (
        <>
            <div className="flex flex-col h-screen justify-center">
                <h1 className='text-bold text-3xl text-black text-center mb-8'>Emergency Assistance</h1>
                <div className="flex flex-col justify-center items-center mx-20 mt-5">
                    <h2 className='text-xl text-black'>Emergency Response Support System (ERSS) is a Pan-India single number (112) based emergency response system for citizens
                        in emergencies. Each State/ UT is required to designate a dedicated Emergency Response Centres (ERC) to handle emergency
                        requests.If you require emergency assistance from Police, Fire & Rescue, Health and other services, you may :
                    </h2>
                    <div className="mt-5 flex ">
                        <div className="flex flex-col justify-between px-10 text-lg text-black">
                            <ul className='list-decimal flex flex-col justify-evenly'>
                                <li>Dial 112 from your phone;</li>
                                <li>Press power button on your smart phone 3 times quickly to activate Panic call; </li>
                                <li>In case of feature phone, long press ‘5’ or ‘9’ key to activate Panic call;</li>
                                <li>Log on to State ERSS website and place your SOS request; </li>
                                <li>Email SOS alert to State ERC; and </li>
                                <li>Use 112 India Mobile App (available in Google Playstore and Apple store) to activate a panic call to ERC.</li>
                            </ul>
                            <div className='text-md text-black mt-5'>
                                <div className='bg-red-100 border-dashed border-2 border-red-500 p-5'>
                                    <p>* In case of women and children, you can use 112 India mobile App to activate SHOUT feature, which alerts registered volunteers in vicinity for immediate assistance apart from activating ERC. </p>
                                    <p className='text-red-500 text-xl'>THIS IS AN EMERGENCY FACILITY.</p>
                                    <p className='text-red-500 text-xl'>USERS ARE ADVISED TO USE THIS SERVICE CAREFULLY. </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/2 flex justify-center'>
                            <img className='w-[300px]' src="../src/assets/india-ners.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Emergency;
