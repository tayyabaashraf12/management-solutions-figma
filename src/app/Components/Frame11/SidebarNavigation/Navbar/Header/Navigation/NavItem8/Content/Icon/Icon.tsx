import Image from "next/image";
import React from "react";
import NavigationLayersThree from "../../../../../../../../../SVG/layers-three-1.svg";

type Props = {};

const Icon = (props: Props) => {
  return (
    <Image
      src={NavigationLayersThree}
      alt="NavigationLayersThree"
      className="w-[16px] h-[16px]  relative  "
    />
  );
};

export default Icon;
