import React from "react";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import SystemInventoryHardware from "./SystemInventoryHardware/SystemInventoryHardware";

type Props = {};

const Frame11 = (props: Props) => {
  return (
    <div className="w-[1440px]  h-[1024px] top-[8344px] left-[12385px] bg-[#A21A36] ">
      <SidebarNavigation />
      <SystemInventoryHardware />
    </div>
  );
};
export default Frame11;
