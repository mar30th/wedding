import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={showBtn ? "block" : "hidden"}>
      <button
        id="scroll-to-top-btn"
        className="fixed bg-theme text-white font-semibold p-1 rounded hover:bg-white hover:border hover:border-theme hover:text-theme bottom-5 right-8 cursor-pointer outline-none transition-color duration-300"
        onClick={scrollToTop}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 8"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;