// PublicCheck.js
import React, { useState } from "react";
import publicPic from '../assets/public.gif'

const PublicCheck = ({ contract }) => {
  const [licenseNumber, setLicenseNumber] = useState("");
  const [violations, setViolations] = useState([]);
  const [noOfSuspended, setNoOfSuspended] = useState(0);
  

  const handleLicenseNumberChange = (e) => {
    setLicenseNumber(e.target.value);
  };

  const increaseSuspendedCounter = () => {
    setNoOfSuspended((prevCount) => prevCount + 1);
  };

  const checkViolations = async () => {
    try {
      // Call the backend API to check violations based on license number
      const response = await fetch(
        `http://localhost:3001/check-violations/${licenseNumber}`
      );
      const result = await response.json();

      if (result.success) {
        // Update state with retrieved violation details
        setViolations(result.violations);

        // Calculate total demerit points
        const totalDemeritPoints = result.violations.reduce(
          (total, violation) => total + violation.demeritPoints,
          0
        );
        // Check if total demerit points exceed 100
        if (totalDemeritPoints > 100) {
          // Trigger suspension and show penalty message
          if (noOfSuspended == 1) {
            penalty = string(abi.encodePacked("License ", licenseNumber, " suspended for 6 months"));
          } else if (noOfSuspended == 2) {
            penalty = string(abi.encodePacked("License ", licenseNumber, " suspended for 12 months"));
          } else if (noOfSuspended == 3) {
            penalty = string(abi.encodePacked("License ", licenseNumber, " suspended for 6 months and to be revoked"));
          } else if (noOfSuspended > 3) {
            penalty = string(abi.encodePacked("License ", licenseNumber, " revoked"));
          }
          alert("Your license is suspended due to exceeding 100 demerit points.");
        } else {
          alert(`Total demerit points: ${totalDemeritPoints}`);
        }
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center overflow-scroll">
      <div>
        <div className="bg-gray-200 rounded-3xl shadow-lg w-[30rem] h-[] flex flex-col items-center py-5">
          <h2 className="text-2xl">Check Violation Details</h2>
          <div className="p-6 flex flex-col">
            <label className="font-bold block">Enter License Number:</label>
            <input
              type="text"
              value={licenseNumber}
              onChange={handleLicenseNumberChange}
              className="rounded-lg border border-solid border-slate-100 shadow-lg px-5 py-2 mb-5 w-full block"
            />
            <button
              onClick={checkViolations}
              className="bg-blue-700 text-white rounded-lg mx-10 px-5 py-2 hover:bg-blue-500"
            >
              Check Violations
            </button>
          </div>
        </div>
        {/* Display Violation Details */}
        <div className="bg-gray-200 rounded-3xl shadow-lg w-[30rem] h-[] flex flex-col items-center py-5 my-3.5">
          <div className="p-6 flex flex-col justify-center items-center">
            <h2 className="text-lg mb-3">Violation Details</h2>
            <table className="table-fixed">
              <thead>
                <tr className="bg-slate-300">
                  <th className="border border-solid border-slate-400">Date</th>
                  <th className="border border-solid border-slate-400">Type</th>
                  <th className="border border-solid border-slate-400">Demerit Points</th>
                </tr>
              </thead>
              <tbody>
                {violations.map((violation, index) => (
                  <tr key={index}>
                    <td className="px-6 border border-solid border-slate-400">
                      {violation.violationDate}
                    </td>
                    <td className="px-6 border border-solid border-slate-400">
                      {" "}
                      {violation.violationType}
                    </td>
                    <td className="px-6 border border-solid border-slate-400">
                      {" "}
                      {violation.demeritPoints}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <img src={publicPic} alt="" />
      </div>
    </div>
  );
};

export default PublicCheck;
