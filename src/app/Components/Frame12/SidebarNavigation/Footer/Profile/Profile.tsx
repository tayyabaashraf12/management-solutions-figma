import Image from "next/image";
import React from "react";
import FooterProfileImage from "../../../../../SVG/Profile.svg";

type Props = {};

const Profile = (props: Props) => {
  return (
    <Image
      src={FooterProfileImage}
      alt="FooterProfileImage"
      className="w-[48px] h-[48px]  relative "
    />
  );
};

export default Profile;
