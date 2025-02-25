import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FrameLogosContainer from "./FrameLogosContainer/FrameLogosContainer";
import TextContainer from "./TextContainer/TextContainer";
import Frame2 from "../Frame2";

const Frame1 = () => {
  const [showFrame2, setShowFrame2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFrame2(true);
    }, 1000); // 1000ms delay before navigation to Frame2

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showFrame2 ? (
        <motion.div
          className="w-[1440px] h-[1024px] bg-[#071410]"
          initial={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <FrameLogosContainer />
          <TextContainer />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        >
          <Frame2 />
        </motion.div>
      )}
    </>
  );
};

export default Frame1;
