import React from "react";
import Filter from "../Filter/Filter";
import RingsCard from "./RingsCard";
import ringdata from "./Data";

export default function Engagement_Rings(props) {

  return (
    <>
      <div className="relative overflow-hidden bg-white object-fill ">
        <img
          src="/Products/Rings/ring38.jpg"
          alt=""
          className="w-full h-auto object-fill"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:p-8 text-center md:text-lef  text-[#262b2e]">
          <h1 className="text-2xl text-black h-48 flex items-center p-5  bg-opacity-40 lg:bg-opacity-100  bg-white md:text-3xl lg:text-5xl girl">
            Engagement Rings
          </h1>
        </div>
      </div>

   <div className="flex gap-2  justify-between max-w-7xl mx-auto">
    <Filter/>
    <div className=" flex flex-row flex-wrap gap-10 p-4 items-center justify-around">
{ringdata.map((ring,index)=>{
    return <RingsCard data={ring} index={index}/>
})}
          
      </div>
   </div>
    </>
  );
}
