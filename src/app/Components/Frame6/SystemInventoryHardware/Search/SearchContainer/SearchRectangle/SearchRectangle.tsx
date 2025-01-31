import React from "react";
import Icon from "./Icon/Icon";
import Text from "./Text/Text";

type Props = {};

const SearchRectangle = (props: Props) => {
  return (
    <div className="w-[217.28px] h-[40px] flex items-center gap-3  text-[#FFFFFF]">
      <Icon />
      <Text />
    </div>
  );
};
export default SearchRectangle;
