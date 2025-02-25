"use client";
import React from "react";
import useWalletForm2Service from "./WalletForm2Service/useWalletForm2Service";
import TransactionHistoryTable from "./TransactionHistoryTable/TransactionHistoryTable";

const WalletForm2: React.FC = () => {
  /**Destructuring of states and event handlers from custom hook  useWalletForm2Service*/
  const {
    walletAddress,
    setWalletAddress,
    transactions,
    loading,
    error,
    fetchWalletHistory,
  } = useWalletForm2Service();

  return (
    <div className="w-[920px] h-auto relative top-[30px] left-[28px] bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Wallet Transaction History
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-bold text-gray-600">
          Enter Wallet Address
        </label>
        <input
          type="text"
          placeholder="0x1234...abcd"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
      </div>

      <button
        onClick={fetchWalletHistory}
        className="w-full h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
      >
        {loading ? "Loading..." : "Get Wallet History"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/*  TransactionHistoryTable component for showing Transaction history of any wallet*/}
      {walletAddress && transactions.length > 0 && (
        <TransactionHistoryTable transactions={transactions} />
      )}
    </div>
  );
};

export default WalletForm2;
