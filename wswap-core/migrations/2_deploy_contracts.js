const Factory = artifacts.require("WswapV2Factory");

module.exports = function(deployer, network, addresses) {
    deployer.deploy(Factory, addresses[0]);
};
