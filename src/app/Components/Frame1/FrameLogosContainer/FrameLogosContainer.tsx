import React from "react";
import Image from "next/image"; // Import the next/image component
import Frame1Rectangles from "app/SVG/Frame1Rectangles.svg";
import Frame1NoiseTexture from "app/SVG/Frame1 Noise & Texture.svg";

type Props = {};

const FrameLogosContainer = (props: Props) => {
  return (
    <div className="w-[65.59px] h-[70px] absolute flex gap-5 top-[461px] left-[687px]">
      <Image
        className=" w-[65.59px] h-[70px] border "
        src={Frame1Rectangles}
        alt="Sidebar1Rectangles"
      />
      {/* <Image
        className=" w-[101.53px] h-[70px]  top-[-22.07px] left-[121.29px] border "
        src={Frame1NoiseTexture}
        alt="Sidebar1Noise&Texture"
      /> */}
    </div>
  );
};

export default FrameLogosContainer;
