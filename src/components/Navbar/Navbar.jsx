import React from 'react';
import LogoIcon from '../../assets/Logo.png'
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center px-4">
          {/* Logo Section */}
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
            <img src={LogoIcon} alt="Logo" className="w-14" />
            Shopsy
          </a>

          {/* Search Bar Section */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] sm:w-[250px] group-hover:w-[300px] transition-all duration-200 rounded-[10px] border border-gray-300 px-4 py-1 focus:outline-none focus:border-primary"
            />
            <IoMdSearch className="absolute right-3 text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Lower Navbar (You can add navigation links here) */}
      <div className="bg-gray-100 dark:bg-gray-800 py-2">
        <div className="container px-4">
          {/* Add navigation links here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
