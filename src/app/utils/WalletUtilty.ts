import Web3 from "web3";
let web3: Web3 | null = null;

export const connectWallet = async (): Promise<string | null> => {
  web3 = new Web3(window.ethereum);

  if (!web3) {
    alert(
      "Web3 is not available. Please ensure MetaMask or another provider is installed."
    );
    return null;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts: string[] = await web3.eth.getAccounts();
    return accounts[0]; /* Return the first connected account*/
  } catch (error) {
    console.error("Wallet connection failed:", error);
    return null;
  }
};
/* Check the connected network*/
/*const chainId = await web3.eth.getChainId();
    console.log("Connected Chain ID:", chainId);
    console.log(accounts[0]);/*

/**I implemented Wallet connection functionality here so that I can reuse it anywhere instead of writing in each function
 * again and again
 */
