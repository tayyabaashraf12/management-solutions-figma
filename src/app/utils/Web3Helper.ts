import Web3 from "web3";

let web3: Web3 | null = null;

const connectWallet = async () => {
  if (typeof window === "undefined" || !window.ethereum) {
    console.error("MetaMask is not detected. Please install it.");
    return;
  }
  /** web3 instance is intializing with window.ethereum object*/
  web3 = new Web3(window.ethereum);
  return web3;
};

connectWallet();

export default web3;
/**implemented web3 instance intialization here */
