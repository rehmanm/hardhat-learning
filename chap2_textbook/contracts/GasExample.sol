//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract GasExample {

    constructor(){

        address otherContract =  0xC4FE5518f0168DA7BbafE375Cd84d30f64CDa491;
        string memory param1 = "param-string-1";
        uint param2 = 10;


        bool result;

        bytes memory returnData;

        //with gas
        (result, returnData) = otherContract.call{gas: 1000}(
            abi.encodeWithSignature("methodName(string, uint256))", param1, param2)
        );

        require(result);

        (result, returnData) = otherContract.delegatecall{gas: 1000}(
            abi.encodeWithSignature("methodName(string, uint256))", param1, param2)
        );

        require(result);


        //with value
        (result, returnData) = otherContract.call{value: 1000}(
            abi.encodeWithSignature("methodName(string, uint256))", param1, param2)
        );

        require(result);
        /*
        // value not allowed for delegateCall
        (result, returnData) = otherContract.delegatecall{value: 1000}(
            abi.encodeWithSignature("methodName(string, uint256))", param1, param2)
        );

        require(result);
        */

        //with gas and value together
        (result, returnData) = otherContract.call{gas: 1000, value: 1 ether}(
            abi.encodeWithSignature("methodName(string, uint256))", param1, param2)
        );

        require(result);
    }

}