const Router = artifacts.require("WswapV2Router02");

module.exports = function(deployer, network, addresses) {
    deployer.deploy(Router, '0xCF1CD730d7253875aeA566693A605BcEc818fd8f', '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c');
};
