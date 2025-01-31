"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface NavigationButtonProps {
  nextSlug: string;
  buttonText?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  nextSlug,
  buttonText = "Next",
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/screens/${nextSlug}`);
  };

  return (
    <button
      className="px-4 py-2 mt-4 bg-blue-500 text-white rounded"
      onClick={handleNavigation}
    >
      {buttonText}
    </button>
  );
};

export default NavigationButton;
