import React from "react";
import PowerByKryptomind from "./PowerByKryptomind/PowerByKryptomind";
import TermsAndService from "./TermsAndService/TermsAndService";

type Props = {};

const Kryptomind1 = (props: Props) => {
  return (
    <div className="w-[1281px] h-[13px] absolute top-[972px] left-[80px]  flex justify-between ">
      <PowerByKryptomind />
      <TermsAndService />
    </div>
  );
};
export default Kryptomind1;
