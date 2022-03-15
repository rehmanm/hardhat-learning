//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract OverLoadingTesting {

    function getSum(uint a, uint b) public pure returns(uint) {
        return a + b;
    }
    
    function getSum(uint a, uint b, uint c) public pure returns(uint) {
        return a + b + c;
    }


}