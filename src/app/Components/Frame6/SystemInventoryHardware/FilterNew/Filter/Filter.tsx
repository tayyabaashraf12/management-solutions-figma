import React from "react";
import Frame from "./Frame/Frame";

type Props = {};

const Filter = (props: Props) => {
  return (
    <div className="w-[110px] h-[41px] top-[86px] left-[713px] bg-[#FFFFFF] py-[10px] px-[19px] border border-green-400 flex gap-[10] rounded-[12px]">
      <Frame />
    </div>
  );
};
export default Filter;
