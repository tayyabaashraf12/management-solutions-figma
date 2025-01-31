import Image from "next/image";
import React from "react";
import NavbarOrderIcon from "../../../../../SVG/OrderIcon2.svg";

type Props = {};

const OrderIcon = (props: Props) => {
  return (
    <Image
      src={NavbarOrderIcon}
      alt="NavbarOrderIcon"
      className="w-[48px] h-[48px] rounded-[6px]
    p-[10px] gap-[8px] bg-[#FFFFFF] relative left-4"
    />
  );
};

export default OrderIcon;
