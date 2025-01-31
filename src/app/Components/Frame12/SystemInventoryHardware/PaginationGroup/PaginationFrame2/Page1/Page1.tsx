import Image from "next/image";
import React from "react";
import BackArrow1 from "../../../../../../SVG/BackArrow1.svg";

type Props = {};

const Page1 = (props: Props) => {
  return (
    <div className="w-[38px] h-[38px] rounded-[12px] p-[10px] flex border border-red-950 gap-[10px] bg-[#FFFFFF]">
      <Image src={BackArrow1} alt="BackArrow1" className="w-[18px] h-[18px]" />
    </div>
  );
};
export default Page1;
