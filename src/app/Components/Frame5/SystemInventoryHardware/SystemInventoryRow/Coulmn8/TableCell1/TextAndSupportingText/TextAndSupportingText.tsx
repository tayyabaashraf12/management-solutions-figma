import useOwner from "app/utils/OwnerUtils/UseOwner";
import React from "react";

type Props = {};

const TextAndSupportingText = (props: Props) => {
  const { owner } = useOwner();

  return (
    <div className="w-[72px] h-[18px]">
      <p className="font-[Poppins] font-medium text-[12px] leading-[18px] text-[#475467]">
        {owner ? `Owner Address: ${owner}` : "Fetching Owner Address..."}
      </p>
    </div>
  );
};
export default TextAndSupportingText;

/**he owner typically refers to the Ethereum address of the person or account that deployed or administrates the
 * smart contract */
