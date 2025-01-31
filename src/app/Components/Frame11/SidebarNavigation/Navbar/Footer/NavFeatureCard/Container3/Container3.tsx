import React from "react";
import Text1 from "./Text1/Text1";
import Text from "./Text/Text";

type Props = {};

// Actions
const Container3 = (props: Props) => {
  return (
    <div className="w-[159px] h-[20px] flex gap-3 py-3">
      <Text />
      <Text1 />
    </div>
  );
};

export default Container3;
