

// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import abi from './contractJson/TrafficSystem.json';
// import TrafficOfficer from './components/TrafficOfficer';
// import PublicCheck from './components/PublicCheck';
// import UserRegistration from './Registration/UserRegistration';
// import OfficerRegistration from './Registration/OfficerRegistration';
// import UserLogin from './Login/UserLogin';
// import OfficerLogin from './Login/officerLogin';
// import 'tailwindcss/tailwind.css';
// import bgVid from './assets/signal.mp4';
// import bgAudio from './assets/Traffic_Home_Audio.mp3';
// import './App.css'

// function App() {
//   const [state, setState] = useState({
//     provider: null,
//     signer: null,
//     contract: null
//   });

//   const [account, setAccount] = useState(null);
//   const [userType, setUserType] = useState(null);

//   useEffect(() => {
//     const initialize = async () => {
//       const contractAddress = '0x8E8d8135fcDFE2608F28461cca35eFbB856FbdaD';
//       const contractABI = abi.abi;

//       try {
//         const { ethereum } = window;

//         const accounts = await ethereum.request({
//           method: 'eth_requestAccounts'
//         });

//         window.ethereum.on('accountsChanged', () => {
//           window.location.reload();
//         });

//         setAccount(accounts[0]);

//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();

//         const contract = new ethers.Contract(contractAddress, contractABI, signer);

//         setState({ provider, signer, contract });
//       } catch (error) {
//         alert(error);
//       }
//     };

//     initialize();
//   }, []);

//   const handleUserTypeSelection = (type) => {
//     setUserType(type);
//   };

//   const renderContent = () => {
//     if (!account) {
//       return (
//         <div>
//           <h2>Connect your Ethereum account</h2>
//           {/* You can add a button or some UI element to trigger account connection */}
//         </div>
//       );
//     }

//     if (!userType) {
//       return (
//         <div className='backGround flex justify-center items-center'>
//           <video src={bgVid} autoPlay loop muted />
//           <audio src={bgAudio} autoPlay />
//           <div className='content text-white shadow-lg  flex h-screen w-screen flex-col justify-center'>
//             <div className='w-[30rem] relative left-[20rem]'>
//               <h2 className="text-5xl font-bold my-8">The first Blockchain Based Trafic Regulation System in India</h2>
//               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo suscipit hic amet eveniet, nostrum corrupti voluptatem exercitationem mollitia rerum expedita a quae quibusdam repellendus voluptas totam architecto! Quo, id sit?</p>
//               <div className='my-5'>
//                 <button onClick={() => handleUserTypeSelection('register')} className="border px-5 py-1">Register</button>
//                 <button onClick={() => handleUserTypeSelection('login')} className="border px-5 py-1">Login</button>
//               </div>

//             </div>

//           </div>
//         </div>
//       );
//     }

//     if (userType === 'register') {
//       return (
//         <div className='backGround flex justify-center items-center'>
//           <video src={bgVid} autoPlay loop muted />
//           <audio src={bgAudio} autoPlay />
//           <div className='content text-white shadow-lg  flex h-screen w-screen flex-col items-center justify-center'>
//             <h2 className="text-3xl my-10">Register</h2>
//             <div className='flex justify-around my-10'>
//               <button onClick={() => handleUserTypeSelection('registerUser')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Register as User</button>
//               <button onClick={() => handleUserTypeSelection('registerOfficer')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Register as Traffic Officer</button>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (userType === 'login') {
//       return (
//         <div className='backGround flex justify-center items-center'>
//           <video src={bgVid} autoPlay loop muted />
//           <audio src={bgAudio} autoPlay />
//           <div className='content text-white shadow-lg  flex h-screen w-screen flex-col items-center justify-center'>
//             <h2 className="text-3xl my-10">Login</h2>
//             <div className='flex justify-around my-10'>
//               <button onClick={() => handleUserTypeSelection('user')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Login as User</button>
//               <button onClick={() => handleUserTypeSelection('officer')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Login as Traffic Officer</button>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (userType === 'registerUser') {
//       return <UserRegistration handleRegistrationSuccess={() => handleUserTypeSelection(null)} />;
//     }

//     if (userType === 'registerOfficer') {
//       return <OfficerRegistration handleRegistrationSuccess={() => handleUserTypeSelection(null)} />;
//     }

//     if (userType === 'user') {
//       return <UserLogin handleUserLogin={() => handleUserTypeSelection(null)} />;
//     }

//     if (userType === 'officer') {
//       return <OfficerLogin handleOfficerLogin={() => handleUserTypeSelection(null)} />;
//     }

//     if (userType === 'public') {
//       return <PublicCheck contract={state.contract} />;
//     }

