import Image from "next/image";
import React from "react";
import NameTableHeader from "../../../../../../SVG/Tableheader1.svg";
import TextAndSupportingText from "./TextAndSupportingText/TextAndSupportingText";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <div className="w-[163px] h-[44px] rounded-tr-[12px] border-t-[1px] border-r-[1px] border-b-[1px] border-[#EAECF0] px-[24px] py-[12px] flex items-center justify-center bg-[#F9FAFB]">
      <TextAndSupportingText />
    </div>
  );
};
export default TableHeader;
