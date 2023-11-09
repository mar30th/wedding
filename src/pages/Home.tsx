import React from "react";
import Banner from "../components/modude/Banner";
import Gallery from "../components/modude/Gallery";
import Portfolio from "../components/modude/Portfolio";
import Break from "../components/modude/Break";
import Loading from "../components/Loading";

const Home = () => {
  return (
    <div className="">
      <Loading/>
      <Banner />
      <div className="md:w-4/5 m-auto">
        <div className="py-4">
          <Gallery />
        </div>
      </div>
      <Break />
      <Portfolio />
    </div>
  );
};

export default Home;
