// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { FunctionTesting } from "../typechain-types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const [owner, addr1, addr2] = await ethers.getSigners();
  const functionTesting: any = await ethers.getContractFactory(
    "FunctionTesting"
  );
  const functionTest: FunctionTesting = await functionTesting.deploy();

  await functionTest.deployed();

  const checkPureFunction = await functionTest.checkPureFunction(5);
  console.log(checkPureFunction.toString());

  const checkViewFunction = await functionTest.checkViewFunction();
  console.log(checkViewFunction.toString());

  const checkPureFunctionMultiValueReturn =
    await functionTest.checkPureFunctionMultiValueReturn(5);
  console.log(checkPureFunctionMultiValueReturn.toString());

  const checkPureFunctionMultiValueReturnWithParam =
    await functionTest.checkPureFunctionMultiValueReturnWithParam(5);
  console.log(checkPureFunctionMultiValueReturnWithParam.toString());

  const checkPureFunctionMultiValueReturnWithParamWithModifierUpto50 =
    await functionTest.checkPureFunctionMultiValueReturnWithParamWithModifier(
      5
    );
  console.log(
    checkPureFunctionMultiValueReturnWithParamWithModifierUpto50.toString()
  );

  const checkPureFunctionMultiValueReturnWithParamWithModifierabove50 =
    await functionTest.checkPureFunctionMultiValueReturnWithParamWithModifier(
      51
    );

  console.log(
    checkPureFunctionMultiValueReturnWithParamWithModifierabove50.toString()
  );

  console.log("Owner Address:", await owner.address);
  console.log("Owner Address:", await functionTest.owner());
  console.log("Treasure Address:", await functionTest.treasurerAddress());

  await functionTest.updateTreasuryAddress(addr1.address);
  console.log("Owner Address:", await functionTest.owner());
  console.log("Treasure Address:", await functionTest.treasurerAddress());

  // // Error as caller is different than owner
  // await functionTest
  //   .connect(addr1.address)
  //   .updateTreasuryAddress(addr1.address);
  // console.log("Owner Address:", await functionTest.owner());
  // console.log("Treasure Address:", await functionTest.treasurerAddress());

  console.log("Current Cost:", await functionTest.currentCost());
  await functionTest.updateCost(await ethers.utils.parseEther("5"));
  console.log("Current Cost:", await functionTest.currentCost());

  //Fail
  await functionTest.updateCost(await ethers.utils.parseEther("5"));
  console.log("Current Cost:", await functionTest.currentCost());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
