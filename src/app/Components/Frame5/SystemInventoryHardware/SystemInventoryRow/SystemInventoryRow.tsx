import React, { useState } from "react";
import Coulmn1 from "./Coulmn1/Coulmn1";
import Coulmn2 from "./Coulmn2/Coulmn2";
import Coulmn3 from "./Coulmn3/Coulmn3";
import Coulmn4 from "./Coulmn4/Coulmn4";
import Coulmn5 from "./Coulmn5/Coulmn5";
import Coulmn6 from "./coulmn6/coulmn6";
import Coulmn7 from "./coulmn7/column7";
import Coulmn8 from "./Coulmn8/Coulmn8";
import performTokenOperations from "app/utils/TokenTransferUtils/PerformTokenOperationUtility";

type Props = {};

const SystemInventoryRow = (props: Props) => {
  const [recipient, setRecipient] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  return (
    <>
      <div className="w-[920px] h-[188px] absolute flex  top-[167px] left-[28px] ">
        <Coulmn1 />
        <Coulmn2 />
        <Coulmn3 />
        <Coulmn4 />
        <Coulmn5 />
      </div>
      <div className="w-[920px] h-[188px] absolute flex  top-[400px] left-[28px] ">
        <Coulmn6 />
        <Coulmn7 />
        <Coulmn8 />
      </div>
      <div className="w-[920px] h-[188px] absolute flex  top-[600px] left-[28px] border border-red-500">
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={() => performTokenOperations(recipient, amount)}>
          Execute Token Operations
        </button>
      </div>
    </>
  );
};
export default SystemInventoryRow;
