//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CallExample {

    constructor(){

        address otherContract =  0xC4FE5518f0168DA7BbafE375Cd84d30f64CDa491;
        string memory param1 = "param-string-1";
        uint param2 = 10;


        bool result;

        bytes memory returnData;

        (result, returnData) = otherContract.call(
            abi.encodeWithSignature("methodName(string, uint256))", param1, param2)
        );

        require(result);

        (result, returnData) = otherContract.delegatecall(
            abi.encodeWithSignature("methodName(string, uint256))", param1, param2)
        );

        require(result);

    }

}