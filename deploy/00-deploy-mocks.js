const { developmentChains } = require("../helper-hardhat-config")

modules.export = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    if (developmentChains.includes(network.name)) {
        log("local network detected! Deploying mock contracts...")
    }
}
