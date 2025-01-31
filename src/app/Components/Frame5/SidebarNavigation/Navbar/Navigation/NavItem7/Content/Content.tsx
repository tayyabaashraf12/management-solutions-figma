import React from "react";
import Icon from "./Icon/Icon";
import Text from "./Text/Text";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="w-[224px] h-[24px] flex  gap-[15px]">
      <Icon />
      <Text />
    </div>
  );
};

export default Content;
