import UseDecimals from "app/utils/DecimalUtils/UseDecimal";
import React from "react";

const TextAndSupportingText = () => {
  const Decimals = UseDecimals();

  return (
    <div className="w-[107px] h-[18px]">
      <p className="font-[Poppins] font-medium text-[12px] leading-[18px] text-[#101828]">
        {Decimals ? `Decimals: ${Decimals}` : "Fetching Decimals..."}
      </p>
    </div>
  );
};

export default TextAndSupportingText;
