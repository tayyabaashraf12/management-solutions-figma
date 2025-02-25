import React, { useState } from "react";

type Props = {};
const API_KEY = process.env.NEXT_API_KEY; //  BscScan API key

const useWalletForm2Helper = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to fetch wallet transaction history
  const fetchWalletHistory = async () => {
    if (!walletAddress) {
      setError("Please enter a wallet address");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api-testnet.bscscan.com/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.status === "1") {
        setTransactions(data.result);
      } else {
        setError("No transactions found or invalid address");
        setTransactions([]);
      }
    } catch (err) {
      setError("Error fetching wallet history");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    walletAddress,
    setWalletAddress,
    transactions,
    loading,
    error,
    fetchWalletHistory,
  };
};

export default useWalletForm2Helper;
