//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract FunctionTesting {

    address public owner;
    address public treasurerAddress;
    uint256 public counter;
    constructor() {
        owner = msg.sender;
    }

    modifier ownerOnly() {
        require(msg.sender == owner, "Only Owner Can Called");
        _;
    }

    uint256 public currentCost;

    modifier changeCost(uint256 _amount) {
        require(currentCost != _amount, "Cost should be different");
        _;
    }

    function updateTreasuryAddress(address newAddress) public ownerOnly {
        treasurerAddress = newAddress;
    }

    function updateCost(uint256 amount) public changeCost(amount) {
        currentCost = amount;
        counter++;
    }

    function checkPureFunction(uint256 n) public pure returns (uint256) {
        // not accessing state variable
        return n;
    }
 
    function checkViewFunction() public view returns(uint256) {
        // accessing state variable
        return counter;
    }

    function checkPureFunctionMultiValueReturn(uint256 n) public pure returns (uint256, uint256) {
        // not accessing state variable
        return (n, n*n);
    }

    function checkPureFunctionMultiValueReturnWithParam(uint256 n) public pure returns (uint256 number, uint256 square) {
        // not accessing state variable
        number = n;
        square = number * number;
    }

    modifier upto50(uint256 value) {
        require(value <= 50, "Number should be less than or equal to 50");
        _;
    }

    function checkPureFunctionMultiValueReturnWithParamWithModifier(uint256 n) public upto50(n) returns (uint256 number, uint256 square) {
        // not accessing state variable
        number = n;
        square = number * number;
    }


    

}