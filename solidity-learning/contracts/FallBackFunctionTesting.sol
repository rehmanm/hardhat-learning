//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract FallBackFunctionTesting {

    uint256 public countReceive;
    uint256 public countFallBack;

    mapping(address => uint256) public receiveBalance;
    mapping(address => uint256) public fallbackBalance;
    


    function addSome() public {

    }

    receive() external payable {
        countReceive++;
        receiveBalance[msg.sender] = msg.value;

    }

    fallback() external payable{
        countFallBack++;
        fallbackBalance[msg.sender] = msg.value;
        
    }

}