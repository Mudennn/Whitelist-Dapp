require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url:"https://eth-rinkeby.alchemyapi.io/v2/ksSEYTnjInuKn_Wh-nwXraOAXQWKD1Tk",
      accounts: ["bf2ee9b93e957e076d8d9280d7962126a33d9c040ab32ec8c1027015db4cee8e"],
    },
  },
};

// Whitelist Contract Address: 0x006336770501e3f30c55ca3b4f65e2a5087AAFc0
