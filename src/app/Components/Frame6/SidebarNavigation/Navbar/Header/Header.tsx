import Image from "next/image";
import React from "react";
// import OrderIcon from "./OrderIcon/OrderIcon";
// import HeaderText from "./HeaderText/HeaderText";
import RectanglesIcon from "../../../../../SVG/Frame1Rectangles.svg";

type Props = {};

const Header = (props: Props) => {
  return (
    <Image
      src={RectanglesIcon}
      alt="RectanglesIcon"
      className="w-[81px] h-[40px] px-[20px]"
    />
  );
};

export default Header;
