import React from "react";
import Coulmn1 from "./Coulmn1/Coulmn1";
import Coulmn2 from "./Coulmn2/Coulmn2";
import Coulmn3 from "./Coulmn3/Coulmn3";
import Coulmn4 from "./Coulmn4/Coulmn4";
import Coulmn5 from "./Coulmn5/Coulmn5";
import Coulmn6 from "./coulmn6/coulmn6";

type Props = {};

const SystemInventoryRow = (props: Props) => {
  return (
    <>
      <div className="w-[920px] h-[188px] absolute flex  top-[167px] left-[28px] ">
        <Coulmn1 />
        <Coulmn2 />
        <Coulmn3 />
        <Coulmn4 />
        <Coulmn5 />
      </div>
      <div className="w-[920px] h-[188px] absolute flex  top-[400px] left-[28px] ">
        <Coulmn6 />
        {/* <Coulmn2 />
        <Coulmn3 />
        <Coulmn4 />
        <Coulmn5 /> */}
      </div>
    </>
  );
};
export default SystemInventoryRow;
