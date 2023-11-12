import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Fancybox from "../utils/Fancybox";
import Decoration3 from "../decoration/Decoration3";
import { baseURL } from "../../constant/api";
import galleryImg from "../../assets/gallery_img/gallery.json"
import Loading from "../Loading";

const FullGallery = () => {
  const galleryList = galleryImg
  const galleryRef = useRef(null);
  const navigate = useNavigate();
  

  return (
    <div>
      <div className="md:w-3/4 mx-auto">
        <div className="mx-auto py-5">
          <Decoration3 />
          <button
            type="button"
            className="my-4 bg-theme text-white font-semibold py-4 px-9 focus:outline-none rounded-full border hover:bg-white hover:text-white hover:border-theme"
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Wedding
          </button>
        </div>
      </div>
      <Loading />
      <Fancybox
      options={{
        Thumbs: {
          type: "none",
        },
      }}>
        <div
          ref={galleryRef}
          className="container w-3/4 my-5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {galleryList?.map((img: { link: string }, index: number) => (
            <div key={index} className="box w-full break-inside-avoid">
              <a data-fancybox="gallery" href={baseURL + img.link}>
                <img
                  src={baseURL + img.link}
                  alt={`img`}
                  loading="lazy"
                  className="max-w-full rounded-2xl hover:opacity-80"
                />
              </a>
            </div>
          ))}
        </div>
      </Fancybox>
    </div>
  );
};

export default FullGallery;
