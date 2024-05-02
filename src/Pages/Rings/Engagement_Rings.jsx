import React from "react";
import Filter from "../Filter/Filter";
import RingsCard from "./RingsCard";
// import ringdata from "./Data";

export default function Engagement_Rings(props) {
  let ringdata = [
    {
      id: 1,
      name: "2ct Marquise Lab Grown Diamond White Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring1.jpg",
    },
    {
      id: 2,
      name: "1ct Marquise Lab Grown Diamond White Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring2.jpg",
    },
    {
      id: 3,
      name: "3ct Oval Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 8499.99,
      imageUrl: "/Products/Rings/ring3.jpg",
    },
    {
      id: 4,
      name: "2ct Oval Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring4.jpg",
    },
    {
      id: 5,
      name: "3ct Emerald Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 8499.99,
      imageUrl: "/Products/Rings/ring5.jpg",
    },
    {
      id: 6,
      name: "Vintage Emerald Ring",
      description: "A vintage-inspired emerald ring with intricate detailing.",
      price: 450,
      imageUrl: "/Products/Rings/ring6.jpg",
    },
    {
      id: 7,
      name: "3ct Pear Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 8499.99,
      imageUrl: "/Products/Rings/ring7.jpg",
    },
    {
      id: 8,
      name: "2ct Emerald Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring8.jpg",
    },
    {
      id: 9,
      name: "2ct Pear Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring9.jpg",
    },
    {
      id: 10,
      name: "2ct Princess Lab Grown Diamond Yellow Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring10.jpg",
    },
    {
      id: 11,
      name: "1ct Princess Lab Grown Diamond Yellow Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring11.jpg",
    },
    {
      id: 12,
      name: "2ct Princess Lab Grown Diamond White Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring12.jpg",
    },
    {
      id: 13,
      name: "1ct Princess Lab Grown Diamond White Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring13.jpg",
    },
    {
      id: 14,
      name: "1ct Round Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring14.jpg",
    },
    {
      id: 15,
      name: "1ct Oval Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring15.jpg",
    },
    {
      id: 16,
      name: "1ct Emerald Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring16.jpg",
    },
    {
      id: 17,
      name: "1ct Pear Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring17.jpg",
    },
    {
      id: 18,
      name: "3ct Round Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 8499.99,
      imageUrl: "/Products/Rings/ring18.jpg",
    },
    {
      id: 19,
      name: "2ct Round Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring19.jpg",
    },
    {
      id: 20,
      name: "2ct Round Diamond Solitaire Yellow Gold Engagement Ring - Heritage Collection",
      description: "REEDS",
      price: 14499.99,
      imageUrl: "/Products/Rings/ring20.jpg",
    },
    {
      id: 21,
      name: "2ct Oval Diamond Solitaire Yellow Gold Engagement Ring - Heritage Collection",
      description: "REEDS",
      price: 14999.99,
      imageUrl: "/Products/Rings/ring21.jpg",
    },
    {
      id: 22,
      name: "1 1/2ct Oval Diamond Solitaire Yellow Gold Engagement Ring - Heritage Collection",
      description: "REEDS",
      price: 9999.99,
      imageUrl: "/Products/Rings/ring22.jpg",
    },
    {
      id: 23,
      name: "3/4ct Marquise Diamond Solitaire Yellow Gold Engagement Ring - Heritage Collection",
      description: "REEDS",
      price: 2999.99,
      imageUrl: "/Products/Rings/ring23.jpg",
    },
    {
      id: 24,
      name: "1/2ct Round Diamond Solitaire Yellow Gold Engagement Ring - Heritage Collection",
      description: "REEDS",
      price: 1699.99,
      imageUrl: "/Products/Rings/ring24.jpg",
    },
    {
      id: 25,
      name: "1ct Pear Diamond Solitaire Yellow Gold Engagement Ring - Heritage Collection",
      description: "REEDS",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring25.jpg",
    },
    {
      id: 26,
      name: "2ct Marquise Lab Grown Diamond White Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring26.jpg",
    },
    {
      id: 27,
      name: "1ct Marquise Lab Grown Diamond White Gold Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 1999.99,
      imageUrl: "/Products/Rings/ring27.jpg",
    },
    {
      id: 28,
      name: "3ct Oval Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 8499.99,
      imageUrl: "/Products/Rings/ring28.jpg",
    },
    {
      id: 29,
      name: "2ct Oval Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 4999.99,
      imageUrl: "/Products/Rings/ring29.jpg",
    },
    {
      id: 30,
      name: "3ct Emerald Lab Grown Diamond Solitaire Engagement Ring",
      description: "REEDS ECONIC",
      price: 8499.99,
      imageUrl: "/Products/Rings/ring30.jpg",
    },
  ];
  console.log(ringdata[0].imageUrl)
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
    <div className=" flex flex-row flex-wrap gap-5 lg:gap-16 p-4 items-center justify-around">
{ringdata.map((ring,index)=>{
    return <RingsCard data={ring} index={index}/>
})}
          
      </div>
   </div>
    </>
  );
}
