module.exports = function (deployer) {
    if(deployer.network === 'mainnet' || deployer.network === 'testnet') {
        return;
    }
};
