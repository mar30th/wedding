import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t, i18n } = useTranslation();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return (
    <div className="">
      <section
        className="bg-main-banner min-h-screen static bg-fixed bg-cover bg-no-repeat flex items-center justify-center"
        >
        <h1 className="text-[100px] lg:text-[120px] text-theme font-extrabold tracking-widest text-center font-corinthia">
          We're getting married!
        </h1>
      </section>
    </div>
  );
};

export default Banner;
