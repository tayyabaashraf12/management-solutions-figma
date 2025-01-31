import React from "react";

import Text2 from "./Text2/Text2";
import Text1 from "./Text1/Text1";

type Props = {};

const Text = (props: Props) => {
  return (
    <div className="w-[137px] border border-blue-950  h-[40px]  ">
      <Text1 />
      <Text2 />
    </div>
  );
};

export default Text;
