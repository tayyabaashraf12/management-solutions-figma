"use client";
import React, { useState } from "react";
import useWalletFormHelper from "./WalletFormHelper/useWalletFormHelper";
import Link from "next/link";

type Props = {
  Balance: string | null;
};

const WalletForm: React.FC<Props> = ({ Balance }) => {
  /* Use custom hook for WalletForm Data handling*/
  const {
    recipientAddress,
    setRecipientAddress,
    tokenAmount,
    setTokenAmount,
    handleSendTokens,
    transactionHash, // Return transaction hash to UI
  } = useWalletFormHelper();

  return (
    <div className="w-[920px] h-[400px] relative top-[5px] left-[28px] bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Wallet Details
      </h2>
      <form className="my-4" onSubmit={handleSendTokens}>
        Wallet Balance Input
        <div>
          <label className="block text-sm font-roboto font-extrabold text-gray-600">
            Connected Account Wallet Balance
          </label>
          <input
            type="text"
            value={Balance ?? "Balance not available"}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
          />
        </div>
        {/* Recipient Address Input */}
        <div className="my-2">
          <label className="block text-sm font-roboto font-extrabold text-gray-600">
            Tokens Recipient's Address
          </label>
          <input
            type="text"
            placeholder="Please enter recipient's address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
          />
        </div>
        {/* Token Amount Input */}
        <div className="my-2">
          <label className="block text-sm font-roboto font-extrabold text-gray-600">
            Tokens to Send
          </label>
          <input
            type="text"
            placeholder="Please enter token amount to send"
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}
          />
        </div>
        {/* Send Button */}
        <div className="w-[300px] mx-auto">
          <button
            type="submit"
            className="w-full h-[40px] bg-[#263238] text-[#FFFFFF] rounded-[6px] py-[8px] px-[12px] gap-[8px]"
          >
            Send Tokens
          </button>
        </div>
      </form>
      {/* Always Show Link but Activate on Success */}
      <div className="mt-4 text-center">
        <Link
          href={
            transactionHash
              ? `https://testnet.bscscan.com/tx/${transactionHash}`
              : "#"
          }
          target="_blank"
          className={`inline-block px-4 py-2 rounded-md text-white font-bold transition ${
            transactionHash
              ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          View Transaction
        </Link>
      </div>
    </div>
  );
};

export default WalletForm;
