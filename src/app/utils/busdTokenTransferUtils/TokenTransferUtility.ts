import Web3 from "web3";
import busdContractInstance from "../busdContractHelper";
import connectWallet from "../connectWallet/connectWallet";

const sendBUSD = async (recipientWalletAddress: string, amount: any) => {
  const senderWalletAddress = await connectWallet();
  console.log("Sender Wallet Address:", senderWalletAddress);
  const web3 = new Web3(window.ethereum);

  // Convert amount to the correct decimals (usually 18 for BUSD)
  const amountInWei = web3.utils.toWei(amount.toString(), "ether");

  try {
    const tx = await busdContractInstance.methods
      .transfer(recipientWalletAddress, amountInWei)
      .send({
        from: senderWalletAddress as string,
      });

    console.log("Transaction Successful:", tx);
    /* Return transaction hash*/
    return tx.transactionHash;
  } catch (error) {
    console.error("Transaction Failed:", error);
  }
};

export default sendBUSD;
