//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract AccountContract {

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender == owner, "Not Owner");
        _;//Rest of the function body execution
    }

    function withDraw() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}