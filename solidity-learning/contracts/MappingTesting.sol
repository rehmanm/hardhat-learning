//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract MappingTest {

    enum FundingRounds {
        SEED,
        PRIVATE,
        PUBLIC
    }
    struct FundingRoundDetails {
        uint256 fundingRequired;
        FundingRounds round;
    }
    mapping(uint => FundingRoundDetails) fundingRounds;
    mapping(address => FundingRoundDetails) userRounds;
    uint roundCounter;

    function addFundingRounds() public {
        FundingRoundDetails memory details1 = FundingRoundDetails(10000, FundingRounds.SEED);
        FundingRoundDetails memory details2 = FundingRoundDetails(10000, FundingRounds.PRIVATE);
        FundingRoundDetails memory details3 = FundingRoundDetails(10000, FundingRounds.PUBLIC);
        
        fundingRounds[++roundCounter] = details1;
        fundingRounds[++roundCounter] = details2;
        fundingRounds[++roundCounter] = details3;
    }

    function addRound(uint amount, FundingRounds round) public {
        FundingRoundDetails memory fundingRound = FundingRoundDetails(amount, round);
        fundingRounds[++roundCounter] = fundingRound;
        userRounds[msg.sender] = fundingRound;
    }

    function getMyRoundInfo() public view returns(FundingRoundDetails memory) {
        return userRounds[msg.sender];
    }

}