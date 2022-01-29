//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract EnumTest {

    enum FreshJuiceSize {SMALL, MEDIUM, LARGE, EXTRALARGE}  

    FreshJuiceSize choice;

    FreshJuiceSize constant defaultChoice = FreshJuiceSize.MEDIUM;

    function setLarge() public {
        choice = FreshJuiceSize.LARGE;
    }
    
    function updateJuiceSize(FreshJuiceSize size) public {
        choice = size;
    }

    function getChoice() public view returns(FreshJuiceSize) {
        return choice;
    }

    function getDefaultChoice() public pure returns (FreshJuiceSize) {
        return defaultChoice;
    }

    function isExtraLarge() public view returns (bool) {
        return choice == FreshJuiceSize.EXTRALARGE;
    }

}