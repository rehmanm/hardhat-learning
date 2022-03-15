//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WithdrawlPatternTesting { 

    address payable public richest;
    uint public mostSent;

    function setAddress(address _add) public{
        richest = payable(_add);
    }

    function becomeRichest() public payable returns (bool) {
        if (msg.value > mostSent) {
            //Insecure Practice;

            richest.transfer(msg.value);
            richest = payable(msg.sender);
            mostSent = msg.value;

            return true;
        } else {
            return false;
        }
    }

    
    mapping(address => uint) payableWithdrawals;
    function becomeRichestWithPattern() public payable returns (bool) {
        if (msg.value > mostSent) {
            payableWithdrawals[msg.sender] = msg.value;
            richest = payable(msg.sender);
            mostSent = msg.value;

            return true;
        } else {
            return false;
        }
    }

    function withDraw() public returns (bool) {
        uint amount = payableWithdrawals[msg.sender];
        payableWithdrawals[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
        return true;
    }

}

contract WithDrawerWithoutReceiveFunction {
    function demoFunction() public {
        
    }
}

contract WithDrawerWithReceiveFunction {

 
    function demoFunction() public {
        
    }

    receive() external payable {
 
    }
}

contract WithDrawalDemoBySelf {

 
    function demoFunction() public {
        
    }
    function getFunds(address addressOfContract) public {
        WithdrawlPatternTesting withdrawlPatternTesting = WithdrawlPatternTesting(addressOfContract);
        withdrawlPatternTesting.withDraw();
    }
        receive() external payable {
 
    }

}

