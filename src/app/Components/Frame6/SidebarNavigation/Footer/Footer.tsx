import React from "react";
import Navigation from "./Navigation/Navigation";
import Profile from "./Profile/Profile";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-[81px] h-[144px] pr-[16px] pb-[24px] pl-[16px] flex flex-col gap-[24px] border border-red-800">
      <Navigation />
      <Profile />
    </div>
  );
};

export default Footer;
