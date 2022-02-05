// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { FallBackFunctionTesting } from "../typechain-types";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  const [owner, addr1, addr2] = await ethers.getSigners();
  const fallBackFunctionTesting: any = await ethers.getContractFactory(
    "FallBackFunctionTesting"
  );
  const fallBackFunction: FallBackFunctionTesting =
    await fallBackFunctionTesting.deploy();

  await fallBackFunction.deployed();

  console.log("fallBackFunction deployed", fallBackFunction.address.toString());

  console.log("Before");

  console.log(
    "Balance of Contract",
    await ethers.provider.getBalance(fallBackFunction.address)
  );
  console.log("Receive Counter", await fallBackFunction.countReceive());
  console.log("Fallback Counter", await fallBackFunction.countFallBack());

  console.log(
    "Receive Balance",
    await fallBackFunction.receiveBalance(addr1.address)
  );
  console.log(
    "Fallback Balance",
    await fallBackFunction.fallbackBalance(addr1.address)
  );

  console.log("After Recive because of value parameter");

  await addr1.sendTransaction({
    to: fallBackFunction.address,
    value: ethers.utils.parseEther("5"),
  });

  console.log(
    "Balance of Contract",
    await ethers.provider.getBalance(fallBackFunction.address)
  );
  console.log("Receive Counter", await fallBackFunction.countReceive());
  console.log("Fallback Counter", await fallBackFunction.countFallBack());

  console.log(
    "Receive Balance",
    await fallBackFunction.receiveBalance(addr1.address)
  );
  console.log(
    "Fallback Balance",
    await fallBackFunction.fallbackBalance(addr1.address)
  );

  console.log("After Recive because of data parameter");

  await addr1.sendTransaction({
    to: fallBackFunction.address,
    value: ethers.utils.parseEther("10"),
    data: "0x1234",
  });

  console.log(
    "Balance of Contract",
    await ethers.provider.getBalance(fallBackFunction.address)
  );
  console.log("Receive Counter", await fallBackFunction.countReceive());
  console.log("Fallback Counter", await fallBackFunction.countFallBack());

  console.log(
    "Receive Balance",
    await fallBackFunction.receiveBalance(addr1.address)
  );
  console.log(
    "Fallback Balance",
    await fallBackFunction.fallbackBalance(addr1.address)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
