import Web3 from "web3";
import connectWallet from "../WalletUtilty";

export const transferBNBCoin = async (
  recipientWalletAddress: string,
  amount: number
): Promise<string | null> => {
  try {
    /** web3 instance intialization*/
    const web3 = new Web3(window.ethereum);

    const senderWalletAddress = await connectWallet();

    /**null senderWalletAddress check */
    if (!senderWalletAddress) {
      console.error("Wallet not connected.");
      return null;
    }

    /* Convert BNB to Wei*/
    const amountInWei = web3.utils.toWei(amount.toString(), "ether");

    /* Standard gasFee limit for BNB Coin transfers*/
    const gasFeeLimit = 21000;

    const tx = {
      from: senderWalletAddress,
      to: recipientWalletAddress,
      value: amountInWei,
      gas: gasFeeLimit,
    };

    /*  BNB Coin (Native Balance) transfer transaction */
    const receipt = await web3.eth.sendTransaction(tx);

    /* Convert transactionHash to a hex string if needed*/
    const txHash =
      typeof receipt.transactionHash === "string"
        ? receipt.transactionHash
        : web3.utils.bytesToHex(receipt.transactionHash);

    console.log("BNB Coin Transaction successful. Hash:", txHash);
    return txHash;
  } catch (error) {
    console.error("BNB transfer failed:", error);
    return null;
  }
};
