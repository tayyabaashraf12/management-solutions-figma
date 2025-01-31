import Image from "next/image";
import React from "react";
import PlusIcon2 from "../../../../../SVG/PlusIcon.svg";

type Props = {};

const PlusIcon = (props: Props) => {
  return (
    <Image
      src={PlusIcon2}
      alt="NavbarOrderIcon"
      className="w-[20px] h-[20px]  relative left-7"
    />
  );
};

export default PlusIcon;
