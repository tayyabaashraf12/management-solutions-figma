import React from "react";
import ProfileImage from "./ProfileImage/ProfileImage";
import PlayButton from "./PlayButton/PlayButton";

type Props = {};

const Container2 = (props: Props) => {
  return (
    <div className="w-[216px] h-[136px] rounded-md border-2 relative top-1">
      <ProfileImage />
      <PlayButton />
    </div>
  );
};

export default Container2;
