import Web3 from "web3";

export const getUserWalletBalance = async (
  userAddress: string | null
): Promise<string | null> => {
  try {
    if (!userAddress) {
      console.error("No wallet connected");
      return null;
    }

    const web3 = new Web3(window.ethereum);
    const balance = await web3.eth.getBalance(userAddress); // Fetch balance in Wei
    return web3.utils.fromWei(balance, "ether"); // Convert Wei to BNB
  } catch (error) {
    console.error("Error fetching user balance:", error);
    return null;
  }
};
