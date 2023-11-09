import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logo3.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  
  const navigate = useNavigate();

  const handleLanguage = () => {
    const currentLanguage = i18n.language;
    if(currentLanguage === "en") {
      return i18n.changeLanguage("vn")
    } else if(currentLanguage === "vn") {
      return i18n.changeLanguage("en")
    }
  }

  return (
    <nav className="bg-white md:w-4/5 mx-auto lg-only hidden md:block">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <span
          className="self-center text-2xl font-semibold whitespace-nowrap cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} className="h-[100px] mr-3" alt="" />
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-theme md:p-0 transition-color duration-300"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 transition-color duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 transition-color duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 transition-color duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-theme md:p-0 transition-color duration-300"
              >
                Contact
              </a>
            </li>
            <label
              className="relative inline-flex items-center cursor-pointer"
            >
              <input type="checkbox" className="sr-only peer"  
              onClick={() => {handleLanguage()
              }}/>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-theme" />
            </label>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
