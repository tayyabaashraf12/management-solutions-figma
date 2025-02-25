"use client";
import React from "react";

import { useWalletBalance } from "app/context/WalletBalanceContext";
import WalletForm from "./WalletForm/WalletForm";
import WalletForm2 from "./WalletForm2/WalletForm2";

const WalletDetails = () => {
  const { walletTokenBalance } = useWalletBalance();

  return (
    <div className="w-[975px] absolute h-[1000px] top-[32px] left-[385px] rounded-[24px] bg-[#FFFFFF]">
      <WalletForm Balance={walletTokenBalance} />
      <WalletForm2 />
    </div>
  );
};

export default WalletDetails;
