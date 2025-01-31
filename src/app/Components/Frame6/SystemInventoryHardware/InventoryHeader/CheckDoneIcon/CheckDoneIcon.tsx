import Image from "next/image";
import React from "react";
import CheckDone from "../../../../../SVG/check-done.svg";

type Props = {};

const CheckDoneIcon = (props: Props) => {
  return <Image src={CheckDone} alt="CheckDone" className="w-20px h-[20px]" />;
};
export default CheckDoneIcon;
