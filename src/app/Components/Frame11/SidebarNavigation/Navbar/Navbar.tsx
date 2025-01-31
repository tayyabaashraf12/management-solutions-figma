import React from "react";
import Header from "./Header/Header";
import Navigation from "./Header/Navigation/Navigation";
import Footer from "./Footer/Footer";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-[280px] h-[452px] pt-[32px] flex flex-col gap-[24px] border border-red-800">
      <Header />
      <Navigation />
      <Footer />
    </div>
  );
};

export default Navbar;
