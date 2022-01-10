import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter, Greeter__factory } from "../typechain-types";

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter1: any = await ethers.getContractFactory("Greeter");
    const greeter: Greeter = await Greeter1.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
