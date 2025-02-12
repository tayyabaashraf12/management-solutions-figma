import Web3 from "web3";
import voteContractInstance from "../VoteContractHelper";
import { connectWallet } from "../WalletUtilty";
import web3 from "../Web3Helper";

const transferTokens = async (recipientAddress: string, amount: string) => {
  if (!web3) {
    console.error("Web3 is not initialized. Please connect your wallet.");
    return;
  }
  if (!recipientAddress || !amount || parseFloat(amount) <= 0) {
    alert(
      "Please provide a valid recipient address and a positive token amount."
    );
    return;
  }

  try {
    const userAddress = await connectWallet();

    // Convert token amount to Wei
    const parsedAmount = web3.utils.toWei(amount, "ether");

    const gasLimit = await voteContractInstance.methods
      .transfer(recipientAddress, parsedAmount)
      .estimateGas({ from: userAddress as string });
    const gasPrice = await web3.eth.getGasPrice();
    console.log(
      `Current Gas Price: ${Web3.utils.fromWei(gasPrice, "gwei")} Gwei`
    );

    // Explicitly convert types for send options
    const tx = await voteContractInstance.methods
      .transfer(recipientAddress, parsedAmount)
      .send({
        from: userAddress as string,
        gas: gasLimit.toString(), // Ensure it's a string
        gasPrice: gasPrice.toString(), // Convert to string
      });

    console.log("Transfer successful:", tx);
    alert(`Transfer successful: ${tx.transactionHash}`);
  } catch (error) {
    console.error("Transfer failed:", error);
  }
};

export default transferTokens;
