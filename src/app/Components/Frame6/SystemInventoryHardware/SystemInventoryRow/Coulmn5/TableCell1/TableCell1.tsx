import React from "react";
import Action from "./Action/Action";

type Props = {};

const TableCell1 = (props: Props) => {
  return (
    <div className="w-[163px] h-[72px] border-[#EAECF0]  border-r-[1px] border-b-[1px]  py-[16px] px-[24px] flex justify-center items-center  ">
      <Action />
    </div>
  );
};
export default TableCell1;
