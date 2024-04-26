// import React from 'react';

// export default function Motherday1page() {
//   return (
//     <div className="flex flex-wrap flex-col items-center md:flex-row overflow-hidden">
//       <div className="relative ">
//         <img src="/Mothersday/m1.jpg" alt="" className="w-full h-auto" />
//       </div>
//       <div className="absolute flex flex-col flex-wrap bg-white bg-opacity-50  text-[#262b2e] p-8">
//         <h1 className="text-2xl md:text-3xl girl lg:text-5xl">The Mother's Day Gift <br /> Guide</h1>
//         <p className="text-lg md:text-xl lg:text-2xl">Mementos that show how much she means.</p>
//         <button className="mt-4 px-6 py-2 bg-white text-[#262b2e] rounded-md"><a href="/mothersdaycollection">Explore Gifts</a></button>
//       </div>
//     </div>
//   );
// }
// import React from 'react';

// export default function Motherday1page() {
//   return (
//     <div className="flex flex-col md:flex-row items-center overflow-hidden">
//       <div className="relative md:w-1/2">
//         <img src="/Mothersday/m1.jpg" alt="" className="w-full h-auto" />
//       </div>
//       <div className="flex flex-col justify-center items-center md:w-1/2 bg-white bg-opacity-50 text-[#262b2e] p-8">
//         <h1 className="text-2xl md:text-3xl lg:text-5xl text-center">The Mother's Day Gift Guide</h1>
//         <p className="text-lg md:text-xl lg:text-2xl text-center mb-4">Mementos that show how much she means.</p>
//         <a href="/mothersdaycollection" className="px-6 py-2 bg-white text-[#262b2e] rounded-md">Explore Gifts</a>
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function Motherday1page() {
    return (
        <>
            <div className="relative overflow-hidden  object-fill ">
                <img src="/Mothersday/m1.jpg" alt="" className="w-full h-auto object-fill" />
                <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start md:p-8 text-center md:text-lef  text-[#262b2e]">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl girl">The Mother's Day Gift <br /> Guide</h1>
                    <p className="lg:block hidden text-lg md:text-xl lg:text-2xl mb-4 girl">Mementos that show how much she means.</p>
                    <a href="/mothersdaycollection" className="px-6 py-2  text-[#262b2e] girl font-extrabold  underline underline-offset-2 uppercase rounded-md">Explore Gifts</a>
                </div>
            </div>
            <div className='flex mt-5 max-w-7xl mx-auto flex-wrap items-center justify-evenly lg:gap-10 gap-1'>
                <div><a href=""><img src="/Mothersday/m2.jpg" alt="" /></a></div>
                <div className=' float-left'>
                    <h1 className='text-[40px] text-[#262b2e] girl p-2 '>Jewelry Box Essentials</h1>
                    <p className='girl font-bold m-2 p-2'>Made for everyday and designed to to be worn for a lifetime. <br /> Which are you missing?</p>
                    <button className='uppercase girl outline p-3 m-4 text-[#262b2e] hover:text-white transition-all hover:bg-[#24404e]  outline-gray-400'><a href="" className='mt-5'>Explore Now</a></button>
                </div>
            </div>

            <h1 className='girls text-[40px] text-[#262b2e] w-full md:w-auto text-center luxury'>Top Jewelry Gifts</h1>
            <div className='max-w-7xl mx-auto flex items-center justify-around p-4 flex-wrap '>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m3.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>Diamonds</caption>
                    <a href='/diamondjewelary' className='border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m4.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>Pearls</caption>
                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m5.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>Made for Mom</caption>
                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m6.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>Birthstone</caption>
                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>

            </div>

            <div className='flex  max-w-7xl mx-auto flex-wrap items-center justify-evenly lg:gap-5 gap-1'>
                <div><a href=""><img src="/Mothersday/m7.jpg" alt="" /></a></div>
                <div className='flex flex-col  items-center justify-center'>
                    <h1 className='text-[40px] text-[#262b2e] girl p-2 luxury text-center'>Shop By Price</h1>
                    <button className='uppercase girl outline p-3 m-4 hover:text-black transition-all hover:bg-white bg-[#24404e]  outline-gray-400'><a href="" className=' text-white hover:text-black mt-5'>Gifts under $100 </a></button>
                    <button className='uppercase girl outline p-3 m-4 hover:text-black transition-all hover:bg-white bg-[#24404e]  outline-gray-400'><a href="" className=' text-white hover:text-black mt-5'>Gifts under $100 </a></button>
                    <button className='uppercase girl outline p-3 m-4 hover:text-black transition-all hover:bg-white bg-[#24404e]  outline-gray-400'><a href="" className=' text-white hover:text-black mt-5'>Gifts under $100 </a></button>
                </div>
            </div>


            <h1 className='girls text-[40px] text-[#262b2e] w-full md:w-auto text-center luxury'>Designer Gifts</h1>
            <div className='max-w-7xl mx-auto flex items-center justify-around p-4 flex-wrap '>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m8.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>Pandora</caption>
                    <p className='girls m-3'>Find pieces from this beloved brand.</p>
                    <a href='/diamondjewelary' className='border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m9.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full uppercase'>MIKIMOTO</caption>
                    <p className='girls m-3'>Exquisite, classic
                        styles..</p>

                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m10.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>David Yurman</caption>
                    <p className='girls m-3'>Fall in love with DY all over again.</p>

                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m14.jpeg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>SHY Creation</caption>
                    <p className='girls m-3'>Designs that nail contemporary luxury.</p>

                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>

            </div>

            <div className='flex mt-5 max-w-7xl mx-auto flex-wrap flex-row-reverse items-center justify-evenly lg:gap-10 gap-1'>
                <div><a href=""><img src="/Mothersday/m11.jpg" alt="" /></a></div>
                <div className=' text-right'>
                    <h1 className='text-[40px] text-[#262b2e] girl p-2 '>Discover Papyrus By REEDS</h1>
                    <p className='girl font-bold m-2 p-2'>Colorful gemstones and trending style. It's all here.</p>
                    <button className='uppercase girl outline p-3 m-4 text-[#262b2e] hover:text-white transition-all hover:bg-[#24404e]  outline-gray-400'><a href="" className='mt-5'>Explore Now</a></button>
                </div>
            </div>


            <h1 className='girls text-[40px] text-[#262b2e] w-full md:w-auto text-center luxury'>Only Here</h1>
            <p className='text-center text-2xl m-4'>Explore REEDS exclusive collections.</p>

            <div className='max-w-7xl mx-auto flex items-center justify-around p-4 flex-wrap '>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m12.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>Downton Abbey
                    </caption>
                    <p className='girls m-3'>Indulge your good taste with these .</p>
                    <a href='/diamondjewelary' className='border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m13.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full '>Roberta Z</caption>
                    <p className='girls m-3'>Made to celebrate the passion & purpose </p>
                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="https://www.reeds.com/media/wysiwyg/gift-guide/2024/Flexie_295x400_1.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>REEDS Flexible</caption>
                    <p className='girls m-3'>A collection that flexes to fit just right.</p>
                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>
                <div className='flex-col flex items-center justify-center'>
                    <img src="/Mothersday/m15.jpg" alt="" className='hover:opacity-65 transition-all' />
                    <caption className='girls font-semibold text-[25px] text-center w-full'>REEDS Econic</caption>
                    <p className='girls m-3'>Stunning lab-createddiamonds.</p>
                    <a href='/diamondjewelary' className=' border-b-2 p-2  scale-110 transition-all uppercase girls '>Shop Now</a>
                </div>

            </div>

            <div className='max-w-7xl mx-auto '>
                <h2 className='girls text-[40px] capitalize text-center'>Only The best in quality Jewelry</h2>
                <p className='p-3 text-justify girls'>In addition to perusing this gift guide, make sure you stop by our Mother’s Day collection that features a variety of hand-selected Mother’s Day jewelry options. Whether mom prefers rings, necklaces, earrings, or bracelets, you’ll find the perfect gift to express your love and appreciation for her. You’re sure to find something that will leave her speechless on her special day</p>
                <p className='p-3 text-justify girls'>Ultimately, this special holiday is about celebrating family, and the presents are the cherry on top. Our Mother’s Day jewelry gift guide is here to take the stress out of finding a gift so you can focus on the mom, sister, or friend in your life. She’ll remember the amazing time you spent together on Mother’s Day every time she wears your jewelry gift! </p>
            </div>


        </>

    );
}
