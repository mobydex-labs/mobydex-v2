pragma solidity 0.5.6;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockToken is ERC20 {
    string public name;
    string public symbol;

    uint8 public decimals;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals
    ) public {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;

        _mint(msg.sender, 10000 * 10 ** uint256(decimals));
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
