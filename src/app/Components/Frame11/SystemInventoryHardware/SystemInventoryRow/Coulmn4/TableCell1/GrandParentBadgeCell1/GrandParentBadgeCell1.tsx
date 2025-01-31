import React from "react";
import ParentBadgeCell1 from "./ParentBadgeCell1/ParentBadgeCell1";

type Props = {};

const GrandParentBadgeCell1 = (props: Props) => {
  return (
    <div className="w-[55px] h-[22px] flex gap-[11px]">
      <ParentBadgeCell1 />
    </div>
  );
};
export default GrandParentBadgeCell1;
