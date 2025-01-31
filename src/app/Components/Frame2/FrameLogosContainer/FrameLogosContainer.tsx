import React from "react";
import Image from "next/image"; // Import the next/image component
import Frame1Rectangles from "app/SVG/Frame1Rectangles.svg";
import Frame1NoiseTexture from "app/SVG/Frame1 Noise & Texture.svg";

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
