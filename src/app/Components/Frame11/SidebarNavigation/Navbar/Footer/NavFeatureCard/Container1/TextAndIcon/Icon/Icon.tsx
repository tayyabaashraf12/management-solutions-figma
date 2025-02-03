import Image from "next/image";
import React from "react";
import ButtonCloseIcon from "../../../../../../../../../SVG/ButtonCloseX.svg";

type Props = {};

const Icon = (props: Props) => {
  return (
    <Image
      src={ButtonCloseIcon}
      alt="ButtonCloseIcon"
      className="w-[37px] h-[23px] rounded-lg"
    />
  );
};

export default Icon;
