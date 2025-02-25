"use client";
import React, { createContext, useContext, useState } from "react";
import connectWallet from "app/utils/WalletUtilty";

interface WalletBalanceContextProps {
  walletTokenBalance: string | null;
  handleConnectWallet: () => void;
}

const WalletBalanceContext = createContext<
  WalletBalanceContextProps | undefined
>(undefined);

export const WalletBalanceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [walletTokenBalance, setWalletTokenBalance] = useState<string | null>(
    null
  );

  const handleConnectWallet = async () => {
    const tokenBalance = await connectWallet();
    if (tokenBalance) {
      setWalletTokenBalance(tokenBalance);
    }
  };

  return (
    <WalletBalanceContext.Provider
      value={{ walletTokenBalance, handleConnectWallet }}
    >
      {children}
    </WalletBalanceContext.Provider>
  );
};

// Custom Hook to use the WalletBalanceContext
export const useWalletBalance = () => {
  const context = useContext(WalletBalanceContext);
  if (!context) {
    throw new Error(
      "useWalletBalance must be used within a WalletBalanceProvider"
    );
  }
  return context;
};
