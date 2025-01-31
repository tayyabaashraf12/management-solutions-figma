// import React from "react";

// import Frame1 from "./Components/Frame1/Frame1";
// import Frame2 from "./Components/Frame2/Frame2";
// import Frame3 from "./Components/Frame3/Frame3";
// import Frame4 from "./Components/Frame4/Frame4";
// import Frame5 from "./Components/Frame5/Frame5";
// import Frame6 from "./Components/Frame6/Frame6";
// import Frame7 from "./Components/Frame7/Frame7";
// import Frame8 from "./Components/Frame8/Frame8";
// import Frame9 from "./Components/Frame9/Frame9";
// import Frame10 from "./Components/Frame10/Frame10";
// import Frame11 from "./Components/Frame11/Frame11";
// import Frame12 from "./Components/Frame12/Frame12";
// import Screenpage from "./screens/[...slug]/page";

// type Props = {};

// const Home = (props: Props) => {
//   return (
//     <div className="w-[1440px]">
//       <Screenpage />
//     </div>
//   );
// };

// export default Home;

"use client";

import NavigationButton from "./Components/NavigationButton/NavigationButton";
import Frame1 from "./Components/Frame1/Frame1";

const HomePage = () => {
  return (
    <>
      <Frame1 />
      {/* Static slug provided for navigating to frame2 */}
      <NavigationButton nextSlug="frame2" />
    </>
  );
};

export default HomePage;
