import React from "react";
import SearchRectangle from "./SearchRectangle/SearchRectangle";

type Props = {};

const SearchContainer = (props: Props) => {
  return (
    <div className="w-[217.28px] h-[40px]  gap-[10px]">
      <SearchRectangle />
    </div>
  );
};
export default SearchContainer;
