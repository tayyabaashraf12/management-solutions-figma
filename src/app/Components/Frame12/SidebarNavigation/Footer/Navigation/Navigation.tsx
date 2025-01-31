import React from "react";
import NavItem1 from "./NavItem1/NavItem1";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="w-[49px] h-[48px]  flex flex-col gap-2  ">
      <NavItem1 />
    </div>
  );
};

export default Navigation;
