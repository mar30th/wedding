import React from "react";
import Banner from "../components/modude/Banner";
import Gallery from "../components/modude/Gallery";
import Portfolio from "../components/modude/Portfolio";
import Break from "../components/modude/Break";
import Loading from "../components/Loading";
import ShowCase from "../components/modude/ShowCase";
import Fading from "../components/modude/Fading";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="">
      <Loading/>
      <Banner />
      {/* <Gallery /> */}
      <ShowCase />
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
      <div className="md:w-4/5 m-auto">
        <div className="py-4">
        </div>
      </div>
      <Break />
      <Portfolio />
    </div>
  );
};

export default Home;
