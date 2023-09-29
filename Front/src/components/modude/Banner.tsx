import React from "react";
import bn from "../../assets/img/banner.jpg";

const Banner = () => {
  return (
    <div className=" relative">
      <section className="bg-main-banner min-h-[500px] static bg-fixed bg-cover bg-center bg-no-repeat opacity-50"></section>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-widest">
            THOMAS
            <br className="lg:hidden" />
            <span className="text-gray-900"> &amp; </span>
            <br className="lg:hidden" />
            LACIE
          </h1>
          <div className="mt-4 text-xl font-normal">
            <p>We're Getting Married!</p>
            <p>Saturday | 18-11-2023 | 11:00 AM.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
