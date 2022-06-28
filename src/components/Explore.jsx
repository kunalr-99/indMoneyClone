import React from "react";

const Explore = () => {
  return (
    <>
      <main className="pt-6 pb-16 bg-white">
        <section className="w-[1000px] mx-auto">
          <div>Explore</div>
          <div className="flex mt-2 space-x-4">
            <div className="flex flex-col items-center px-12 py-6 rounded-md shadow-md">
              <div className="p-[18px] mb-3 bg-red-100 rounded-3xl">
                <img
                  src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/chart-rising-up-dollar.svg&w=48&q=75"
                  alt="UsStocks"
                />
              </div>
              <p>Us Stocks</p>
            </div>
            <div className="flex flex-col items-center px-12 py-6 shadow-md">
              <div className="p-[18px] mb-3 bg-cyan-100 rounded-3xl">
                <img
                  src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/chart-rising-up-rupee.svg&w=48&q=75"
                  alt="InStocks"
                />
              </div>
              <p>IN Stocks</p>
            </div>
            <div className="flex flex-col items-center px-12 py-6 shadow-md">
              <div className="p-[18px] mb-3 bg-orange-100 rounded-3xl">
                <img
                  src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/palm-spread-out.svg&w=48&q=75"
                  alt="MF"
                />
              </div>
              <p>Mutual Funds</p>
            </div>
            <div className="flex flex-col items-center px-12 py-6 shadow-md">
              <div className="p-[18px] mb-3 bg-amber-100 rounded-3xl">
                <img
                  src="https://www.indmoney.com/stencil/images?url=/images/home-page/hero/monument.svg&w=48&q=75"
                  alt="FD"
                />
              </div>
              <p>Fixed Deposit</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Explore;
