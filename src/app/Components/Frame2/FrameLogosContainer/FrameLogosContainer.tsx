import React from "react";
import Image from "next/image";
import Frame1Rectangles from "app/SVG/Frame1Rectangles.svg";
type Props = {};

const FrameLogosContainer = (props: Props) => {
  return (
    <Image
      className=" w-[37.48px] h-[40px] relative top-[74px] left-[80px]  "
      src={Frame1Rectangles}
      alt="Sidebar1Rectangles"
    />
  );
};

export default FrameLogosContainer;
