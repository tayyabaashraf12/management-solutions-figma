import { useState } from "react";
import sendBUSD from "app/utils/busdTokenTransferUtils/TokenTransferUtility";

const useWalletFormService = () => {
  // State to store recipient's address and token amount
  const [recipientAddress, setRecipientAddress] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  // Function to handle the token transfer
  const handleSendTokens = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientAddress || !tokenAmount) {
      alert("Please enter recipient's address and token amount.");
      return;
    }
    try {
      const txHash = await sendBUSD(recipientAddress, tokenAmount);
      if (txHash) {
        setTransactionHash(txHash); // Store transaction hash
        alert("Transaction successful! Click the link to view on BscScan.");
      }

      // Reset form fields after success
      setRecipientAddress("");
      setTokenAmount("");
    } catch (error) {
      alert("Transaction failed! Check console for details.");
      console.error("Error:", error);
    }
  };

  return {
    recipientAddress,
    setRecipientAddress,
    tokenAmount,
    setTokenAmount,
    handleSendTokens,
    transactionHash, // Return transaction hash to UI
  };
};

export default useWalletFormService;
