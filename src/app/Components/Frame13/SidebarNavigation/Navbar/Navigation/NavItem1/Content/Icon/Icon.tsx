import Image from "next/image";
import React from "react";
import NavbarHomeIcon from "../../../../../../../../SVG/home-line.svg";

type Props = {};

const Icon = (props: Props) => {
  return (
    <Image
      src={NavbarHomeIcon}
      alt="NavbarHomeIcon"
      className="w-[20px] h-[20px]"
    />
  );
};

export default Icon;
