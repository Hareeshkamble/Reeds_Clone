import { useState } from "react";
import React from 'react'

export default function Favorites() {
  const [isHovered, setIsHovered] = useState(false);
  const [second, setsecond] = useState(true)



  return (
    <>
     <div className='max-w-7xl mx-auto text-center text-[40px] text-[#262b2e] girls luxury '>REEDS Favorites</div>

    <div className=' max-w-7xl gap-5 px-5 py-5 flex mx-auto mt-5 flex-wrap '>
      <div className='relative girl overflow-hidden cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="">
          <img src="/lib/fav1.jpg" alt="" className='w-full hover:scale-110 transition-all hover:opacity-90 ' />

        </a>
        <div className="absolute girl bottom-0 left-0 right-0 text-left text-white p-4">
          <h1 className=" girl capitalize text-3xl">Everything Pandora</h1>
          <p className={`${isHovered ? '' : 'hidden'} girl transition-all`}>
            All you need to get styled out for spring.</p>
          <button className={`${isHovered ? "border-b-2" : "outline"} uppercase transition-all p-2 m-2`}>Find Something New</button>
        </div>
      </div>


      <div className='  flex-col flex flex-wrap gap-5'>
        <div className='items-center justify-between  flex flex-wrap'>

          <div className='relative girl overflow-hidden cursor-pointer' onMouseEnter={() => setSecond(false)} onMouseLeave={() => setSecond(true)}>
            <a href="">
              <img src="/lib/fav2.jpg" alt="" className=" border-lime-300 border hover:scale-75" />
            </a>      <div className="absolute inset-0 px-3 text-white flex flex-col justify-end items-start text-center">
              <h1 className="girl capitalize text-3xl">Eseential Studs</h1>
              <p className={`${second ? '' : 'hidden'} girl capitalize transition-all`}>The Goes-with-everything pair</p>
              <button className={`${second ? "border-b-2" : "outline"} uppercase transition-all girl p-2 m-2 hover:scale-110`}>Shop Now</button>
            </div>
          </div>
          <div className='relative girl overflow-hidden cursor-pointer' onMouseEnter={() => setSecond(false)} onMouseLeave={() => setSecond(true)}>
            <a href=""><img src="/lib/fav3.jpg" alt="" className=" img" /></a>
            <div className="absolute inset-0 px-3 text-black flex flex-col justify-end items-start text-center">
              <h1 className="girl capitalize text-3xl">Mikimoto</h1>
              <p className={`${second ? '' : 'hidden'} girl capitalize transition-all`}></p>
              <button className={`${second ? "border-b-2" : "outline"} uppercase transition-all girl p-2 m-2 border-black hover:scale-110`}>Explore Collection</button>
            </div>
          </div>


        </div>



        <div className='bg-blue-700 overflow-hidden '>
          <a href="">
            <img src="/lib/fav4.jpg" className="hover:scale-110 transition-all" alt="" />
          </a>
        </div>
      </div>

    </div>
    </>
  )
}
