import Image from "next/image";
import React from "react";
import PlayButtonIcon from "../../../../../../../../SVG/PlayButton.svg";

type Props = {};

const PlayButton = (props: Props) => {
  return (
    <Image
      src={PlayButtonIcon}
      alt="PlayButtonIcon"
      className="w-[48px] h-[48px] top-[44px] left-[84px] absolute"
    />
  );
};

export default PlayButton;
