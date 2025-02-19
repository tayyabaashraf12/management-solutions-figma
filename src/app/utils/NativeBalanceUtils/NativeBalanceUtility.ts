import Web3 from "web3";
import { connectWallet } from "../WalletUtilty";

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
/**SendTransaction can be used to send Ether/BNB Coin from one Ethereum address /BNB wallet to another.
 * This is one of the most common use cases for sendTransaction. */

/**----------------------------------------------------- */
/**When we want to perform a transaction on Binance Smart Chain (BSC) (e.g., sending tokens, interacting with a 
 * smart contract) then the network requires a small fee called gas fee.

✅ BNB is used to pay this gas fee.

Example
Imagine we want to send Vote Tokens to someone:

Our wallet has Vote Tokens ✅
Our wallet has 0 BNB ❌
👉 Transaction will fail because we don’t have BNB(Binance Coin or Native Coin or Native balance) to pay the gas fee.

Key Point
Even if we're sending tokens (not BNB itself), we still need BNB for the transaction to process.

💡 Think of BNB like fuel (petrol) for a car—without fuel, the car (our transaction) won't move. 🚗💨 */

/**------------------------------------------------- */

/**. What is Wei and Why Convert BNB to Wei?
It is the smallest unit of currency (BNB or ether) is called Wei.

In blockchain networks like Ethereum (ETH) and Binance Smart Chain (BNB), 
1 Ether (ETH) = 1 BNB = 10¹⁸ Wei

(Wei is similar to cents in USD or paisa in PKR, but much smaller (1 Wei = 0.000000000000000001 BNB) ) */

/*Why is This Necessary?
Blockchain transactions require exact precision, so they always work in Wei (the smallest unit).
If we send 0.03 BNB without converting to Wei, Web3 might misinterpret the value or cause decimal precision errors.*/
