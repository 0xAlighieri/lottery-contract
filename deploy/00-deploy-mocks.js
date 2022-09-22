const { developmentChains } = require("../helper-hardhat-config")
const BASE_FEE = ethers.utils.parseEther("0.25") // premium. 0.25 LINK
const GASE_PRICE_LINK = 1e9 // calculated value based on the gas price of the chain.

module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GASE_PRICE_LINK]
    if (developmentChains.includes(network.name)) {
        log("local network detected! Deploying mock contracts...")
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args,
        })
        log("Mocks Deployed!")
        log("--------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
