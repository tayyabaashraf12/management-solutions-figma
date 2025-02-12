import useUserBalance from "app/utils/UseUserBalance";
import useVoteTokenBalance from "app/utils/VoteTokenBalanceUtils/UseVoteTokenBalance";
import React from "react";

const TextAndSupportingText = () => {
  const voteTokenBalance = useVoteTokenBalance();

  return (
    <div className="w-[107px] h-[18px]">
      <p className="font-[Poppins] font-medium text-[12px] leading-[18px] text-[#101828]">
        {voteTokenBalance
          ? `vote Token Balance: ${voteTokenBalance}`
          : "Fetching balance..."}
      </p>
    </div>
  );
};

export default TextAndSupportingText;
