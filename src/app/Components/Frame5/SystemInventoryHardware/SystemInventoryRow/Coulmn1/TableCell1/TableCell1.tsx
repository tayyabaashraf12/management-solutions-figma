import React from "react";
import TextAndSupportingText from "./TextAndSupportingText/TextAndSupportingText";

type Props = {};

const TableCell1 = (props: Props) => {
  return (
    <div className="w-[273px] h-[72px] border-[#EAECF0]  border-r-[1px] border-b-[1px] border-l-[1px] py-[16px] px-[24px] flex  items-center">
      <TextAndSupportingText />
    </div>
  );
};
export default TableCell1;
