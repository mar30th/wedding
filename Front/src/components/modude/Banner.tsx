import React from "react";

const Banner = () => {
  return (
    <div className="">
      <section className="relative bg-main-banner-mobile lg:bg-main-banner min-h-screen bg-cover bg-center bg-no-repeat">
        <div
          className="h-screen w-full bg-transparent bg-g bg-gradient-to-r from-[#d5c4b591] to-[#ffffffba] flex items-center justify-center">
          <div>
            <h1 className="w-full text-[100px] lg:text-[120px] text-white font-extrabold tracking-widest text-center font-corinthia">
              We're getting married!
            </h1>
            <p className="text-[20px] text-white">Thứ bảy | 18-11-2023 | 11:00 AM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
