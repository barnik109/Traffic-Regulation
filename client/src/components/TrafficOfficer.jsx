import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import police from '../assets/police.gif'

const TrafficOfficer = ({ contract,signer, officerBadgeNumber }) => {

  const navigate = useNavigate();

  const [enteringLicenseNumber, setEnteringLicenseNumber] = useState("");
  const [violationDate, setViolationDate] = useState("");
  const [violationType, setViolationType] = useState("Speeding");
  const [storedViolations, setStoredViolations] = useState([]);
  const [checkingLicenseNumber, setCheckingLicenseNumber] = useState("");
  const [matchedViolations, setMatchedViolations] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [badgeNumber, setBadgeNumber] = useState("");

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    // Retrieve badge number from local storage
    const storedBadgeNumber = localStorage.getItem("officerBadgeNumber");
    if (storedBadgeNumber) {
      setBadgeNumber(storedBadgeNumber);
    } else if (officerBadgeNumber) {
      setBadgeNumber(officerBadgeNumber);
    }
  }, []);

  // Function to save badge number to local storage
  const saveBadgeNumberToLocalStorage = (badgeNumber) => {
    localStorage.setItem("officerBadgeNumber", badgeNumber);
  };

  const handleEnteringLicenseChange = (e) => {
    setEnteringLicenseNumber(e.target.value);
  };

  const handleViolationDateChange = (e) => {
    setViolationDate(e.target.value);
  };

  const handleViolationTypeChange = (e) => {
    setViolationType(e.target.value);
  };

  const handleCheckingLicenseChange = (e) => {
    setCheckingLicenseNumber(e.target.value);
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    localStorage.removeItem("officerBadgeNumber");
    alert("You have been logged out successfully");
    navigate("/");
  };

  const submitViolation = async (event) => {
    event.preventDefault();
    try {
      const offenceType = convertViolationTypeToCode(violationType);
      const tx = await contract.processViolation(offenceType);
      await tx.wait();


      const response = await fetch('http://localhost:3001/submit-violation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          drivingLicenseNumber: enteringLicenseNumber,
          violationDate,
          violationType,
          demeritPoints: calculateDemeritPoints(offenceType),
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log(result.message);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkViolationsDetails = () => {
    const matched = storedViolations.filter(
      (violation) => violation.drivingLicenseNumber === checkingLicenseNumber
    );
    setMatchedViolations(matched);
  };

  const convertViolationTypeToCode = (violationType) => {
    const violationTypeCodes = {
      "GeneralOffence": 1,
      "NotObeyingAuthorities": 2,
      "WithoutValidLicense": 3,
      "AfterDisqualification": 4,
      "Overspeeding": 5,
      "RashDriving": 6,
      "UnderInfluence": 7,
      "UnfitState": 8,
      "WithoutInsurance": 9,
      "IllegalRacing": 10,
      "OversizedVehicle": 11,
      "AccidentRelatedOffences": 12,
      "WithoutRegistration": 13,
      "WithoutPermit": 14,
      "UsingMobileWhileDriving": 15,
      "OverloadingVehicle": 16,
      "OverloadingPassengers": 17,
      "OverloadingTwoWheeler": 18,
      "NoHelmet": 19,
      "NoSeatbelt": 20,
      "NotGivingWay": 21,
      "JuvenileOffences": 22,
      "UsageOfHorn": 23
    };
    return violationTypeCodes[violationType];
  };

  const calculateDemeritPoints = (offenceType) => {
    const demeritPointsMapping = {
      1: 5,
      2: 10,
      3: 15,
      4: 20,
      5: 10,
      6: 10,
      7: 20,
      8: 10,
      9: 10,
      10: 15,
      11: 15,
      12: 15,
      13: 15,
      14: 20,
      15: 20,
      16: 20,
      17: 10,
      18: 10,
      19: 10,
      20: 10,
      21: 20,
      22: 20,
      23: 10,
    };
    return demeritPointsMapping[offenceType] || 0;
  };

  // Call the function to save badge number to local storage when it changes
  useEffect(() => {
    if (badgeNumber) {
      saveBadgeNumberToLocalStorage(badgeNumber);
    }
  }, [badgeNumber]);

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center tailwind-scrollbar-hide">
        <div className="flex items-center">
          <span className="mr-4">Welcome, {badgeNumber}</span>
        </div>
        <div className="flex items-center">
          <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md mr-4">
            Logout
          </button>
        </div>
      </nav>
      <div className=" h-screen flex items-center justify-center tailwind-scrollbar-hide">
        <div className="bg-gray-200 rounded-3xl shadow-lg w-[30rem] h-[] flex flex-col items-center py-5">
          <h2 className="text-2xl">Traffic Officer Panel</h2>
          <div className="p-6 flex flex-col">
            <div>
              <label className="font-bold block">Entering License Number:</label>
              <input
                type="text"
                value={enteringLicenseNumber}
                onChange={handleEnteringLicenseChange}
                className="rounded border border-solid border-slate-100 shadow-lg px-5 py-2 mb-5 w-full block"
              />
            </div>
            <div>
              <label className="font-bold block">Violation Date:</label>
              <input
                type="date"
                value={violationDate}
                onChange={handleViolationDateChange}
                max={new Date().toISOString().split('T')[0]}
                className="rounded border border-solid border-slate-100 shadow-lg px-5 py-2 mb-5 w-full block"
              />
            </div>
            <div>
              <label className="font-bold block">Violation Type:</label>
              <select value={violationType} onChange={handleViolationTypeChange} className="rounded border border-solid border-slate-100 shadow-lg px-5 py-2 mb-5 w-full block">
                <option value="GeneralOffence">General Offence (e.g., improper number plate, illegal parking, etc.)</option>
                <option value="NotObeyingAuthorities">Not obeying the orders from the Authorities/Not sharing information</option>
                <option value="WithoutValidLicense">Driving/riding without a valid Driving Licence</option>
                <option value="AfterDisqualification">Driving/riding a vehicle after disqualification</option>
                <option value="Overspeeding">Overspeeding</option>
                <option value="RashDriving">Rash/dangerous driving</option>
                <option value="UnderInfluence">Driving/riding under the influence of intoxicating substances/alcohol</option>
                <option value="UnfitState">Driving/riding in a mentally/physically unfit state</option>
                <option value="WithoutInsurance">Driving/riding a vehicle without valid motor insurance</option>
                <option value="IllegalRacing">Illegal racing and overspeeding</option>
                <option value="OversizedVehicle">Driving an oversized vehicle</option>
                <option value="AccidentRelatedOffences">Accident-related offences</option>
                <option value="WithoutRegistration">Driving/riding a vehicle without a valid Registration Certificate</option>
                <option value="WithoutPermit">Driving a vehicle without permit</option>
                <option value="UsingMobileWhileDriving">Driving/riding a vehicle while using a mobile phone</option>
                <option value="OverloadingVehicle">Overloading the vehicle</option>
                <option value="OverloadingPassengers">Overloading passengers</option>
                <option value="OverloadingTwoWheeler">Overloading a two-wheeler</option>
                <option value="NoHelmet">Not wearing a helmet while riding a two-wheeler</option>
                <option value="NoSeatbelt">Not wearing seatbelt while driving</option>
                <option value="NotGivingWay">Not giving way for emergency vehicles</option>
                <option value="JuvenileOffences">Offences committed by juveniles</option>
                <option value="UsageOfHorn">Usage of horn in Silent Zone</option>
              </select>
            </div>
            <button onClick={submitViolation} className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-2 hover:bg-blue-500">Submit</button>
          </div>
        </div>
        <img src={police} alt="" />
      </div>
    </div>
  );
};

export default TrafficOfficer;
