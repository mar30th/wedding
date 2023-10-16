import React from "react";
import Decoration1 from "../decoration/Decoration1";

const Intro = () => {
  return (
    <div className="grid md:grid-cols-12  p-1">
      <div className="md:col-span-8 py-5 md:col-start-3">
        {/* <div className="">
          <img
            src="https://templates.microweber.com/wedding/userfiles/templates/wedding/assets/img/decoration-1.svg"
            style={{ maxHeight: "40px", maxWidth: "500px", margin: "auto" }}
          ></img>
        </div> */}
        <Decoration1 />
        <div className="col-span-12 text-center">
          <h1 className="text-2xl md:text-5xl font-semibold my-4 md:my-12">We Will Get Married</h1>
          <p className="text-justify font-semibold">
            We started with hope and followed our faith in one another. We were
            overwhelmed by love and trusted in wisdom. So we decided to say yes.
            We, Silvia Petrova Ivanova and Deyan Marinov Krastev, We invite you
            to be with us on the holiday, to celebrate the creation of our
            family. Be a special guest of the most delicate and beautiful event
            of our lives - Our wedding celebration, which will take place on
            18.11.2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
