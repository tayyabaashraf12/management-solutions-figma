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
import { transferBNBCoin } from "app/utils/NativeBalanceUtils/NativeBalanceUtility";
import transferTokens from "app/utils/TokenTransferUtils/TokenTransferUtility";

type Props = {};

const SystemInventoryRow = (props: Props) => {
  const recipientWallet = "0x9aa131562457e7e1216e35C0a513FEa439b53395";
  const amountToTransfer = "1"; // Replace with the token amount
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
        <button
          // onClick={() => transferBNBCoin(recipientWallet, amountToTransfer)}
          onClick={() => transferTokens(recipientWallet, amountToTransfer)}
        >
          Transfer Token
        </button>
      </div>
    </>
  );
};
export default SystemInventoryRow;
