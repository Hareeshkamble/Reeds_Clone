import { Avatar } from '@mui/material'
import React from 'react'
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
export default function Reads() {
    return (
        <div className='Reeds  w-full  p-3 flex items-center justify-between px-10 border-b-[1px] border-gray-200'>
            <div className='hidden lg:flex gap-3 '><Avatar alt="Remy Sharp" src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg" />
                <a href="tel:+1-844-733-3740" className='flex items-center justify-between gap-2 text-[12px]' data-mobile="844-733-3740">
                    <SmartphoneIcon />
                    <div className="link-wrapper flex flex-col">
                        <span>844-733-3740</span>
                        <span className="contact-message">Call or Text Us</span>
                    </div>
                </a>
                <div className="flex list-none items-center justify-center font-thin gap-2 stroke-none">
                    <li><a href=""><MapsUgcRoundedIcon fontSize='medium' /></a></li>
                    <li><a href=""><FmdGoodOutlinedIcon fontSize='medium' /></a></li>
                    <li><a href=""><CreditCardOutlinedIcon fontSize='medium' /></a></li>
                </div>

            </div>

            <div className='flex items-center justify-center '>
                <a href="/"> <h1 className=' txt w-full text-6xl'>REEDS</h1></a>
            </div>

            <div className='flex items-center justify-around  gap-2'>
                <div className='searchBar px-1 items-center justify-center gap-2  hidden sm:hidden  lg:flex'>
                    <input type="text" placeholder='search' className=' outline-gray-500 outline px-1 hidden lg:block' />
                    <SearchIcon fontSize='medium' className=' cursor-pointer hidden sm:hidden  lg:flex' />
                </div>
                <div className='icons flex items-center justify-center gap-3'>
                    <PersonOutlineOutlinedIcon fontSize='medium' className=' cursor-pointer' />
                    <ShoppingBagOutlined fontSize='medium' className=' cursor-pointer' />
                </div>
            </div>

        </div>

    )
}
