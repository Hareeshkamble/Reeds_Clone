import React from "react";

export default function Jewels() {
  return (
    <div className="flex flex-wrap flex-row w-full items-center px-10 justify-evenly mt-5">
      <a href="">
        <div className=" object-scale-down h-40 flex flex-col items-center">
          <img src="/lib/4.png" className="h-40" alt="" />
          <caption className="m-2">Engagement Rings</caption>
        </div>
      </a>
      <a href="">
        <div className=" object-scale-down h-40 flex flex-col items-center">
          <img src="/lib/6.png" className="h-40" alt="" />
          <caption className="m-2">Wedding</caption>
        </div>
      </a>
      <a href="">
        <div className=" object-scale-down h-40 flex flex-col items-center">
          <img src="/lib/3.png" className="h-40" alt="" />
          <caption className="m-2">Ear Rings</caption>
        </div>
      </a>
      <a href="">
        <div className=" object-scale-down h-40 flex flex-col items-center">
          <img src="/lib/5.png" className="h-40" alt="" />
          <caption className="m-2">Necklaces</caption>
        </div>
      </a>

      <a href=""> 
        <div className=" object-scale-down h-40 flex flex-col items-center">
          <img src="/lib/2.png" className="h-40" alt="" />
          <caption className="m-2">Bracelets</caption>
        </div>
      </a>

      <a href="">
        <div className=" object-scale-down h-40 flex flex-col items-center">
          <img src="/lib/1.png" className="h-40" alt="" />
          <caption className="m-2">Watches</caption>
        </div>
      </a>
    </div>
  );
}
