// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

import { SkipContract } from "../typechain-types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const SkipContract: any = await ethers.getContractFactory("SkipContract");
  const skipContract: SkipContract = await SkipContract.deploy();

  await skipContract.deployed();

  console.log("SkipContract deployed to:", skipContract.address);
  console.log(
    "SkipContract getFirst10WithSkip1",
    await (await skipContract.getFirst10WithSkip1()).toString()
  );
  console.log(
    "SkipContract getFirst10WithSkip2",
    await (await skipContract.getFirst10WithSkip2()).toString()
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
