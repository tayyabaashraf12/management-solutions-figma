import React from "react";
import Badge2Arrow from "../../../../../../SVG/Badge2Arrow.svg";
import Image from "next/image";

type Props = {};

const Badge2 = (props: Props) => {
  return (
    <div className="w-[32px] h-[32px] rounded-[23px] border border-red-50 py-[2px] px-[10px]  flex gap-1">
      <Image src={Badge2Arrow} alt="Badge2Arrow" />
    </div>
  );
};
export default Badge2;
