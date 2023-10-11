import React, { useEffect } from "react";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./css/showcase.css";
import { Carousel } from "@fancyapps/ui";

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

const MyCarouselComponent = () => {
  useEffect(() => {
    const myCarousel = new Carousel(document.getElementById("myCarousel"), {
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
            slide.el.style.setProperty("--f-translateX", `${progress * -10}%`);
          });
        },
      },
    });

    return () => {
      // Clean up and destroy the Carousel when the component unmounts
      myCarousel.destroy();
    };
  }, []);

  return (
    <div id="app" className="p-4">
      <div className="f-carousel" id="myCarousel">
        <div className="f-carousel__slide">
          <img
            width="640"
            height="640"
            alt=""
            data-lazy-src="https://lipsum.app/id/31/640x640"
          />
        </div>
        <div className="f-carousel__slide">
          <img
            width="640"
            height="640"
            alt=""
            data-lazy-src="https://lipsum.app/id/35/640x640"
          />
        </div>
        <div className="f-carousel__slide">
          <img
            width="640"
            height="640"
            alt=""
            data-lazy-src="https://lipsum.app/id/35/640x640"
          />
        </div>
        <div className="f-carousel__slide">
          <img
            width="640"
            height="640"
            alt=""
            data-lazy-src="https://lipsum.app/id/35/640x640"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCarouselComponent;
