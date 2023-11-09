import React from "react";
import { useNavigate } from "react-router-dom";
import ShowCase from "./ShowCase";
import Fading from "./Fading";
import Decoration2 from "../decoration/Decoration2";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <div className="py-5">
        <div className="text-2xl md:text-5xl font-semibold my-4 md:my-12">
          <h1 className="text-[22px] lg:text-[35px] font-extrabold tracking-widest text-center font-montserrat my-4 md:my-8">
            Chấn Đông & Bích Phương
          </h1>
        </div>
        <ShowCase />
        <Decoration2 />
      </div>
      <div className="">
        <h1 className="text-4xl font-extrabold tracking-widest text-center font-montserrat my-4 md:my-8">
          Save The Date
         </h1>
      </div>
      <Fading />
      <button
        type="button"
        className="my-4 bg-theme text-white font-semibold py-4 px-9 focus:outline-none rounded-full border hover:bg-white hover:border-theme hover:text-theme transition-color duration-300"
        onClick={() => {
          navigate("/gallery");
        }}
      >
        {t("findOutButton")}
      </button>
    </div>
  );
};

export default Gallery;
