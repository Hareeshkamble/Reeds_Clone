// import React from 'react'

// export default function Recommadation() {
//   return (
//     <div className=' h-[80vh] justify-evenly flex flex-wrap bg-[#edf0f3] '>
//       <div className='border border-amber-400 flex flex-col items-center justify-center text-center '>
//        <h1 className='girls text-[50px] text-[#262b2e] w-full '>Design Your Own Engagement Ring</h1>
//        <div className=" m-2">
//         <h6 className='font-bold  uppercase text-[#7297a6] text-[14px]'>Step 01</h6>
//         <p className=' girls text-[#000000] text-[22px]'>Choose your diamond</p>
//        </div>
//        <div className=" m-2">
//         <h6 className='font-bold  uppercase text-[#7297a6] text-[14px]'>Step 02</h6>
//         <p className=' girls text-[#000000] text-[22px]'>Choose Your Setting</p>
//        </div>
//        <div className="  m-2">
//         <h6 className='font-bold  uppercase text-[#7297a6] text-[14px]'>Step 03</h6>
//         <p className=' girls text-[#000000] text-[22px]'>Receive Your Completed Ring</p>
//        </div>
//        <button className='p-3 capitalize font-mono w-52 m-5 outline'>Shop Now</button>
//       </div>

//       <div className='border border-amber-400 flex items-center justify-center'>
//         <img src="/lib/rec1.jpg" alt="" />
//       </div>

//     </div>
//   )
// }

import React from 'react';

