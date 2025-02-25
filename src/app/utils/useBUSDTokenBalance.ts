"use client";
import { useState } from "react";
import connectWallet from "./WalletUtilty";

const useBUSDTokenBalance = () => {
  const [walletTokenBalance, setWalletTokenBalance] = useState<string | null>(
    null
  );

  const handleConnectWallet = async () => {
    const tokenBalance = await connectWallet();
    if (tokenBalance) {
      setWalletTokenBalance(tokenBalance);
    }
  };

  return {
    handleConnectWallet,
    walletTokenBalance,
  };
};

export default useBUSDTokenBalance;
