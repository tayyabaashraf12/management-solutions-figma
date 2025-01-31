import React from "react";
import GoogleSignInText from "./GoogleSignInText/GoogleSignInText";
import SocialIcon from "../SocialIcon/SocialIcon";

type Props = {};

const Google = (props: Props) => {
  return (
    <div className="flex">
      <SocialIcon />
      <GoogleSignInText />
    </div>
  );
};

export default Google;
