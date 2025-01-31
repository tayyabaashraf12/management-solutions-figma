import React from "react";
import CheckDoneIcon from "./CheckDoneIcon/CheckDoneIcon";
import NewText from "./InventoryHeaderText/NewText";
import RightIcon from "./RightIcon/RightIcon";
import NewText1 from "../HardwareText";

type Props = {};

const InventoryHeader = (props: Props) => {
  return (
    <div className="flex w-[248px] absolute border border-blue-500 h-[40px] top-[27px] left-[28px] rounded-[6px] py-[8px] px-[12px] gap-[8px]">
      <CheckDoneIcon />
      <NewText />
      <RightIcon />
      {/* <NewText1 /> */}
    </div>
  );
};
export default InventoryHeader;
