import React from "react";
import Welcome from "./Welcome/Welcome";
import BadgeGroup from "./BadgeGroup/BadgeGroup";

import Google from "./Google/Google";
import ManagementSolutions from "./ManagementSolutions/ManagementSolutions";

type Props = {};

const Frame2 = (props: Props) => {
  return (
    <div className="w-[1440px] h-[1024px]  bg-[#071410] relative">
      <Welcome />
      <BadgeGroup />
      <Google />
      <ManagementSolutions />
    </div>
  );
};

export default Frame2;

//here I am using top-[2px] property temporarily