export default function Recommendation() {
  return (
    <>
      <div className=' lg:h-[90vh] h-full px-4 py-8 md:px-8 md:py-12 justify-evenly flex overflow-hidden flex-wrap bg-[#edf0f3]'>
        <div className=' flex flex-col items-center justify-center text-center p-4 md:p-8 bg-[#edf0f3]'>
          <h1 className='girls text-[40px] text-[#262b2e] w-full md:w-auto'>
            Design Your Own<br />Engagement Ring
          </h1>
          <div className="m-2">
            <h6 className='font-bold uppercase text-[#7297a6] text-[14px]'>Step 01</h6>
            <p className='girls text-[#000000] text-[22px]'>Choose your diamond</p>
          </div>
          <div className="m-2">
            <h6 className='font-bold uppercase text-[#7297a6] text-[14px]'>Step 02</h6>
            <p className='girls text-[#000000] text-[22px]'>Choose Your Setting</p>
          </div>
          <div className="m-2">
            <h6 className='font-bold uppercase text-[#7297a6] text-[14px]'>Step 03</h6>
            <p className='girls text-[#000000] text-[22px]'>Receive Your Completed Ring</p>
          </div>
          <button className='p-3 capitalize font-mono w-52 m-5 outline'>Shop Now</button>
        </div>

        <div className='bg-[#edf0f3] flex items-center justify-center p-4 md:p-8'>
          <img src="/lib/rec1.jpg" alt="" className="max-w-full h-auto" />
        </div>
      </div>

      <div className='max-w-7xl mx-auto text-center text-[40px] text-[#262b2e] girls luxury '>REEDS Guarantee</div>

      <div className='max-w-7xl  mx-auto mt-5 lg:flex block'>

        <div className="flex flex-col justify-center items-center  m-2 p-4">
          <img src="https://www.reeds.com/media/wysiwyg/education/Same-Day-Icon.png" alt="Same Day Icon" className="m-4" />
          <h3 className="text-center text-[25px] girls">Same Day Options</h3>
          <p className="text-center girls m-4">Need it today? Select Pick Up In Store or Curb Side options in checkout, where available.</p>
          <a href="/" target="_blank" className=" girls inline-block mt-2 px-4 py-2 outline text-gray-800 rounded hover:bg-gray-300">LEARN MORE</a>
        </div>
        <div className="flex flex-col justify-center items-center  m-2 p-4">
          <img src="https://www.reeds.com/media/wysiwyg/education/Same-Day-Icon.png" alt="Same Day Icon" className="m-4" />
          <h3 className="text-center text-[25px] girls">Free Shipping & Returns</h3>
          <p className="text-center girls m-4">Free Standard (7-10 business days) on orders anywhere in the Continental U.S. Plus, easy, free returns.</p>
          <a href="/" target="_blank" className=" girls inline-block mt-2 px-4 py-2 outline text-gray-800 rounded uppercase hover:bg-gray-300">Our Promise</a>
        </div>
        <div className="flex flex-col justify-center items-center  m-2 p-4">
          <img src="https://www.reeds.com/media/wysiwyg/education/Same-Day-Icon.png" alt="Same Day Icon" className="m-4" />
          <h3 className="text-center text-[25px] girls">Meet With An Expert</h3>
          <p className="text-center girls m-4">We're here to help! Schedule a virtual or in-store appointment with a jewelry professional.</p>
          <a href="/" target="_blank" className=" girls inline-block mt-2 px-4 py-2 outline text-gray-800 rounded uppercase hover:bg-gray-300">Contact us</a>
        </div>
        <div className="flex flex-col justify-center items-center  m-2 p-4">
          <img src="https://www.reeds.com/media/wysiwyg/education/Same-Day-Icon.png" alt="Same Day Icon" className="m-4" />
          <h3 className="text-center text-[25px] girls">Purchase Options </h3>
          <p className="text-center girls m-4">Why wait? Order now, pay later. Choose the option that works best for you.</p>
          <a href="/" target="_blank" className=" girls inline-block mt-2 px-4 py-2 outline text-gray-800 rounded uppercase hover:bg-gray-300">LEARN MORE</a>
        </div>
      </div>

      <div className='max-w-7xl mx-auto text-center text-[40px] text-[#262b2e] girls luxury '>Share the Love</div>
      <div className='max-w-7xl mx-auto '>
        <a href="/rings"><img src="/img1.png" alt="" /></a>
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='max-w-7xl mx-auto text-center text-[40px] text-[#272c2f] girls luxury '>Only the Best in Quality Jewelry</div>
        <p className='max-w-6xl mx-auto font-serif text-justify mt-2'> Beyond the exceptional service, REEDS Jewelers has built a reputation for fine jewelry and wrist watches that our customers wear for years. Every piece is inspected at least twice: first by our manufacturers and the second by our trained quality inspectors. We only offer the best of the best!
          Some of the many fine jewelry brands we carry that have passed our rigorous inspection process are PANDORA, Mikimoto, and Swarovski. REEDS is also an authorized distributor in our store locations for many leading designer brands, including David Yurman, Tag Heuer, and Omega. Looking for something specific? Any of our associates can point you in the right direction in-store.</p>
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='max-w-7xl mx-auto text-center text-[40px] text-[#272c2f] girls luxury '>Jewelry Buying Made Simple</div>
        <p className='max-w-6xl mx-auto font-serif text-justify mt-2'> 
If you want to experience our tradition of excellent service and fine jewelry but can’t get to one of our stores, don’t worry! We’ve made sure that the online shopping experience is just as personal, helpful, and full of magical moments. While it’s wonderful to get face-to-face time when choosing the perfect or other important pieces, there’s an undeniable convenience to shopping for jewelry online.

While you’re at it, we’re also here to help you research all your jewelry-related questions online. Curious about buying diamonds , gemstones , or engagement rings ? You’ll find it all here. Ask away, and then start your search!

Finally, we wouldn’t offer such an exclusive variety of jewelry without also offering realistic payment plans. We offer several different financing and payment options, including bitcoin. Whether you purchase your jewelry in-store or online, we will work with you to make buying simple and affordable. Yes, even for that perfect diamond engagement ring you’ve been eyeing!</p>
      </div>

      


    </>
  );
}
