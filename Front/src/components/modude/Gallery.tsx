import React from "react";
import P1 from "../../assets/img/banner.jpg";
import { useNavigate } from "react-router-dom";
import Fancybox from "../Fancybox";
import ShowCase from "./ShowCase";

const Gallery = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto">
      <div className="py-5">
        <ShowCase />
        <div className="pt-10">
          <img
            src="https://templates.microweber.com/wedding/userfiles/templates/wedding/assets/img/decoration-2.svg"
            style={{ maxHeight: "40px", maxWidth: "500px", margin: "auto" }}
          />
        </div>
        <div>
          {/* <h1 className="text-2xl md:text-5xl md:my-5 my-2 font-semibold">Our Best Moments</h1> */}
          <h1 className="text-2xl md:text-5xl font-semibold my-4 md:my-12">
            We're getting married!
          </h1>
        </div>
      </div>
      <Fancybox
        options={{
          Carousel: {
            // infinite: false,
          },
          Thumbs: {
            type: "none",
          },
        }}
      >
        <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4 ">
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              />
            </a>
          </div>
          <div className="grid gap-4">
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
              />
            </a>
          </div>
          <div className="grid gap-4">
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              />
            </a>
          </div>
          <div className="grid gap-4">
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
              />
            </a>
            <a
              data-fancybox="gallery"
              href="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            >
              <img
                className="h-auto max-w-full rounded-lg hover:opacity-75"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              />
            </a>
          </div>
        </div>
      </Fancybox>
      <button
        type="button"
        className="my-4 bg-theme text-white font-semibold py-4 px-9 focus:outline-none rounded-full border hover:bg-white hover:text-black hover:border-theme hover:text-theme"
        onClick={() => {
          navigate("/gallery");
        }}
      >
        Find Out More
      </button>
    </div>
  );
};

export default Gallery;
