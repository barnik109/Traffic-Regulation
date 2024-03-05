// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract TrafficSystem 
{
    // State variables from Contract1
    uint public demeritPoints;
    uint public fines;

    // State variables from Contract2
    uint public totalPoints;
    bool public isDriverLicenseSuspended;
    

    // State variables from Contract3
    string public penalty;


     struct Violation {
        uint256 violationDate;
        uint8 violationType;
    }

    // Mapping to store violations for each driving license number
    mapping(string => Violation[]) public violationsRegistry;

    // Function to check violations for a given driving license number
    function checkViolations(string memory drivingLicenseNumber) external view returns (Violation[] memory, bool) {
        return (violationsRegistry[drivingLicenseNumber], isDriverLicenseSuspended);
    }

    // Function to process violation (from Contract1)
    function processViolation(uint8 offenceType) external
    {
        if(offenceType==1)
        {
            demeritPoints=5;
            fines=500;
        }
        else if(offenceType==3 || offenceType==11)
        {
            demeritPoints=15;
            fines=5000;
        }
        else if(offenceType==4 || offenceType==14 || offenceType==21)
        {
            demeritPoints=20;
            fines=10000;
        }
         else if(offenceType==2 || offenceType==5||offenceType==18 || offenceType==19 || offenceType==23)
        {
            demeritPoints=10;
            fines=2000;
        }
         else if(offenceType==6 || offenceType==9)
        {
            demeritPoints=10;
            fines=3000;
        }
         else if(offenceType==7)
        {
            demeritPoints=20;
            fines=15000;
        }
        else if(offenceType==8)
        {
            demeritPoints=10;
            fines=1500;
        }
         else if(offenceType==10 || offenceType==12 || offenceType==13)
        {
            demeritPoints=15;
            fines=7000;
        }
         else if(offenceType==15)
        {
            demeritPoints=20;
            fines=50000;
        }
         else if(offenceType==16)
        {
            demeritPoints=20;
            fines=20000;
        }
         else if(offenceType==17 || offenceType==20)
        {
            demeritPoints=10;
            fines=1000;
        }
         else if(offenceType==22)
        {
            demeritPoints=20;
            fines=25000;
        }


        // Update totalPoints and check for suspension (from Contract2)
        totalPoints += demeritPoints;

        if (totalPoints >= 100) 
        {
            isDriverLicenseSuspended = true;
            totalPoints -= 100; // Resetting points after suspension
        }
    }

    // Function to assign penalty 
    function assignPenalty(string memory licenseNumber, uint noOfSuspended) external {
    if (noOfSuspended == 1) {
        penalty = string(abi.encodePacked("License ", licenseNumber, " suspended for 6 months"));
    } else if (noOfSuspended == 2) {
        penalty = string(abi.encodePacked("License ", licenseNumber, " suspended for 12 months"));
    } else if (noOfSuspended == 3) {
        penalty = string(abi.encodePacked("License ", licenseNumber, " suspended for 6 months and to be revoked"));
    } else if (noOfSuspended > 3) {
        penalty = string(abi.encodePacked("License ", licenseNumber, " revoked"));
    }
}
}