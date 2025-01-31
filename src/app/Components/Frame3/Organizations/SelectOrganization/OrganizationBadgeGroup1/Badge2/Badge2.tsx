import React from "react";
import Badge2Arrow from "../../../../../../SVG/Badge2Arrow.svg";
import Image from "next/image";

type Props = {};

const Badge2 = (props: Props) => {
  return (
    <div className="w-[32px] h-[32px] rounded-[23px] text-lg  py-[2px] px-[10px] border border-red-50 flex gap-1">
      <Image src={Badge2Arrow} alt="Badge2Arrow" className=" " />
    </div>
  );
};
export default Badge2;
