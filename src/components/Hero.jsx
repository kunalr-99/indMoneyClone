import React from "react";
import { MdStarRate, MdStarBorder } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <main className="bg-[#f6f6f9]">
        <section className="flex w-[1100px] mx-auto pt-6">
          <div className="pt-8 text-gray-800 heroText">
            <div className="mb-3 text-gray-600 subtitle">
              Invest in US Stocks
            </div>
            <div className="text-[40px] font-bold title w-[380px] leading-[50px] mb-10">
              Directly invest in US Stocks at Zero commission.
            </div>
            <div className="mb-10 text-lg font-semibold">
              <li>Zero Commission investing.</li>
              <li>Zero a/c opening Fee.</li>
              <li>Open 2-in-1 super A/C for free.</li>
            </div>
            <div className="mb-10 button">
              <button className="px-20 py-4 font-bold text-white bg-blue-500 rounded-3xl hover:scale-105">
                Get Started
              </button>
            </div>
            <div className="flex">
              <div className="mr-4">
                <img
                  className="w-40 mb-3"
                  src="https://www.indmoney.com/stencil/images?url=/images/common/footer/old-app-store.svg&w=1920&q=75"
                  alt="playicons"
                />
                <div className="flex text-xl text-yellow-400">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarBorder />
                </div>
                <div className="flex space-x-2">
                  <div>4.6</div>
                  <div className="text-gray-600">- 11,400 Ratings</div>
                </div>
              </div>
              <div>
                <img
                  className="w-40 mb-3"
                  src="https://www.indmoney.com/stencil/images?url=/images/common/footer/old-play-store.svg&w=1920&q=75"
                  alt="playicons"
                />
                <div className="flex text-xl text-green-500">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarBorder />
                </div>
                <div className="flex space-x-2">
                  <div>4.4</div>
                  <div className="text-gray-600">- 36,199 Reviews</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-[150px]">
            <img
              className="w-[430px]"
              src="/images/heroImage.PNG"
              alt="heroimage"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
