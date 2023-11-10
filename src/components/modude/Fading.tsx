import React, { useEffect, useRef } from "react";
import Fancybox from "../utils/Fancybox";
import { Carousel } from "@fancyapps/ui";
import "./css/fading.css";
import { mapRange } from "../utils/mapRange";
import { baseURL } from "../../constant/api";
import fadingImg from "../../assets/fading_img/fading_img.json"

const Fading = () => {
  const fadingList = fadingImg;
  const fadingCarouselRef = useRef(null);

  useEffect(() => {
    if (fadingList.length > 0 && fadingCarouselRef.current) {
      new Carousel(fadingCarouselRef.current, {
        Dots: false,
        Navigation: false,
        infinite: false,
        slidesPerPage: 1,
        on: {
          "Panzoom.beforeTransform": (carousel) => {
            carousel.slides.map((slide: any) => {
              let progress =
                (carousel.panzoom.current.e * -1 - slide.pos) / slide.dim;
              progress = progress > 0 ? 1 - Math.min(1, progress) : 1;
              const scale = mapRange(0, 1, 0.8, 1, progress);
              slide.el.style.setProperty("--f-scale", `${scale}`);
              slide.el.style.setProperty("--f-progress", `${progress}`);
            });
          },
        },
      });
    }
  }, [fadingList]);

  return (
    <div>
      <div className="p-4">
        <div
          ref={fadingCarouselRef}
          id="fadingCarousel"
          className="mb-9 f-carousel lg:grid lg:grid-cols-[360px_1fr]"
        >
          <div className="py-4 lg:pr-10 z-10">
            <div className="mx-auto">
              <h2 className="mb-6 font-serif font-semibold text-2xl">
                Our Best Moments
              </h2>
              <p className="mb-6 text-xl text-justify">
                We are grateful to God and to destiny for meeting you in this
                life. My love, thank you for those beautiful moments we shared
                together. Rejoice us!
              </p>
              <p className="font-serif text-3xl">
                <button
                  data-carousel-prev
                  className="btnA px-3 mr-1 h-10 bg-theme text-white font-semibold border hover:bg-white hover:border-theme hover:text-theme rounded-md leading-none transition-color duration-300"
                >
                  ←
                </button>
                <button 
                  data-carousel-next
                  className="btnB px-3 h-10 bg-theme text-white font-semibold border hover:bg-white hover:border-theme hover:text-theme rounded-md leading-none transition-color duration-300"
                >
                  →
                </button>
              </p>
            </div>
          </div>
          <div className="lg:ml-[-360px]">
            <Fancybox
              options={{
                Carousel: {
                  infinite: true,
                },
              }}
            >
              <div className="f-carousel__viewport lg:pl-[360px]">
                <div className="f-carousel__track items-baseline">
                  {fadingList?.map((img: { link: string }, index: number) => (
                    <figure key={index} className="f-carousel__slide">
                      <a data-fancybox="gallery" href={baseURL + img.link}>
                        <img
                          className="mb-4 w-full rounded-lg hover:opacity-80 transition-color duration-300"
                          width={300}
                          height={400}
                          src={baseURL + img.link}
                          alt={img.link}
                          loading="lazy"
                        />
                      </a>
                    </figure>
                  ))}
                </div>
              </div>
            </Fancybox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fading;
