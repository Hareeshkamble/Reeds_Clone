import React from 'react';

export default function Filter() {
  return (
    <aside className='lg:block hidden  top-0 left-0 h-full w-full  border overflow-y-auto'>
      <h3 className='girls text-2xl p-3 text-center text-gray-400 '>Filter</h3>
      <ul className='flex flex-col girls gap-4 pl-3'>
        <li className='girls text-2xl border-b-2 m-2 '>Engagement Type</li>
        <li className='girls text-2xl border-b-2 m-2 '>Price</li>
        <li className='girls text-2xl border-b-2 m-2 '>Stone Type</li>
        <li className='girls text-2xl border-b-2 m-2 '>Stone Shape</li>
        <li className='girls text-2xl border-b-2 m-2 '>Stone Color</li>
        <li className='girls text-2xl border-b-2 m-2 '>Metal Type</li>
        <li className='girls text-2xl border-b-2 m-2 '>Metal Stamp</li>
        <li className='girls text-2xl border-b-2 m-2 '>Metal Color</li>
        <li className='girls text-2xl border-b-2 m-2 '>Carat Range</li>
      </ul>
      <button className='text-center fill-orange-200 p-1 ml-3  bg-orange-200 rounded-full' type='reset'>reset</button>
    </aside>
  );
}
