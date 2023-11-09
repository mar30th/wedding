import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo3.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className=" bg-theme text-white shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="">
          <span
            className="flex justify-center text-2xl py-5 font-semibold whitespace-nowrap cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={logo} className="h-[100px]" alt="logo" />
          </span>
        </div>

        <hr className="py-5" />
        <span className="block text-sm sm:text-center">
          © 2023 Created by Dong. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
