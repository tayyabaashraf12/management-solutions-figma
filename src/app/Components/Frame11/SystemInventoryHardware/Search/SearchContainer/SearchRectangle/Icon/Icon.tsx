import Image from "next/image";
import React from "react";
import SearchIcon from "../../../../../../../SVG/Search.svg";

type Props = {};

const Icon = (props: Props) => {
  return (
    <Image
      src={SearchIcon}
      alt="SearchIcon"
      className="w-[20px] h-[20px]  relative top-[2px] left-[11px]"
    />
  );
};
export default Icon;
