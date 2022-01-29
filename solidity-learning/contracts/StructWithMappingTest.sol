//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract StructWithMappingTest { 

    struct UserInfo {
        string name;
        uint256 age;
        mapping (address=>uint256) fundingRecieved;
    }

    mapping(address=>UserInfo) users;

    function addUser(string memory _name, uint256 _age) public {
        //UserInfo _user = UserInfo("R", 4); //Error can't initialized
        UserInfo storage userInfo = users[msg.sender];
        userInfo.name = _name;
        userInfo.age = _age;
        userInfo.fundingRecieved[msg.sender] = 0;
    }

    function provideFunding(address _user, uint256 _amount) public {
        //Someone provide the funding to user
        UserInfo storage userInfo = users[_user];
        userInfo.fundingRecieved[msg.sender] = _amount;
    }

}