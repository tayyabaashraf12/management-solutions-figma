import { useEffect, useState } from "react";

import { getUserBalance } from "./BalanceUtils";
import { connectWallet } from "./WalletUtilty";

const useUserBalance = () => {
  const [balance, setBalance] = useState<string | null>(null);

  const fetchBalance = async () => {
    const userAddress = await connectWallet();
    if (!userAddress) return;

    try {
      const fetchedBalance = await getUserBalance(userAddress);
      console.log("Fetched Balance:", fetchedBalance);

      fetchedBalance
        ? setBalance(fetchedBalance)
        : alert("Failed to fetch balance.");
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return balance;
};

export default useUserBalance;
/**useUserBalance is a custom hook in which I implemented User Data fetching functionality from Vote Contract
 * which is deployed on BSC Testnet
 */
