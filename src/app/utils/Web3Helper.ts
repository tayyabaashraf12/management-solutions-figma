import Web3 from "web3";

let web3: Web3 | null = null;
web3 = new Web3(window.ethereum);

if (!web3) {
  alert(
    "Web3 is not available. Please ensure MetaMask or another provider is installed."
  );
}

export default web3;
/**implemented web3 instance intialization here */
