import React from "react";
import Badge1 from "./Badge1/Badge1";
import Badge2 from "./Badge2/Badge2";
import OrganizationBadgeGroup2Text from "./OrganizationBadgeGroup2Text/OrganizationBadgeGroup2Text";

const OrganizationBadgeGroup2 = () => {
  return (
    <div className="w-[306px] h-[42px] rounded-[28px] flex justify-between p-1 bg-[#F9FAFB3B] ">
      <Badge1 />
      <OrganizationBadgeGroup2Text />
      <Badge2 />
    </div>
  );
};
export default OrganizationBadgeGroup2;
