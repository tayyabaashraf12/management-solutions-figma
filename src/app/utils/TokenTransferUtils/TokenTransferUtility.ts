import Web3 from "web3";
import connectWallet from "../WalletUtilty";
import busdContractInstance from "../busdContractHelper";

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
  } catch (error) {
    console.error("Transaction Failed:", error);
  }
};

export default sendBUSD;
