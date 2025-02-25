"use client";
import React from "react";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import { WalletBalanceProvider } from "app/context/WalletBalanceContext";
import WalletDetails from "./WalletDetails/WalletDetails";

const Frame13 = () => {
  return (
    <WalletBalanceProvider>
      <div className="w-[1440px] h-[1024px] top-[7062px] left-[12385px] bg-[#071410]">
        <SidebarNavigation />
        <WalletDetails />
      </div>
    </WalletBalanceProvider>
  );
};

export default Frame13;
