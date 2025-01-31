import Image from "next/image";
import React from "react";
import SettingsIcon from "../../../../../../../SVG/settings-01.svg";

type Props = {};

const Icon = (props: Props) => {
  return (
    <Image
      src={SettingsIcon}
      alt="SettingsIcon"
      className="w-[24px] h-[24px]"
    />
  );
};

export default Icon;
