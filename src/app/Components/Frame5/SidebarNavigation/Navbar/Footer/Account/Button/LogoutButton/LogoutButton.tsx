import Image from "next/image";
import React from "react";
import LogOutIcon from "../../../../../../../../SVG/LogoutButton.svg";
type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <Image
      src={LogOutIcon}
      alt="LogOutIcon"
      className="w-[36px] h-[36px] rounded-[8px]  border border-blue-950 absolute"
    />
  );
};

export default LogoutButton;
