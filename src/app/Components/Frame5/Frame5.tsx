import React from "react";
import SystemInventoryHardware from "./SystemInventoryHardware/SystemInventoryHardware";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";

type Props = {};

const Frame5 = (props: Props) => {
  return (
    <div className="w-[1440px]  h-[1024px] top-[7062px] left-[12385px] bg-[#071410] ">
      <SidebarNavigation />
      <SystemInventoryHardware />
    </div>
  );
};
export default Frame5;
