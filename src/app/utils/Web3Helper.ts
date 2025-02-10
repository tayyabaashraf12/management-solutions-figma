import Web3 from "web3";

let web3: Web3 | null = null;

const connectWallet = async () => {
  if (typeof window === "undefined" || !window.ethereum) {
    console.error("MetaMask is not detected. Please install it.");
    return;
  }
  /** web3 instance is intializing with window.ethereum object*/
  web3 = new Web3(window.ethereum);
};

connectWallet();

export default web3;

// import Web3 from "web3";

// let web3: Web3 | null = null;

// const connectWallet = async () => {
//   if (typeof window === "undefined" || !window.ethereum) {
//     console.error("MetaMask is not detected. Please install it.");
//     return;
//   }

//   try {
//     console.log("MetaMask detected. Attempting connection...");
//     web3 = new Web3(window.ethereum);

// Request wallet connection
//     const accounts = await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });
//     console.log("Wallet connected successfully:", accounts[0]);

/* Check network connection
    const networkId = await web3.eth.net.getId();
    if (networkId ) {
      console.log("Connected to BSC Testnet.");
    } else {
      console.error("Not connected to BSC Testnet. Please switch network.");
    }*/
//   } catch (error) {
//     console.error("Wallet connection failed:", error);
//   }
// };

// connectWallet();

// export default web3;
