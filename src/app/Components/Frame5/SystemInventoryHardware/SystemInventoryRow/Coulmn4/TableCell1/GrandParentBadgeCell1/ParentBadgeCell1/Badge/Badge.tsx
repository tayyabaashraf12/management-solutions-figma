import React from "react";
import BadgeText from "./BadgeText/BadgeText";

type Props = {};

const Badge = (props: Props) => {
  return (
    <div className="w-[55px] h-[22px] border rounded-[16px] py-[2px] px-[8px] border-[#00FF16]">
      <BadgeText />
    </div>
  );
};
export default Badge;
