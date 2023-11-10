import React, { useEffect, useRef, useState } from "react";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./css/showcase.css";
import { Carousel } from "@fancyapps/ui";
import Fancybox from "../utils/Fancybox";
import { mapRange } from "../utils/mapRange";
import { baseURL } from "../../constant/api";
import showcaseImg from "../../assets/showcase_img/showcase.json"

const ShowCase = () => {
  const showcaseList = showcaseImg
  const showCaseCarouselRef = useRef(null);

  useEffect(() => {
    if (
      showcaseList.length > 0 &&
      showCaseCarouselRef.current
    ) {
      new Carousel(showCaseCarouselRef.current, {
        Dots: false,
        slidesPerPage: 1,
        infinite: true,
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
      });
    }
  }, [showcaseList]);

  return (
    <Fancybox>
      <div className="p-4">
        <div
          className="f-carousel"
          ref={showCaseCarouselRef}
          id="showCaseCarousel"
        >
          {showcaseList?.map((img, index) => (
            <div key={index} className="f-carousel__slide">
              <a data-fancybox="gallery" href={baseURL + img.link}>
                <img
                  className="hover:opacity-80 transition-color duration-300"
                  width="640"
                  height="640"
                  alt="showcaseImg"
                  data-lazy-src={baseURL + img.link}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Fancybox>
  );
};

export default ShowCase;
