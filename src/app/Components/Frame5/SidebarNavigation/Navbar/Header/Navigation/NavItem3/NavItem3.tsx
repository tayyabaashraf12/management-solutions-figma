import React from "react";
import Content from "./Content/Content";

type Props = {};

const NavItem3 = (props: Props) => {
  return (
    <div className="w-[248px] border border-red-600 h-[40px] bg-[#263238] rounded-[6px] py-[8px] px-[12px] gap-[8px]">
      <Content />
    </div>
  );
};

export default NavItem3;
