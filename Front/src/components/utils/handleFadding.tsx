import { useEffect } from "react";
import { Carousel } from "@fancyapps/ui";
import { mapRange } from "../utils/mapRange";

export const handleFading = (fadingList: any, fadingCarouselRef: any) => {
    if (fadingList && fadingList.length > 0 && fadingCarouselRef.current) {
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
};
