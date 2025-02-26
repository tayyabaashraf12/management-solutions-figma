import web3 from "app/utils/Web3Helper";
import { getUserBalance } from "app/utils/BalanceUtils";
import { NextRouter } from "next/router";

export const handleAuthentication = async (
  userEmail: string,
  router: NextRouter
) => {
  if (!window.ethereum) {
    alert("MetaMask is not installed. Please install it to continue.");
    return;
  }

  try {
    const accounts = (await window.ethereum.request({
      method: "eth_requestAccounts",
    })) as string[] | undefined;

    if (!accounts || accounts.length === 0) {
      alert("Please connect your wallet.");
      return;
    }

    const userWalletAddress: string = accounts[0]; // Ensuring the type is string
    console.log("Wallet connected successfully:", userWalletAddress);

    if (!userEmail) {
      alert("Email is required.");
      return;
    }

    // Fetch user balance and navigate upon successful balance retrieval
    const userBalance = await getUserBalance(userWalletAddress);
    if (userBalance !== null) {
      router.push(`/screens/frame4`);
    } else {
      alert("Unable to fetch user balance. Please try again.");
    }
  } catch (error) {
    console.error("Wallet connection or authentication failed:", error);
  }
};
