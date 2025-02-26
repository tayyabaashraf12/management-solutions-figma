import React from "react";
import useWalletFormService from "../WalletFormService/useWalletFormService";
import Link from "next/link";

type Props = {
  Balance: string | null;
};

const Form: React.FC<Props> = ({ Balance }) => {
  /* useWalletFormService custom hook for WalletForm Data handling*/
  const {
    recipientAddress,
    setRecipientAddress,
    tokenAmount,
    setTokenAmount,
    handleSendTokens,
    transactionHash,
  } = useWalletFormService();
  return (
    <>
      <form className="my-4" onSubmit={handleSendTokens}>
        {/* Wallet Balance Input */}
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
            Tokens Address of receipent
          </label>
          <input
            type="text"
            placeholder="Please enter address of recipient"
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
      <div className="mt-4 text-center">
        <div className="mt-4 text-center">
          <button
            disabled={!transactionHash}
            onClick={() => {
              if (transactionHash) {
                window.open(
                  `https://testnet.bscscan.com/tx/${transactionHash}`,
                  "_blank"
                );
              }
            }}
            className={`inline-block px-4 py-2 rounded-md text-white font-bold transition ${
              transactionHash
                ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            View Transaction
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
