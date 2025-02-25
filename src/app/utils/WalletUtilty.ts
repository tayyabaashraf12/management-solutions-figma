import Web3 from "web3";
import { getBUSDTokenBalance } from "./busdTokenBalanceUtils/TokenBalanceUtility";
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
    const Balance = await getBUSDTokenBalance(accounts[0]);
    console.log("Connected User Token Balance", Balance);
    return accounts.length > 0 ? Balance : null; // Return null if no accounts are found
  } catch (error) {
    console.error("Wallet connection failed:", error);
    return null;
  }
};

export default connectWallet;

/* Check the connected network*/
/*const chainId = await web3.eth.getChainId();
    console.log("Connected Chain ID:", chainId);
    console.log(accounts[0]);/*

/**I implemented Wallet connection functionality here so that I can reuse it anywhere instead of writing in each function
 * again and again
 */
