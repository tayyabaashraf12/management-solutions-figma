// app/utils/authenticationUtils.ts
import web3 from "app/utils/Web3Helper";

// Now the function accepts the `router` as an argument
export const handleAuthentication = async (userEmail: string, router: any) => {
  if (!web3) {
    return alert(
      "Web3 is not available. Please ensure the wallet is connected."
    );
  }

  try {
    const accounts = await web3.eth.requestAccounts();
    if (accounts.length === 0) {
      return alert("Please connect your wallet.");
    }

    if (!userEmail) {
      return alert("Please enter a valid email.");
    }

    router.push(`/screens/frame4`); // Navigate to frame4 page
  } catch (error) {
    console.error("Error connecting wallet:", error);
    alert("Wallet connection failed.");
  }
};
