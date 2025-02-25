"use client";
import React from "react";
import Form from "./Form/Form";

type Props = {
  Balance: string | null;
};

const WalletForm: React.FC<Props> = ({ Balance }) => {
  return (
    <div className="w-[920px] h-[400px] relative top-[5px] left-[28px] bg-white shadow-lg rounded-lg p-6">
      <Form Balance={Balance} />
    </div>
  );
};

export default WalletForm;
