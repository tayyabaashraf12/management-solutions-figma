import React from "react";
import LogoutButton from "./LogoutButton/LogoutButton";

type Props = {};

const Button = (props: Props) => {
  return (
    <div className="w-[36px] h-[36px] rounded-[8px]  gap-2 border">
      <LogoutButton />
    </div>
  );
};

export default Button;
