import React from "react";
import Account from "./Account/Account";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-[280px] h-[476px]  relative  pr-[16px] pb-[32px] pl-[16px] flex flex-col gap-[24px] ">
      <Account />
    </div>
  );
};

export default Footer;
