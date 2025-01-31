import React from "react";
import ParentBadgeCell2 from "./ParentBadgeCell2/ParentBadgeCell2";

type Props = {};

const GrandParentBadgeCell2 = (props: Props) => {
  return (
    <div className="w-[59px] h-[22px] flex gap-[11px]">
      <ParentBadgeCell2 />
    </div>
  );
};
export default GrandParentBadgeCell2;
