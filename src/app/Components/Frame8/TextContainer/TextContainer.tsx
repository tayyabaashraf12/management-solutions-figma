import React from "react";
import Text1 from "./Text1/Text1";
import Text2 from "./Text2/Text2";

type Props = {};

const TextContainer = (props: Props) => {
  return (
    <div className="w-[390px] h-[14px] top-[968px] left-[80px] relative flex gap-1  border-2 ">
      <Text1 />
      <Text2 />
    </div>
  );
};

export default TextContainer;
