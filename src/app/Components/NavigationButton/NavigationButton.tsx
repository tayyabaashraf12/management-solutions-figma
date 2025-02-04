"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import ArrowRight from "../../SVG/ArrowRight.svg";
import BackArrow from "../../SVG/BackArrow-3.svg";

interface NavigationButtonProps {
  nextSlug: string;
  backSlug: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  nextSlug,
  backSlug,
}) => {
  const router = useRouter();

  const handleNextNavigation = () => {
    router.push(`/screens/${nextSlug}`);
  };

  const handleBackNavigation = () => {
    router.push(`/screens/${backSlug}`);
  };

  return (
    <div className="w-[120px] h-[35px] absolute top-[900px] z-10 mx-[650px] rounded-[28px] flex justify-between items-center pt-[4px] pr-[4px] pb-[4px] pl-[20px] bg-opacity-value bg-[#2c2c2c] text-[#FFFFFF]">
      <button onClick={handleBackNavigation}>
        <Image
          src={BackArrow}
          alt="BackArrow"
          className="border relative h-5 w-5"
        />
      </button>
      <button onClick={handleNextNavigation}>
        <Image
          src={ArrowRight}
          alt="ArrowNext"
          className="border relative mr-[14px] h-5 w-5"
        />
      </button>
    </div>
  );
};

export default NavigationButton;
