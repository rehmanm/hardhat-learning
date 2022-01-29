//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract StringTest {

    string greet = "Hello";

    function greetPerson(string memory person) public view  returns(string memory) {
        string memory message = string(abi.encodePacked(greet, " ", person));
        return message;
    }

    // function greetPerson2(string memory person) public view  returns(string memory) {
    //     string memory message = string(bytes(greet) + bytes(person));
    //     return message;
    // }

}