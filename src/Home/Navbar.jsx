import React from 'react';

const Navbar = () => {
  return (
    <nav className="text-[#272a2e] border-b-[1px] hidden lg:flex">
      <div className="px-4 py-2 flex flex-wrap justify-between gap-7 items-center">
        <ul className="flex flex-wrap space-x-8 uppercase gap-5 px-2 font-semibold">
          <li>
            <a href="#" className="hover:text-gray-400 ">Engagement</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Diamonds</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Wedding</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Jewelry</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Watches</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Rolex</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Brands</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">David Yurman</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Gifts</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Sale</a>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="#" className="hover:text-gray-400 mr-4">
            <div className="LinkEnabler" style={{ height: '70px', width: '150px', zIndex: 1 }}>
              <iframe id="rolex_retailer" title="Rolex Official Retailer" src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=32171180ee332145d62847156cfdaf21&amp;lang=en_us" style={{ width: '150px', height: '70px', border: '0', margin: '0', padding: '0', overflow: 'hidden', zIndex: 0, position: 'relative', scroll: 'none' }} scrolling="NO" frameBorder="NO"></iframe>
            </div>
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
