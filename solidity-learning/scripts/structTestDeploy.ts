// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { StructTest } from "../typechain-types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const structTesting: any = await ethers.getContractFactory("StructTest");
  const structTest: StructTest = await structTesting.deploy();

  await structTest.deployed();

  await structTest.addFundingRounds();
  const round = await structTest.allRounds(2);
  console.log("Round", round);
  console.log("fundingRequired", round.fundingRequired.toNumber());
  console.log("currentRound", round.round);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
