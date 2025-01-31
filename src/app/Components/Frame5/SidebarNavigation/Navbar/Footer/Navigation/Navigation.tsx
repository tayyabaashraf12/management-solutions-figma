import React from "react";
import NavItem1 from "./NavItem1/NavItem1";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="w-[248px] h-[40px]  flex flex-col gap-[4px]  ">
      <NavItem1 />
    </div>
  );
};

export default Navigation;
