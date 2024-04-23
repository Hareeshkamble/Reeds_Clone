import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Topbar() {
  const [text, setText] = useState("FREE Standard Shipping & Easy Returns");
  const [slideDirection, setSlideDirection] = useState("left");

  const handleNextClick = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setText("Make it Yours with Monthly payments Learn more.");
      setSlideDirection("left");
    }, 300);
  };

  const handlePreviousClick = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setText("Free Standard Shipping & Easy Returns");
      setSlideDirection("right");
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bar p-2 text-center bg-[#24414f] text-white flex items-center justify-center relative overflow-hidden min-h-[25px] lg:min-h-[30px] text-[12px] lg:text-[14px]">
      <button
        className="bar-left-button hover:text-gray-600 hidden lg:flex"
        onClick={handlePreviousClick}>
        <ArrowBackIosIcon fontSize="small" />
      </button>
      <div className=" px-5 lg:px-20"> {text} </div>
      <button
        className="bar-right-button hover:text-gray-600 hidden lg:flex"
        onClick={handleNextClick}>
        <ArrowForwardIosIcon fontSize="small" />
      </button>
    </div>
  );
}
