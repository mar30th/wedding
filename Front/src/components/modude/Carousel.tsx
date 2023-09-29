import React from "react";
import P1 from "../../assets/img/banner.jpg";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <div className="py-5">
        <div className="">
          <img
            src="https://templates.microweber.com/wedding/userfiles/templates/wedding/assets/img/decoration-2.svg"
            style={{ maxHeight: "40px", maxWidth: "500px", margin: "auto" }}
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-5xl md:my-5 my-2 font-semibold">Our Best Moments</h1>
          <p className="text-center md:my-5">
            We are grateful to God and to destiny for meeting you in this life.
            My love, thank you for those beautiful moments we shared together.
            Rejoice us!
          </p>
        </div>
        <button type="button" className="my-4 bg-theme text-white font-semibold py-4 px-9 focus:outline-none rounded-full border hover:bg-white hover:text-black hover:border-theme" onClick={() => {navigate('/gallery')}}>Find Out More</button>
      </div>
      <div className="relative">
        <div>
          <img src={P1} className="opacity-30 " alt="" />
        </div>
        {/* <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <p>Chúng mình đã kết hôn được 55 ngày</p>
            <p>We're Getting Married!</p>
            <p>Thứ tư | 26-7-2023 | 8:00 sáng</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
