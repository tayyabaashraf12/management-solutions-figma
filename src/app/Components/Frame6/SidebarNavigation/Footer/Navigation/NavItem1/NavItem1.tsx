import React from "react";
import Icon from "./Icon/Icon";

type Props = {};

const NavItem1 = (props: Props) => {
  return (
    <div className="w-[48px] border border-red-600 h-[48px] rounded-[6px] p-3 bg-[#FFFFFF00] gap-[8px]">
      <Icon />
    </div>
  );
};

export default NavItem1;
