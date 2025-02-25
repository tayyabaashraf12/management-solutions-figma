import voteContractInstance from "../VoteContractHelper";
import connectWallet from "../WalletUtilty";

const mintTokens = async () => {
  try {
    const userAddress = await connectWallet();

    const mintTx = await voteContractInstance.methods.mint(userAddress).send({
      from: userAddress as string,
    });

    console.log("Mint successful ,Dummy token has credited:", mintTx);
  } catch (error) {
    console.error("Mint failed:", error);
  }
};

export default mintTokens;
