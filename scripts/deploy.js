// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Detect = await hre.ethers.getContractFactory('TrafficSystem')
  const detect = await Detect.deploy();

  await detect.waitForDeployment();

  console.log(
    `Deployed to ${detect.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x8E8d8135fcDFE2608F28461cca35eFbB856FbdaD


