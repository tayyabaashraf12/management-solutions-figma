import Image from "next/image";
import React from "react";
import NameTableHeader from "../../../../../../SVG/Tableheader1.svg";
import TextAndSupportingText from "./TextAndSupportingText/TextAndSupportingText";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <div className="w-[273px] h-[44px] border rounded-tl-[12px] border-[#EAECF0] px-[24px] py-[12px] flex gap-[12px bg-[#F9FAFB]">
      <TextAndSupportingText />
    </div>
  );
};
export default TableHeader;
