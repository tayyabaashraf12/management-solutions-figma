"use client";
import React, { useState } from "react";
import Link from "next/link";
import useWalletForm2Helper from "./WalletForm2Helper/useWalletForm2Helper";
import TransactionTable from "./TransactionTable/TransactionTable";

const WalletForm2: React.FC = () => {
  /**Destructuring of states and event handlers from custom hook  useWalletForm2Helper*/
  const {
    walletAddress,
    setWalletAddress,
    transactions,
    loading,
    error,
    fetchWalletHistory,
  } = useWalletForm2Helper();

  return (
    <div className="w-[920px] h-auto relative top-[30px] left-[28px] bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Wallet Transaction History
      </h2>

      {/* Input Field for Wallet Address */}
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

      {/* Button to Fetch History */}
      <button
        onClick={fetchWalletHistory}
        className="w-full h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
      >
        {loading ? "Loading..." : "Get Wallet History"}
      </button>

      {/* Show Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Use the TransactionTable component for showing Transaction history of any wallet*/}
      {walletAddress && transactions.length > 0 && (
        <TransactionTable transactions={transactions} />
      )}

      {/*Link to View Full Wallet History on BscScan
      {walletAddress && (
        <div className="mt-4 text-center">
          <Link
            href={`https://testnet.bscscan.com/address/${walletAddress}`}
            target="_blank"
            className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
          >
            View Full History on BscScan
          </Link>
        </div>
      )}*/}
    </div>
  );
};

export default WalletForm2;
