// import { useEffect, useState } from "react";
// import connectWallet from "../WalletUtilty";
// import { getVoteTokenBalance } from "./TokenBalanceUtility";

// const useVoteTokenBalance = () => {
//   const [balance, setBalance] = useState<string | null>(null);

//   const fetchVoteTokenBalance = async () => {
//     const userAddress = await connectWallet();
//     console.log("Connected Wallet Address:", userAddress); // Debugging

//     if (userAddress) {
//       const fetchedBalance = await getVoteTokenBalance(userAddress);
//       console.log("Fetched Balance", fetchedBalance);
//       setBalance(fetchedBalance);
//     }
//   };

//   useEffect(() => {
//     fetchVoteTokenBalance();
//   }, []);

//   return balance;
// };

// export default useVoteTokenBalance;
