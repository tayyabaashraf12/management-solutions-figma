"use client";
import React from "react";
import { useWalletBalance } from "app/context/WalletBalanceContext";

const ButtonComponent = () => {
  const { handleConnectWallet, UserWalletBalance } = useWalletBalance();

  return (
    <button
      onClick={handleConnectWallet}
      className="w-[248px] h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] mt-10 py-[8px] px-[12px] gap-[8px]"
    >
      {UserWalletBalance ? "Wallet Connected" : "Connect Wallet"}
    </button>
  );
};

export default ButtonComponent;
