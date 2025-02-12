import { getVoteTokenBalance } from "../VoteTokenBalanceUtils/TokenBalanceUtility";
import { connectWallet } from "../WalletUtilty";
import mintTokens from "./MintTokensUtility";
import transferTokens from "./TokenTransferUtility";

const performTokenOperations = async (
  recipientAddress: string,
  amount: string
) => {
  try {
    // await mintTokens();
    await transferTokens(recipientAddress, amount);
  } catch (error) {
    console.error("Token operation failed:", error);
  }
};
export default performTokenOperations;
