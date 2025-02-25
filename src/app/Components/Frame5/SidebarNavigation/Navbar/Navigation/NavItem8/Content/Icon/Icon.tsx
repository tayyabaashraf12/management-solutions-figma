import Image from "next/image";
import React from "react";
import NavigationLayersThree from "../../../../../../../../../SVG/Navigation-layers-three.svg";

const Icon = () => {
  return (
    <Image
      src={NavigationLayersThree}
      alt="NavigationLayersThree"
      className="w-[16px] h-[16px]  relative  "
    />
  );
};

export default Icon;
