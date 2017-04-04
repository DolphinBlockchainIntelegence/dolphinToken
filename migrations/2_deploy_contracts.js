
const PresaleToken = artifacts.require("./PresaleToken.sol");

module.exports = function(deployer) {
  deployer.deploy(PresaleToken,'0x00A82827aBe792Bf0C126cf7f83a5E10F2869288');
  
};
