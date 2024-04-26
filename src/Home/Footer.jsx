import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>

    <div className="media mx-w-7xl flex items-center px-5 lg:flex-row flex-col gap-3  justify-between mx-auto p-4 border-b-2 mt-3 border-t-2"> 
    <div className="flex gap-2  text-gray-400">
        <FacebookIcon className='bg-gray-400 text-white rounded-full p-1' fontSize='large'/>
        <PinterestIcon className='bg-gray-400 text-white rounded-full p-1' fontSize='large'/>
        <TwitterIcon className='bg-gray-400 text-white rounded-full p-1' fontSize='large'/>
        <YouTubeIcon className='bg-gray-400 text-white rounded-full p-1' fontSize='large'/>
        <InstagramIcon className='bg-gray-400 text-white rounded-full p-1' fontSize='large'/>
    </div>
    <div>
        <h2 className='font-bold girl'>TRUSTED WITH LIFE'S MOMENTS</h2>
    </div>
  <div>
  <form action="#" className='flex'>
<input type="email" id="email" name="email" placeholder="Enter Email" className="  border-[2px] border-gray-700 px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-500" />
</form>
  </div>
    </div>
    <footer className="text-[#272a2e] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src="https://www.reeds.com/pub/media/wysiwyg/footer/footer_logo.png" alt="Reeds logo" draggable="false" className="h-10 mb-4" />
            <p className="text-lg girl">TRUSTED WITH LIFE'S MOMENTS</p>
            
          </div>
          <div className="w-full md:w-1/2 md:ml-auto mb-8 md:mb-0">
            <h3 className="text-lg girl mb-4 font-bold">ABOUT US</h3>
            <ul className="grid grid-col gap-4">
              <li><a href="#" className="text-sm  hover:underline">Our Story</a></li>
              <li><a href="#" className="text-sm  hover:underline">Our People</a></li>
              <li><a href="#" className="text-sm  hover:underline">Careers</a></li>
              <li><a href="#" className="text-sm  hover:underline">Education</a></li>
              <li><a href="#" className="text-sm  hover:underline">AAffiliate Marketing Program</a></li>

            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg girl mb-4 font-bold">Contact Us</h3>
            <p className="text-sm  mb-2">Call us at 844-733-3740</p>
            <p className="text-sm  mb-2">Text us at 844-733-3740</p>
            <p className="text-sm  mb-2">Email us at service@reeds.com</p>
            <a href="#" className="text-sm  underline hover:no-underline mb-2">Chat with an Expert</a> <br />
            <a href="#" className="text-sm  underline hover:no-underline">Find a REEDS Store</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
