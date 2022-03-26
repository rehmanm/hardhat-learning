// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { OverLoadingTesting } from "../typechain-types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const [owner, addr1, addr2] = await ethers.getSigners();
  const overLoadTesting: any = await ethers.getContractFactory(
    "OverLoadingTesting"
  );
  const overLoadTest: OverLoadingTesting = await overLoadTesting.deploy();

  await overLoadTest.deployed();

  console.log(
    "two parameters sum",
    await overLoadTest["getSum(uint256,uint256)"](5, 7)
  );
  console.log(
    "three parameters sum",
    await overLoadTest["getSum(uint256,uint256,uint256)"](5, 7, 9)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
