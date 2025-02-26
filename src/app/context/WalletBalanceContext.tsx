"use client";
import connectWalletAndFetchBalance from "app/utils/connectWalletAndFetchBalanceUtility";
import React, { createContext, useContext, useState } from "react";

interface WalletBalanceContextProps {
  UserWalletBalance: string | null;
  handleConnectWallet: () => void;
}

const WalletBalanceContext = createContext<
  WalletBalanceContextProps | undefined
>(undefined);

export const WalletBalanceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [UserWalletBalance, setUserWalletBalance] = useState<string | null>(
    null
  );

  const handleConnectWallet = async () => {
    const userBalance = await connectWalletAndFetchBalance();
    if (userBalance) {
      setUserWalletBalance(userBalance);
    }
  };

  return (
    <WalletBalanceContext.Provider
      value={{ UserWalletBalance, handleConnectWallet }}
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
