import React from "react";
import NewText from "./NewText/NewText";
import NewIcon from "./NewIcon/NewIcon";

type Props = {};

const Frame = (props: Props) => {
  return (
    <div className="w-[66.73px] h-[21px] flex gap-[16px]">
      <NewText />
      <NewIcon />
    </div>
  );
};

export default Frame;
