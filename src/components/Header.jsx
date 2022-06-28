import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <main className="sticky top-0 left-0 bg-white shadow-md">
        <header className="flex space-x-8 w-[1000px] mx-auto items-center py-[14px]">
          <div>
            <img
              className="w-[114px]"
              src="https://www.indmoney.com/stencil/images?url=/images/common/INDlogo_black.svg&w=1920&q=75"
              alt="logo"
            />
          </div>
          <div className="flex items-center px-3 py-[6px] bg-gray-100 border-2 border-gray-300 rounded-2xl">
            <BsSearch />
            <input
              className="ml-1 px-[6px] py-[2px] w-[250px] bg-gray-100 placeholder:text-gray-500 font-semibold focus:outline-none"
              type="text"
              placeholder="Search Stocks, Mutual Funds, etc"
            />
          </div>
          <div className="space-x-6 text-[15px] font-semibold text-gray-700">
            <span>Explore</span>
            <span>Features</span>
            <span>Pricing</span>
            <span>Blog</span>
            <span>Customer Services</span>
          </div>
          <div>
            <button className="-ml-2 px-6 py-[6px] text-white bg-blue-600 hover:bg-blue-500 rounded-md">
              Login
            </button>
          </div>
        </header>
      </main>
    </>
  );
};

export default Header;
