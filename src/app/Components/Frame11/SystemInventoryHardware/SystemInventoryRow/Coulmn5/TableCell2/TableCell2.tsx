import React from "react";
import Action from "./Action/Action";

type Props = {};

const TableCell2 = (props: Props) => {
  return (
    <div className="w-[137px] h-[72px] border-[#EAECF0]  border-r-[1px] border-b-[1px]  py-[16px] px-[24px] flex justify-center items-center  ">
      <Action />
    </div>
  );
};
export default TableCell2;
