import React from "react";

type Props = {};

const TermsAndService = (props: Props) => {
  return (
    <div
      className="w-[210px] h-[13px]  top-[972px] left-[1197px] 
font-roboto font-bold text-[12px] leading-[12.5px] text-[#FFFFFF]"
    >
      terms of service <span className="text-[#FFFFFF] font-bold">&</span>
      <span className="font-bold  font-roboto text-[14px] leading-[12.5px] text-[#FFFFFF]">
        {" "}
        privacy policies.
      </span>
    </div>
  );
};
export default TermsAndService;
