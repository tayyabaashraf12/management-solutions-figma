import Web3 from "web3";

let web3: Web3 | null = null;

if (typeof window !== "undefined" && window.ethereum) {
  console.log("MetaMask detected. Attempting connection...");

  try {
    // Initialize the Web3 instance
    web3 = new Web3(window.ethereum);

    // Request wallet connection
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((accounts: string[]) => {
        console.log("Wallet connected successfully:", accounts[0]);
      })
      .catch((error: any) => {
        console.error("Wallet connection failed:", error);
      });
  } catch (error) {
    console.error("Error creating Web3 instance:", error);
  }
} else {
  console.error("MetaMask is not detected. Please install it.");
}

export default web3;
