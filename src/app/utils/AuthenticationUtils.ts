import web3 from "app/utils/Web3Helper";
import { getUserBalance } from "app/utils/BalanceUtils";

export const handleAuthentication = async (userEmail: string, router: any) => {
  if (!web3) {
    alert("Web3 is not available. Please ensure the wab3 is installed.");
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

/**Metamask or wallet connection will occur in try block */
/**after promise resolving my metamask account  will be obtained as result that is called userAddress of wallet
 * that address will be used to access my digital assets present inside wallet such as BSC testnet and the contracts deployed on that
 */
