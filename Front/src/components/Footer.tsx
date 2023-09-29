import React from "react";

const Footer = () => {
  return (
    <footer className="bg-footer text-white shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="text-center my-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Trần Chấn Đông
          </span>
        </div>
        <span className="block text-sm sm:text-center">
          © 2023{" "}Created by Đông. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
