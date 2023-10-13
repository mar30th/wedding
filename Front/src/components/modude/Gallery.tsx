import React from "react";
import P1 from "../../assets/img/banner.jpg";
import { useNavigate } from "react-router-dom";
import Fancybox from "../Fancybox";
import ShowCase from "./ShowCase";
import Fading from "./Fading";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <div className="py-5">
        <ShowCase />
        <div className="pt-10">
          <img
            src="https://templates.microweber.com/wedding/userfiles/templates/wedding/assets/img/decoration-2.svg"
            style={{ maxHeight: "40px", maxWidth: "500px", margin: "auto" }}
          />
        </div>
        <div>
          {/* <h1 className="text-2xl md:text-5xl md:my-5 my-2 font-semibold">Our Best Moments</h1> */}
          <h1 className="text-2xl md:text-5xl font-semibold my-4 md:my-12">
            We're getting married!
          </h1>
        </div>
      </div>

        <Fading />
      <button
        type="button"
        className="my-4 bg-theme text-white font-semibold py-4 px-9 focus:outline-none rounded-full border hover:bg-white hover:border-theme hover:text-theme"
        onClick={() => {
          navigate("/gallery");
        }}
      >
        Find Out More
      </button>
    </div>
  );
};

export default Gallery;
