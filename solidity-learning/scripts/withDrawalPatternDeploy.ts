// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import {
  WithdrawlPatternTesting,
  WithDrawerWithoutReceiveFunction,
  WithDrawerWithReceiveFunction,
  WithDrawalDemoBySelf,
} from "../typechain-types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const [owner, addr1, addr2] = await ethers.getSigners();

  const withdrawlPatternTesting: any = await ethers.getContractFactory(
    "WithdrawlPatternTesting"
  );
  const withdrawlPatternTest: WithdrawlPatternTesting =
    await withdrawlPatternTesting.deploy();

  await withdrawlPatternTest.deployed();

  const withDrawerWithoutReceiveFunction: any = await ethers.getContractFactory(
    "WithDrawerWithoutReceiveFunction"
  );
  const withDrawerWithoutReceiveFunctionTest: WithDrawerWithoutReceiveFunction =
    await withDrawerWithoutReceiveFunction.deploy();

  await withDrawerWithoutReceiveFunctionTest.deployed();

  /*
  //This will fail because there is no fallback function
  await withdrawlPatternTest.setAddress(
    withDrawerWithoutReceiveFunctionTest.address
  );

  const tx1 = await withdrawlPatternTest
    .connect(addr2)
    .becomeRichest({ value: ethers.utils.parseEther("1") });

  console.log(tx1);
  */

  const withDrawerWithReceiveFunction: any = await ethers.getContractFactory(
    "WithDrawerWithReceiveFunction"
  );
  const withDrawerWithReceiveFunctionTest: WithDrawerWithReceiveFunction =
    await withDrawerWithReceiveFunction.deploy();

  await withDrawerWithReceiveFunctionTest.deployed();

  //This will not fail because there is a fallback function
  console.log(withDrawerWithReceiveFunctionTest.address);
  await withdrawlPatternTest.setAddress(
    withDrawerWithReceiveFunctionTest.address
  );

  const tx2 = await withdrawlPatternTest
    .connect(addr2)
    .becomeRichest({ value: ethers.utils.parseEther("1") });

  console.log(tx2);
  //Need to find solution for gas error when try to acces msg.value in receive function

  //WithDrawalDemoBySelf

  const withDrawalDemoBySelf: any = await ethers.getContractFactory(
    "WithDrawalDemoBySelf"
  );
  const withDrawalDemoBySelfTest: WithDrawalDemoBySelf =
    await withDrawalDemoBySelf.deploy();

  await withDrawalDemoBySelfTest.deployed();

  const tx3 = await withdrawlPatternTest
    .connect(addr2)
    .becomeRichestWithPattern({ value: ethers.utils.parseEther("1") });

  const withDrawTransaction = await withDrawalDemoBySelfTest.getFunds(
    withdrawlPatternTest.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
