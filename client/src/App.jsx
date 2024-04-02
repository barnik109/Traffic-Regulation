import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from './contractJson/TrafficSystem.json';
import TrafficOfficer from './components/TrafficOfficer';
import PublicCheck from './components/PublicCheck';
import UserRegistration from './Registration/UserRegistration';
import OfficerRegistration from './Registration/OfficerRegistration';
import UserLogin from './Login/UserLogin';
import OfficerLogin from './Login/officerLogin';
import 'tailwindcss/tailwind.css';
import './App.css';
import logo from './assets/logo.png';
import front from './assets/front.png';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [userType, setUserType] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const contractAddress = '0x8E8d8135fcDFE2608F28461cca35eFbB856FbdaD';
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;

        const accounts = await ethereum.request({
          method: 'eth_requestAccounts'
        });

        window.ethereum.on('accountsChanged', () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        setState({ provider, signer, contract });
      } catch (error) {
        alert(error);
      }
    };

    initialize();
  }, []);

  const redirectToRegister = () => {
    window.location.href = '/register';
  };

  const redirectToLogin = () => {
    window.location.href = '/login';
  };

  const registerUser = () => {
    window.location.href = '/UserReg';
  };

  const registerOfficer = () => {
    window.location.href = '/OfficerReg';
  };

  const loginOfficer = () => {
    window.location.href = '/OfficerLogin';
  };

  const loginUser = () => {
    window.location.href = '/UserLogin';
  };

  return (
    <div className="text-white min-h-screen flex flex-col bg-black">
      <header className="flex justify-between items-center p-5 z-10">
        <span className='max-w-full'><img className='w-36' src={logo} alt="" /></span>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline cursor-pointer" >HOME</li>
            <li className="hover:underline cursor-pointer">ABOUT</li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4">
        <Router>
          <Routes>
            <Route exact path="/" element={
              <>
                {/* Main section */}
                <section className='h-screen flex justify-center items-center'>
                  <div className='text-white flex justify-center'>
                    <div className='w-1/2 mx-10 px-10'>
                      <div className="bg-black border border-sky-500 bg-opacity-70 backdrop-blur-lg rounded-3xl drop-shadow-lg p-5 flex flex-col justify-center items-center">
                        <h2 className="text-5xl font-bold my-8">The first Blockchain Based Traffic Regulation System in India</h2>
                        <p className='text-lg'>We believe in revolutionizing how traffic regulations are implemented and enforced. By leveraging the power of blockchain technology, we aim to create a transparent, efficient, and secure system that brings trust and accountability to traffic management.</p>
                      </div>
                      <div className='my-5 reg-btn'>
                        <button onClick={redirectToRegister} className="border px-5 py-1 mr-3 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full  shadow-lg shadow-blue-700/50 text-white">Register</button>
                        <button onClick={redirectToLogin} className="border px-5 py-1 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full  shadow-lg shadow-blue-700/50 text-white">Login</button>
                      </div>
                    </div>
                    <span className='w-1/2 flex justify-center'><img className='' src={front} alt="" /></span>
                  </div>
                </section>

                {/* Second Section */}
                <section>
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold ">Traffic Regulations Information</h3>
                    <div className="text-left m-5 px-20">
                      <p>
                        Here you can find essential information about traffic regulations, including speed limits, traffic signs, parking rules, and more.
                      </p>
                      <p>
                        Understanding and following traffic regulations is crucial for safe and efficient transportation. Make sure to stay informed and abide by the rules to contribute to smoother traffic flow and promote road safety.
                      </p>
                    </div>
                  </div>
                </section>
              </>
            } />

            <Route path="/register" element={
              <div className='backGround flex justify-center items-center'>
                <div className='content text-white shadow-lg flex h-screen w-screen flex-col items-center justify-center'>
                  <h2 className="text-3xl my-10">Register</h2>
                  <div className='flex justify-around my-10'>
                    <button onClick={registerOfficer} className="button-style mr-4 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Register as Traffic Officer</button>
                    <button onClick={registerUser} className="button-style ml-4 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Register as User</button>
                  </div>
                </div>
              </div>
            } />

            <Route path="/login" element={
              <div className='backGround flex justify-center items-center'>
                <div className='content text-white shadow-lg  flex h-screen w-screen flex-col items-center justify-center'>
                  <h2 className="text-3xl my-10">Login</h2>
                  <div className='flex justify-around my-10'>
                    <button onClick={loginOfficer} className="button-style mr-4 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Login as Officer</button>
                    <button onClick={loginUser} className="button-style ml-4 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Login as User</button>
                  </div>
                </div>
              </div>
            } />

            <Route path='/UserReg' element={<UserRegistration handleRegistrationSuccess={() => handleUserTypeSelection(null)} />} />
            <Route path='/OfficerReg' element={<OfficerRegistration handleRegistrationSuccess={() => handleUserTypeSelection(null)} />} />

            <Route path='/UserLogin' element={<UserLogin handleUserLogin={() => handleUserTypeSelection(null)} />} />
            <Route path='/OfficerLogin' element={<OfficerLogin handleOfficerLogin={() => handleUserTypeSelection(null)} />} />

            <Route path='/userDashboard' element={<PublicCheck contract={state.contract} />} />

          </Routes>
        </Router>
      </main>
      <footer className="p-5">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
}

export default App;
