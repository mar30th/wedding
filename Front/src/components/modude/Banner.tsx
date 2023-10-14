import React, { useEffect } from "react";
import bn from "../../assets/img/banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { weddingActions } from "../../store/WeddingManage/slice";
import { useTranslation } from "react-i18next";


const Banner = () => {
  const { t, i18n } = useTranslation();

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { language } = useSelector((state: RootState) => state.weddingManage);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    
  })

  return (
    <div className=" relative">
      {/* <section className="bg-[url('http://localhost:8080/public/banner_img/DSC_7764.webp')] min-h-[500px] static bg-fixed bg-cover  bg-no-repeat opacity-50"></section> */}
      <section
        className={`bg-[url(${
          baseUrl + "/public/banner_img/DSC_7764.webp"
        })] min-h-[500px] static bg-fixed bg-cover bg-no-repeat opacity-50`}
      ></section>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-widest inline-flex">
            {/* THOMAS */}
            <span>{t("groomName")} </span>
            {/* <br className="lg:hidden" /> */}
            <span className="text-gray-900 mx-2"> &amp; </span>
            {/* <br className="lg:hidden" /> */}
            {/* LACIE */}
            <span>{t("brideName")}</span>
          </h1>
          {/* <div className="mt-4 text-xl font-normal">
            <p>We're Getting Married!</p>
            <p>Saturday | 18-11-2023 | 11:00 AM.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
