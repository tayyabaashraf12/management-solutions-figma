import { useEffect, useState } from "react";
import { getUserBalance } from "./BalanceUtils";
import connectWallet from "./WalletUtilty";

const useUserBalance = () => {
  const [tokenBalance, setBalance] = useState<string | null>(null);

  const fetchBalance = async () => {
    /**connectedUserAccount is actually the wallet address of connected user in metamask */
    const connectedUserAccount = await connectWallet();
    if (!connectedUserAccount) return;

    try {
      const fetchedVoteTokenBalance = await getUserBalance(
        connectedUserAccount
      );
      console.log("fetched Vote Token Balance:", fetchedVoteTokenBalance);

      if (fetchedVoteTokenBalance) {
        setBalance(fetchedVoteTokenBalance);
      } else {
        alert("Failed to fetch balance.");
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return tokenBalance;
};

export default useUserBalance;
