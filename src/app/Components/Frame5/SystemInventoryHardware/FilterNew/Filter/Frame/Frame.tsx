import React from "react";
import FilterText from "./FilterText/FilterText";
import FilterIcon from "./FilterIcon/FilterIcon";

type Props = {};

const Frame = (props: Props) => {
  return (
    <div className="w-[72px] h-[21px] flex gap-[16px] border border-red-500">
      <FilterText />
      <FilterIcon />
    </div>
  );
};
export default Frame;
