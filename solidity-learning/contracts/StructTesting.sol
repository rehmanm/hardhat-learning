//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract StructTest {

    enum FundingRounds {
        SEED,
        PRIVATE,
        PUBLIC
    }
    struct FundingRoundDetails {
        uint256 fundingRequired;
        FundingRounds round;
    }

    FundingRoundDetails[] public allRounds;

    function addFundingRounds() public {
        FundingRoundDetails memory details1 = FundingRoundDetails(10000, FundingRounds.SEED);
        FundingRoundDetails memory details2 = FundingRoundDetails(10000, FundingRounds.PRIVATE);
        FundingRoundDetails memory details3 = FundingRoundDetails(10000, FundingRounds.PUBLIC);

        allRounds.push(details1);
        allRounds.push(details2);
        allRounds.push(details3);
        
    }

}