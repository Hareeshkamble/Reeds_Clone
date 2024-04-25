import React, { useState } from 'react';

export default function SpringGifts() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='max-w-7xl flex flex-wrap items-center justify-around mx-auto'>
      <div
        className='relative object-fit overflow-hidden text-white'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/lib/gift2.jpeg"
          alt=""
          className='hover:scale-105 transition-all'
        />
        <div className='absolute gift bottom-0 left-0 z-50 p-4 transition-all'>
          <h1 className='text-4xl gift'>Spring Gifts</h1>
          <p className={`${isHovered ? '' : 'hidden'} `}>Celebrate the season's arrival with these.</p>
          <button className={`hover:border-b-2 m-2 p-1 text-[18px] ${isHovered? 'border':''}`}>Shop the Season</button>
        </div>
      </div>
      <div
        className='relative object-fit overflow-hidden text-white'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/lib/gift1.jpeg"
          alt=""
          className='hover:scale-105 transition-all'
        />
        <div className='absolute gift bottom-0 left-0 z-50 p-4 transition-all'>
          <h1 className='text-4xl gift'>For The Grads</h1>
          <p className={`${isHovered ? '' : 'hidden'} `}>Milestone Moments Deserve these</p>
          <button className={`hover:border-b-2 m-2 p-1 text-[18px] ${isHovered? 'border':''}`}>Get Gift Ideas</button>
        </div>
      </div>
  
    </div>
  );
}
