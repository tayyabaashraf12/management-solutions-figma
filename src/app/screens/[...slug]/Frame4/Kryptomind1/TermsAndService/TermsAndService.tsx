import React from "react";

type Props = {};

const TermsAndService = (props: Props) => {
  return (
    <div
      className="w-[200px] h-[13px]  top-[972px] left-[1197px] 
  font-roboto font-bold text-[12px] leading-[12.5px] text-[#59BF78]"
    >
      terms of service <span className="text-[#FFFFFF] font-bold">&</span>
      <span className="font-bold  font-roboto text-[12px] leading-[12.5px] text-[#59BF78]">
        {" "}
        privacy policies.
      </span>
    </div>
  );
};
export default TermsAndService;
