import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableCell1 from "./TableCell1/TableCell1";

type Props = {};

const Coulmn6 = (props: Props) => {
  return (
    <div className="w-[273px] h-[188px] top-[167px] left-[28px] ">
      <TableHeader />
      <TableCell1 />
      {/* <TableCell2 /> */}
    </div>
  );
};
export default Coulmn6;
