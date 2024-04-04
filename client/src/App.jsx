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
import Emergency from './components/Emergency';


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

  const [selectedRow, setSelectedRow] = useState("");

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
  };

  const renderData = () => {
    switch (selectedRow) {
      case "General Tips":
        return (
          <ul className='list-disc flex flex-col justify-evenly h-full'>
            <li>Obey all traffic signals, boards, and signs.</li>
            <li>Adhere to permitted speed limits.</li>
            <li>Do Not Drink and Drive.</li>
            <li>Always carry your driver's license and other important documents such as vehicle registration, insurance, road tax & P.U.C. Certificates.</li>
            <li>Wear seat belts always while in a moving vehicle.</li>
            <li>Do not use your cell phones while driving. In case of an urgency, park on the left and answer the call.</li>
            <li>Use the indicator or hand signals while changing lanes.</li>
            <li>Irrespective of Right of Way, stay alert and considerate, especially to senior citizens, handicapped, and children.</li>
            <li>Avoid sudden braking and harsh acceleration.</li>
            <li>Never use the clutch as a footrest while driving.</li>
            <li>Use Pay and Park islands and avoid parking on the road.</li>
            <li>Do not overload your vehicles with either luggage or passengers.</li>
          </ul>

        );
      case "For Pedestrians":
        return (
          <ul className='list-disc flex flex-col justify-evenly h-full'>
            <li>Stop at the curb before entering a street.</li>
            <li>Roads must be crossed only at marked crosswalks. Look left-right-left before crossing a street.</li>
            <li>Always walk on the sidewalk.</li>
            <li>In the absence of a sidewalk, walk on the side of the road in the direction facing the road traffic.</li>
            <li>Keep a watch for the driver of a turning vehicle prior to crossing.</li>
            <li>Turn off your headphones while crossing a street to stay aware of the approaching traffic.</li>
            <li>Be extremely careful during gusty weather conditions.</li>
            <li>While crossing a roadway dissecting into a handful of lanes, be aware of each lane.</li>
            <li>Help the physically challenged and elderly to cross.</li>
            <li>Do not run while crossing.</li>
            <li>When you are accompanying a child while crossing, ensure you are holding his/her hand. Teach younger children basic rules of Traffic, in a way that is comprehensible to them.</li>
            <li>Do not permit children to play on the streets.</li>
          </ul>

        );
      case "For Two-Wheeler Riders":
        return (
          <ul className='list-disc flex flex-col justify-evenly h-full'>
            <li>Always wear helmets.</li>
            <li>Never drink and drive.</li>
            <li>Never stop abruptly in traffic. Always move to the left and then slow down.</li>
            <li>Stop or slow down your vehicle and allow the pedestrians to crossroads at unmanned/signaled Zebra crossings.</li>
            <li>Follow the traffic signals, boards, and signages.</li>
            <li>Always carry your driver’s license and other important documents such as vehicle registration, insurance, road tax & P.U.C. Certificates.</li>
            <li>Do not use your cell phones while driving. In case of an urgency, park on the left and answer the call.</li>
            <li>Do not ride at high speeds. If you lose control, your life may be at stake.</li>
            <li>Do not forget to wear helmets while driving. Helmets should be ISI marked and buckled properly.</li>
            <li>Don’t allow children to sit on fuel tanks or stand in front of the rider.</li>
            <li>Use your lights while riding at night.</li>
            <li>Do not ride or wheel your vehicle on the footpath.</li>
            <li>While passing a stationary vehicle, allow enough clearance for the car doors.</li>
            <li>Comprehend the signals given by other road users and use the same while riding.</li>
            <li>Avoid using brakes at turns. If needed, ensure both brakes are applied gently.</li>
            <li>Do not try and weave your way through stationary or slow-moving traffic. It may cause accidents.</li>
            <li>Always ride with both hands on the handlebar except when signaling.</li>
            <li>Slow down at zebra crossing and if it is required, do stop.</li>
          </ul>

        );
      case "For Four-Wheeler Drivers":
        return (
          <ul className='list-disc flex flex-col justify-evenly h-full'>
            <li>Always obey Road safety rules and regulations stipulated for motor vehicles.</li>
            <li>Look for the traffic signs before you cross signals.</li>
            <li>Drive within the speed limits prescribed. Ideally one should drive at approximately not more than 30 kmph near busy places such as markets and residential areas.</li>
            <li>Keep vehicle fit. A sudden breakdown of the vehicle on the road can cause hardships not only to you but also to fellow drivers and traffic personnel. Besides, towing a four-wheeler to a garage for maintenance works from the middle of the road can cost you a lot. This can be avoided if you regularly check and take care of your vehicle.</li>
            <li>Stop or slow down your vehicle and allow the pedestrians to crossroads at unmanned/signaled Zebra crossings.</li>
            <li>Always wear seat belts while driving four wheelers.</li>
            <li>Avoid rash or negligent driving.</li>
            <li>Do not drink and drive.</li>
            <li>Avoid using mobile phones while driving. Accidents are more common since motorists tend to ride fast at the signals when it turns green and are more likely to ignore the oncoming vehicles or the signal changes if talking on the mobile. In case of an urgent call, park the vehicle to the side of the road and put the brake lights on, and allow other motorists to pass by.</li>
            <li>Turn the brake lights ON before stopping so that the vehicles behind can avoid a collision.</li>
          </ul>

        );
      case "For Children":
        return (
          <ul className='list-disc flex flex-col justify-evenly h-full'>
            <li>Always walk on the footpath only. On roads without a footpath, walk on the extreme right-hand side of the roads.</li>
            <li>Do not be impatient on the road. Do not run or rush.</li>
            <li>Cross only at Zebra crossings, traffic signals, subways, foot over-bridges. In cases where such facilities do not exist, look for a safe place to cross.</li>
            <li>At the signaled junctions, cross only on a clear green signal. If an intersection is controlled by a policeman, traffic warden or RSP cadet, cross only when he signals to do so.</li>
            <li>While crossing between vehicles parked on the side of the road, remember that you are not visible to the moving traffic (because the parked vehicles may be taller than you). Stop as you appear from behind the vehicle and look for a safe gap before crossing. Remember, drivers need plenty of time to see you and to slow down and stop.</li>
            <li>While crossing wide roads that have central islands, always cross in two stages. Cross to the central Island, stop, and cross when the next section is clear.</li>
            <li>While crossing one-way streets, remember that the traffic will usually be moving in several lanes and at higher speeds. Do not cross unless all lanes are clear.</li>
            <li>Never cross a road at a corner/curve, it may happen that a motorist will taking the turn may not see you in time.</li>
            <li>Do not run across the road.</li>
          </ul>

        );
      case "For Parents":
        return (
          <ul className='list-disc flex flex-col justify-evenly h-full'>
            <li>Parents are responsible for the safety of their children during school journeys.</li>
            <li>It must be ensured that the mode of transport arranged by school or by themselves is safe.</li>
            <li>Parents must play the role of vigilant observers. Note down violations committed by school buses and immediately report to the authorities.</li>
            <li>Parents must participate in P.T.A. meetings and discuss the safety aspects of their children.</li>
            <li>Parents must ensure that the children acquire the right knowledge and skills for safe use of roads. They should teach their children the basic rules of the road, how to walk and cross the road, how to alight and board a bus, etc.</li>
            <li>Adults should not allow minor children to drive.</li>
            <li>Parents must also ensure that the right attitude for a law-abiding citizen is imparted to their children by the family.</li>
            <li>Children are very good observers and therefore, parents must set an example by meticulously observing even small traffic rules.</li>
          </ul>

        );
      default:
        return null;
    }
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
                <section className='h-screen'>
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold ">Road Safety Guideline</h3>
                    <div className="text-left m-5 px-20">
                      <p>
                        Here you can find essential information about traffic regulations, including speed limits, traffic signs, parking rules, and more.
                      </p>
                      <p>
                        Understanding and following traffic regulations is crucial for safe and efficient transportation. Make sure to stay informed and abide by the rules to contribute to smoother traffic flow and promote road safety.
                      </p>
                    </div>

                  </div>
                  <div className="flex px-20">
                    {/* Smaller column */}
                    <div className="w-1/3 border-l border-t border-b border-blue-500 cursor-pointer text-center flex flex-col bg-gray-900">
                      <button className={'tab-btn border-r border-blue-500 h-full py-5 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:border-none focus:ring focus:ring-gray-700'} onClick={() => handleRowClick("General Tips")}>General Tips</button>
                      <button className={'tab-btn border-r border-blue-500 h-full py-5 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:border-none focus:ring focus:ring-gray-700'} onClick={() => handleRowClick("For Pedestrians")}>For Pedestrians</button>
                      <button className={'tab-btn border-r border-blue-500 h-full py-5 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:border-none focus:ring focus:ring-gray-700'} onClick={() => handleRowClick("For Two-Wheeler Riders")}>For Two-Wheeler Riders</button>
                      <button className={'tab-btn border-r border-blue-500 h-full py-5 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:border-none focus:ring focus:ring-gray-700'} onClick={() => handleRowClick("For Four-Wheeler Drivers")}>For Four-Wheeler Drivers</button>
                      <button className={'tab-btn border-r border-blue-500 h-full py-5 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:border-none focus:ring focus:ring-gray-700'} onClick={() => handleRowClick("For Children")}>For Children</button>
                      <button className={'tab-btn border-r border-blue-500 h-full py-5 hover:bg-gray-800 active:bg-gray-900 focus:outline-none focus:border-none focus:ring focus:ring-gray-700'} onClick={() => handleRowClick("For Parents")}>For Parents</button>
                    </div>
                    {/* Larger column */}
                    <div className="border-r border-t border-b border-blue-500 w-2/3 px-10 py-5 bg-gray-900">
                      {renderData()}
                    </div>
                  </div>
                 
                  </div>                 
                </section>

                <section className='m-20'>
                  <div className='flex flex-col items-center'>
                    <Emergency/>
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
