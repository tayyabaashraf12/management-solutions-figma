import React from "react";

import NavItem3 from "./NavItem3/NavItem3";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="w-[280px] h-[348px] px-[16px] relative top-12  flex flex-col gap-[4px]  ">
      <NavItem3 />
    </div>
  );
};

export default Navigation;
