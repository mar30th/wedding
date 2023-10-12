import React, { useEffect } from "react";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./css/showcase.css";
import { Carousel } from "@fancyapps/ui";
import Fancybox from "../Fancybox";

const ShowCase = () => {
  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number,
    value: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    return (
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
    );
  };
  useEffect(() => {
    const showCaseCarousel = new Carousel(
      document.getElementById("showCaseCarousel"),
      {
        Dots: false,
        slidesPerPage: 1,
        on: {
          "Panzoom.beforeTransform": (carousel: {
            slides: any[];
            getProgress: (arg0: any) => any;
          }) => {
            carousel.slides.map((slide) => {
              const progress = carousel.getProgress(slide.index);
              const scale = mapRange(0, 1, 1, 1.2, 1 - Math.abs(progress));

              slide.el.style.setProperty("--f-scale", scale);
              slide.el.style.setProperty(
                "--f-translateX",
                `${progress * -10}%`
              );
            });
          },
        },
      }
    );

    return () => {
      // Clean up and destroy the Carousel when the component unmounts
      showCaseCarousel.destroy();
    };
  }, []);

  return (
    <Fancybox>
      <div id="app" className="p-4">
        <div className="f-carousel" id="showCaseCarousel">
          <div className="f-carousel__slide">
            <a data-fancybox="gallery" href="https://lipsum.app/id/31/640x640">
              <img
              className="hover:opacity-80"
                width="640"
                height="640"
                alt=""
                data-lazy-src="https://lipsum.app/id/31/640x640"
              />
            </a>
          </div>
          <div className="f-carousel__slide">
            <a data-fancybox="gallery" href="https://lipsum.app/id/35/640x640">
              <img
              className="hover:opacity-80"
                width="640"
                height="640"
                alt=""
                data-lazy-src="https://lipsum.app/id/35/640x640"
              />
            </a>
          </div>
          <div className="f-carousel__slide">
            <a data-fancybox="gallery" href="https://lipsum.app/id/35/640x640">
              <img
              className="hover:opacity-80"
                width="640"
                height="640"
                alt=""
                data-lazy-src="https://lipsum.app/id/35/640x640"
              />
            </a>
          </div>
          <div className="f-carousel__slide">
            <a data-fancybox="gallery" href="https://lipsum.app/id/35/640x640">
              <img
              className="hover:opacity-80"
                width="640"
                height="640"
                alt=""
                data-lazy-src="https://lipsum.app/id/35/640x640"
              />
            </a>
          </div>
        </div>
      </div>
    </Fancybox>
  );
};

export default ShowCase;

{
  /* <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </div> */
}
