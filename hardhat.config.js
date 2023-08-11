require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config();
require("@nomicfoundation/hardhat-foundry");

const { PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.6",
        settings: {
          evmVersion: "constantinople",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    lineaTest: {
      url: `https://rpc.goerli.linea.build/`,
      accounts: [PRIVATE_KEY],
      chainId: 59140,
    },
    bnbTestnet: {
      url: `https://data-seed-prebsc-1-s1.bnbchain.org:8545`,
      accounts: [PRIVATE_KEY],
      chainId: 97,
      gasPrice: 10000000000,
    },
  },
  etherscan: {
    apiKey: { lineaTest: ETHERSCAN_API_KEY },
    customChains: [
      {
        network: "lineaTest",
        chainId: 59140,
        urls: {
          apiURL: "https://api-testnet.lineascan.build/api",
          browserURL: "https://goerli.lineascan.build/",
        },
      },
    ],
  },
};
