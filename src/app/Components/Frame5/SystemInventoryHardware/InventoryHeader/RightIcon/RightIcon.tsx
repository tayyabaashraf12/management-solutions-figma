import Image from "next/image";
import React from "react";
import InventoryRightArrow from "../../../../../SVG/InventoryRightArrow.svg";
type Props = {};

const RightIcon = (props: Props) => {
  return (
    <Image
      className="w-[24px] h-[24px] top-[37px] left-[210px]"
      src={InventoryRightArrow}
      alt="InventoryRightArrow"
    />
  );
};
export default RightIcon;
