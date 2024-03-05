// import { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import abi from './contractJson/TrafficSystem.json';
// import TrafficOfficer from './components/TrafficOfficer';
// import PublicCheck from './components/PublicCheck';
// import './App.css';
// import bgVid from './assets/signal.mp4'
// import bgAudio from './assets/Traffic_Home_Audio.mp3'

// function App() {
//   const [state, setState] = useState({
//     provider: null,
//     signer: null,
//     contract: null
//   });

//   const [account, setAccount] = useState('Not connected');
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
//           <div className='content text-white shadow-lg  flex h-screen w-screen flex-col items-center justify-center'>
//             <h2 className="text-3xl my-10">Welcome to Blockchain Based Traffic Regulation System</h2>
//             <div className='flex justify-around my-10'>
//               <button onClick={() => handleUserTypeSelection('user')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">User Login</button>
//               <button onClick={() => handleUserTypeSelection('officer')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Traffic Officer Login</button>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     if (userType === 'user') {
//       return <PublicCheck contract={state.contract} />;
//     }

//     if (userType === 'officer') {
//       return <TrafficOfficer contract={state.contract} signer={state.signer} />;
//     }
//   };

//   return <div className="App">{renderContent()}</div>;
// }

// export default App;


import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from './contractJson/TrafficSystem.json';
import TrafficOfficer from './components/TrafficOfficer';
import PublicCheck from './components/PublicCheck';
import OfficerLogin from './Login/officerLogin'; // Import Traffic Officer Login component
import UserLogin from './Login/UserLogin'; // Import User Login component
import './App.css';
import bgVid from './assets/signal.mp4';
import bgAudio from './assets/Traffic_Home_Audio.mp3';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState('Not connected');
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
  };

  const renderContent = () => {
    if (!account) {
      return (
        <div>
          <h2>Connect your Ethereum account</h2>
          {/* You can add a button or some UI element to trigger account connection */}
        </div>
      );
    }

    if (!userType) {
      return (
        <div className='backGround flex justify-center items-center'>
          <video src={bgVid} autoPlay loop muted />
          <audio src={bgAudio} autoPlay />
          <div className='content text-white shadow-lg  flex h-screen w-screen flex-col items-center justify-center'>
            <h2 className="text-3xl my-10">Welcome to Blockchain Based Traffic Regulation System</h2>
            <div className='flex justify-around my-10'>
              <button onClick={() => handleUserTypeSelection('user')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">User Login</button>
              <button onClick={() => handleUserTypeSelection('officer')} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-3 hover:bg-blue-500">Traffic Officer Login</button>
            </div>
          </div>
        </div>
      );
    }

    // if (userType === 'user') {
    //   return <UserLogin handleUserLogin={() => handleUserTypeSelection(null)} />;
    // }

    // if (userType === 'officer') {
    //   return <OfficerLogin handleOfficerLogin={() => handleUserTypeSelection(null)} />;
    // }

    // Render dashboard components based on userType
    if (userType === 'user') {
      return <PublicCheck contract={state.contract} />;
    }

    if (userType === 'officer') {
      return <TrafficOfficer contract={state.contract} signer={state.signer} />;
    }
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;
