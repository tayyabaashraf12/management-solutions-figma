import Image from "next/image";
import React from "react";
import ActionImage from "../../../../../../../SVG/Actions.svg";

type Props = {};

const Action = (props: Props) => {
  return (
    <div className="w-[10px] h-[10px] border border-blue-600 ">
      <Image
        src={ActionImage}
        alt="Action Dots"
        className="w-[10px] h-[10px] top-[42px] left-[67.72px] text-[#000000]"
      />
    </div>
  );
};
export default Action;
