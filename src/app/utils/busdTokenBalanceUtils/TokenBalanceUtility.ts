import busdContractInstance from "../busdContractHelper";

export const getBUSDTokenBalance = async (
  userAddress: string
): Promise<string | null> => {
  try {
    const balance: unknown = await busdContractInstance.methods
      .balanceOf(userAddress)
      .call();

    if (typeof balance === "bigint" || balance instanceof BigInt) {
      return balance.toString(); // Convert BigInt to string
    }

    console.warn("Unexpected balance type:", balance);
    return null;
  } catch (error) {
    console.error("Error fetching user balance:", error);
    return null;
  }
};

/**One point of difference need to remember */

/**--------------------------------------------------------------- */
/**1. User Balance Fetching Functionality
User balance is the total Balance of native cryptocurrency (BNB, ETH, etc.) that user holds(ownes) in its  MetaMask wallet.
This typically uses method like web3.eth.getBalance(accountAddress) for fetching the total  balance. */

/**--------------------------------------------------------------- */
/**Vote Token Balance Fetching Functionality
Vote Token Balance is the balance of the Vote token within the deployed Vote contract.
This uses the balanceOf(address) method of the Vote contract, where the smart contract itself maintains the user's token balance.*/