//     if (userType === 'officer') {
//       return <TrafficOfficer contract={state.contract} signer={state.signer} />;
//     }
//   };

//   return (
//     <div className="text-white min-h-screen flex flex-col">
//       <header className="flex justify-between items-center p-5">
//         <h1 className="text-3xl font-bold">BBTRS</h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li className="hover:underline cursor-pointer">HOME</li>
//             <li className="hover:underline cursor-pointer">ABOUT</li>
//             <li className="hover:underline cursor-pointer">PRICING</li>
//             <li className="hover:underline cursor-pointer">CONTACT</li>
//           </ul>
//         </nav>
//       </header>
//       <main className="flex-grow container mx-auto px-4">
//         {renderContent()}
//       </main>
//       <footer className="p-5">
//         {/* Footer content goes here */}
//       </footer>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import abi from './contractJson/TrafficSystem.json';
import TrafficOfficer from './components/TrafficOfficer';
import PublicCheck from './components/PublicCheck';
import UserRegistration from './Registration/UserRegistration';
import OfficerRegistration from './Registration/OfficerRegistration';
import UserLogin from './Login/UserLogin';
import OfficerLogin from './Login/officerLogin';
import 'tailwindcss/tailwind.css';
import bgVid from './assets/signal.mp4';
import bgAudio from './assets/Traffic_Home_Audio.mp3';
import './App.css';
import logo from './assets/logo.png';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState(null);
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

        setAccount(accounts[0]);

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



  const handleUserTypeSelection = (type) => {
    setUserType(type);
    console.log(userType);

  };

  const redirectToRegister = () => {
    window.location.href = '/register';
  };

  const redirectToLogin = () => {
    window.location.href = '/login';
  }

  const registerUser = () => {
    window.location.href = '/UserReg';
  }

  const registerOfficer = () => {
    window.location.href = '/OfficerReg';
  }



  return (
    <div className="text-white min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-5 z-10">
        <h1 className="text-3xl font-bold"><span className='max-w-full'><img src={logo} alt="" /></span></h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline cursor-pointer" >HOME</li>
            <li className="hover:underline cursor-pointer">ABOUT</li>
            <li className="hover:underline cursor-pointer">PRICING</li>
            <li className="hover:underline cursor-pointer">CONTACT</li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4">
        <Router>
          <Routes>
            <Route exact path="/" element={
              <div className='backGround flex justify-center items-center'>
                <video src={bgVid} autoPlay loop muted />
                <audio src={bgAudio} autoPlay />
                <div className='content text-white shadow-lg  flex h-screen w-screen flex-col justify-center'>
                  <div className='w-[30rem] relative left-[20rem]'>
                    <h2 className="text-5xl font-bold my-8">The first Blockchain Based Traffic Regulation System in India</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo suscipit hic amet eveniet, nostrum corrupti voluptatem exercitationem mollitia rerum expedita a quae quibusdam repellendus voluptas totam architecto! Quo, id sit?</p>
                    <div className='my-5'>
                      <button onClick={() => redirectToRegister()} className="border px-5 py-1 mr-3 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Register</button>
                      <button onClick={() => redirectToLogin()} className="border px-5 py-1 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            } />


            <Route path="/register" element={
              <div className='backGround flex justify-center items-center'>
                <div className='content text-white shadow-lg flex h-screen w-screen flex-col items-center justify-center'>
                  <h2 className="text-3xl my-10">Register</h2>
                  <div className='flex justify-around my-10'>
                    <button onClick={() => registerOfficer()} className="button-style mr-4 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Register as Traffic Officer</button>
                    <button onClick={() => registerUser()} className="button-style ml-4 hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white">Register as User</button>
                  </div>
                </div>
              </div>
            } />




            <Route path="/login" element={
              <div className='backGround flex justify-center items-center'>
                <video src={bgVid} autoPlay loop muted />
                <audio src={bgAudio} autoPlay />
                <div className='content text-white shadow-lg  flex h-screen w-screen flex-col items-center justify-center'>
                  <h2 className="text-3xl my-10">Login</h2>
                  <div className='flex justify-around my-10'>
                    <button onClick={() => handleUserTypeSelection('user')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Login as User</button>
                    <button onClick={() => handleUserTypeSelection('officer')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Login as Traffic Officer</button>
                  </div>
                </div>
              </div>
            } />

            <Route path='/UserReg' element={<UserRegistration handleRegistrationSuccess={() => handleUserTypeSelection(null)} />} />
            <Route path='/OfficerReg' element={<OfficerRegistration handleRegistrationSuccess={() => handleUserTypeSelection(null)} />} />

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
