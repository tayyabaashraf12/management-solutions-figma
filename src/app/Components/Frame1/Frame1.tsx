import React from "react";
import FrameLogosContainer from "./FrameLogosContainer/FrameLogosContainer";
import TextContainer from "./TextContainer/TextContainer";

type Props = {};

const Frame1 = (props: Props) => {
  return (
    <div className="w-[1440px] h-[1024px]  top-[7062px] left-[6001px]  bg-[#071410]">
      <FrameLogosContainer />
      <TextContainer />
    </div>
  );
};

export default Frame1;
