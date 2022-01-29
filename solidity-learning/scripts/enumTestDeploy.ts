// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { EnumTest } from "../typechain-types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const enumTesting: any = await ethers.getContractFactory("EnumTest");
  const enumTest: EnumTest = await enumTesting.deploy();

  console.log("Juice Size", await enumTest.getChoice());

  await enumTest.updateJuiceSize(1);
  console.log("Juice Size", await enumTest.getChoice());

  await enumTest.setLarge();
  console.log("Juice Size", await enumTest.getChoice());

  console.log("Juice Size Extra Large", await enumTest.isExtraLarge());

  /*
  if sending wrong value in enum, "Transaction reverted: function was called with incorrect parameters" generated
  await enumTest.updateJuiceSize(5);
  console.log("Juice Size", await enumTest.getChoice());

  */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
