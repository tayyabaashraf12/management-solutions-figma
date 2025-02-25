import Web3 from "web3";
let web3: Web3 | null = null;

const connectWallet = async (): Promise<string | null> => {
  // Check if MetaMask (or any Web3 provider) is available
  if (typeof window.ethereum === "undefined") {
    alert("Please install MetaMask or another Web3 wallet!");
    return null;
  }

  web3 = new Web3(window.ethereum);

  try {
    // Request wallet connection
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Get the connected account
    const accounts: string[] = await web3.eth.getAccounts();
    console.log("Connected User", accounts[0]);
    return accounts.length > 0 ? accounts[0] : null; // Return null if no accounts are found
  } catch (error) {
    console.error("Wallet connection failed:", error);
    return null;
  }
};

export default connectWallet;
