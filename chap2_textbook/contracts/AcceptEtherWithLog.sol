//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract AcceptEtherWithLog {

    uint public balance;

    event Deposited(address indexed _who, uint amount);

    function deposit() public payable {
        balance += msg.value;
        emit Deposited(msg.sender, msg.value);
    }
}