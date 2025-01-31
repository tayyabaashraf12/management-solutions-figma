import React from "react";
import BadgeText from "./BadgeText/BadgeText";

type Props = {};

const Badge = (props: Props) => {
  return (
    <div className="w-[59px] h-[22px] border rounded-[16px] py-[2px] px-[8px] border-[#EA4335] bg-[#FFFFFF]">
      <BadgeText />
    </div>
  );
};
export default Badge;
