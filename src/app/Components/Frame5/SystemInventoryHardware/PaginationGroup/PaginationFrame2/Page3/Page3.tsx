import Image from "next/image";
import React from "react";
import ForwardArrow1 from "../../../../../../SVG/ForwardArrow1.svg";

type Props = {};

const Page3 = (props: Props) => {
  return (
    <div className="w-[38px] h-[38px] rounded-[12px] p-[10px] flex border border-red-950 gap-[10px] bg-[#FFFFFF]">
      <Image
        src={ForwardArrow1}
        alt="ForwardArrow1"
        className="w-[18px] h-[18px]"
      />
    </div>
  );
};
export default Page3;
