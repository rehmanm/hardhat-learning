//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract LoanStruct {

    enum LoanStatus {Pending, Created, Funded, Finished, Defaulted }
    struct LoanData {
        address borrower;
        address lender;
        uint256 amount;
        LoanStatus status; //LoanStatus Stored, default value: Pending or 0;
    }
}