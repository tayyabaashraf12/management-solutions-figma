import Image from "next/image";
import React from "react";
import ButtonCloseIcon from "../../../../../../../../../SVG/ButtonCloseX.svg";

type Props = {};

const Icon = (props: Props) => {
  return (
    <Image
      src={ButtonCloseIcon}
      alt="ButtonCloseIcon"
      className="w-[37px] h-[20px] rounded-lg border-2 "
    />
  );
};

export default Icon;
