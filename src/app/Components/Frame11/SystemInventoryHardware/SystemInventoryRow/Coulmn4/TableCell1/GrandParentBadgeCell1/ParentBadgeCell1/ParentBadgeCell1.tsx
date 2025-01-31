import React from "react";
import Badge from "./Badge/Badge";

type Props = {};

const ParentBadgeCell1 = (props: Props) => {
  return (
    <div className="w-[55px] h-[22px] flex gap-[10px]">
      <Badge />
    </div>
  );
};
export default ParentBadgeCell1;
