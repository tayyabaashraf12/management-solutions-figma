import React from "react";
import Navigation from "./Navigation/Navigation";
import Account from "./Account/Account";
import NavFeatureCard from "./NavFeatureCard/NavFeatureCard";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-[280px] h-[476px] pr-[16px] pb-[32px] pl-[16px] flex flex-col gap-[24px] border border-red-800">
      <NavFeatureCard />
      <Navigation />
      <Account />
    </div>
  );
};

export default Footer;
