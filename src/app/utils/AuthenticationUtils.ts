import web3 from "app/utils/Web3Helper";
import { getUserBalance } from "app/utils/BalanceUtils";
import { NextRouter } from "next/router";

export const handleAuthentication = async (
  userEmail: string,
  router: NextRouter
) => {
  if (!web3) {
    alert("Web3 is not available. Please ensure the web3 is installed.");
    return;
  }
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Wallet connected successfully:", accounts[0]);

    if (!accounts.length) {
      alert("Please connect your wallet.");
      return;
    }

    if (!userEmail) {
      alert("Email is required.");
      return;
    }
    /* Fetch user balance and navigate upon successful balance retrieval*/
    const userBalance = await getUserBalance(accounts[0]);
    if (userBalance !== null) {
      router.push(`/screens/frame4`);
    } else {
      alert("Unable to fetch user balance. Please try again.");
    }
  } catch (error) {
    console.error("Wallet connection or authentication failed:", error);
  }
};
