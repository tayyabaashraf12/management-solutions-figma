import Image from "next/image";
import React from "react";
import FooterProfileImage from "../../../../../../../../SVG/ProfileImage.svg";

type Props = {};

const ProfileImage = (props: Props) => {
  return (
    <Image
      src={FooterProfileImage}
      alt="FooterProfileImage"
      className="w-[216px] h-[136px] rounded-md relative bottom-1"
    />
  );
};

export default ProfileImage;
