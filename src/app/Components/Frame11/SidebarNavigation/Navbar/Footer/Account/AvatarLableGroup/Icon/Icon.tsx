import Image from "next/image";
import React from "react";
import AvatarIcon from "../../../../../../../../SVG/AvatarIcon.svg";

type Props = {};

const Icon = (props: Props) => {
  return (
    <Image src={AvatarIcon} alt="AvatarIcon" className="w-[40px] h-[40px]" />
  );
};

export default Icon;
