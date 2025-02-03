import React from "react";
import TextAndIcon from "./TextAndIcon/TextAndIcon";
import Text from "./Text/Text";

type Props = {};

const Container1 = (props: Props) => {
  return (
    <div className="w-[216px] h-[64px] gap-1 ">
      <TextAndIcon />
      <Text />
    </div>
  );
};

export default Container1;
