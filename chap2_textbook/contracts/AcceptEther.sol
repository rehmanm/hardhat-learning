//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract AcceptEther {
    uint public balance;

    function deposit() public payable {
        balance += msg.value;
    }
}