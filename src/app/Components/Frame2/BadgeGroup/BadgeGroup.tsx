// import React, { useEffect } from "react";
// import Badge from "./Badge";
// import web3 from "app/utils/Web3Helper";

// type Props = {};

// const BadgeGroup = (props: Props) => {
//   useEffect(() => {
//     if (web3) {
//       console.log("Web3 instance is ready!");
//     } else {
//       console.warn("Web3 instance is not available.");
//     }
//   }, []);
//   return (
//     <div className="w-[305px] h-[42px] absolute top-[212px] left-[80px] rounded-[28px] flex justify-between items-center pt-[4px] pr-[4px] pb-[4px] pl-[20px] bg-[#F9FAFB3B]">
//       <input
//         type="text"
//         placeholder="ReeseTuttle@li.com"
//         className="font-roboto font-normal text-[14px] leading-[20px] bg-[#F9FAFB3B] text-[#D0D5DD]"
//       />
//       <Badge />
//     </div>
//   );
// };

// export default BadgeGroup;
import React, { useState } from "react";
import Badge from "./Badge";
import { useRouter } from "next/navigation";
import { handleAuthentication } from "app/utils/AuthenticationUtils";

type Props = {};

const BadgeGroup = (props: Props) => {
  const [userEmail, setUserEmail] = useState("");
  const router = useRouter(); // Get router instance from the component

  return (
    <div className="w-[305px] h-[42px] absolute top-[212px] left-[80px] rounded-[28px] flex justify-between items-center pt-[4px] pr-[4px] pb-[4px] pl-[20px] bg-[#F9FAFB3B]">
      <input
        type="email"
        placeholder="ReeseTuttle@li.com"
        className="font-roboto font-normal text-[14px] leading-[20px]  text-[#D0D5DD]
        outline-none border-none bg-transparent w-full"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <Badge onClick={() => handleAuthentication(userEmail, router)} />
    </div>
  );
};

export default BadgeGroup;
