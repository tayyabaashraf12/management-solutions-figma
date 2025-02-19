import Web3 from "web3";
import voteContractInstance from "../VoteContractHelper";
import { connectWallet } from "../WalletUtilty";
import { error } from "console";

const transferTokens = async (
  recipientWalletAddress: string,
  amount: string
) => {
  const SenderWalletAddress = await connectWallet();
  console.log("Sender Wallet Address", SenderWalletAddress);
  try {
    /** web3 instance intialization*/
    const web3 = new Web3(window.ethereum);

    /**Ether currency converion to precised currency value which is wei */
    const weiAmount = web3.utils.toWei(amount, "ether");
    console.log("converted amount in wei", weiAmount);
    const balance = await web3.eth.getBalance(SenderWalletAddress as string);
    console.log("Wallet Balance in Wei:", balance);

    try {
      voteContractInstance.methods
        .transfer(recipientWalletAddress, weiAmount)
        .send({ from: SenderWalletAddress as string, gas: "500000" })
        .on("transactionHash", function (hash) {
          console.log("Transaction successful!. Hash is :", hash);
        });
    } catch (error: any) {
      console.log("............", error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// console.log("Token transfer successful:", transaction);

export default transferTokens;
