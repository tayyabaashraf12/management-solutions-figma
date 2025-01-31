import React from "react";
import Rectangles from "./Organizations/Rectangles/Rectangles";
import Organizations from "./Organizations/Organizations";
import Kryptomind1 from "./Kryptomind1/Kryptomind1";

type Props = {};

const Frame3 = (props: Props) => {
  return (
    <div className="w-[1440px] h-[1024px]  top-[7062px] left-[9193px] bg-[#071410] ">
      <Organizations />
      <Kryptomind1 />
    </div>
  );
};

export default Frame3;
