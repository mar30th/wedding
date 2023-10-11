import React from "react";
import Banner from "../components/modude/Banner";
import Carousel from "../components/modude/Carousel";
import Gallery from "../components/modude/Gallery";
import Intro from "../components/modude/Intro";
import Portfolio from "../components/modude/Portfolio";
import Break from "../components/modude/Break";

const Home = () => {
  return (
    <div className="">
      <Banner />

      <div className="md:w-4/5 m-auto">
        <div className="py-4">
          <Gallery />
        </div>
      </div>
      <Portfolio />

      <Break />
    </div>
  );
};

export default Home;
