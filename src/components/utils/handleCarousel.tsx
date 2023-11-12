import { Carousel } from "@fancyapps/ui";
import { mapRange } from "./mapRange";

export const handleFading = (fadingList: any, fadingCarouselRef: any) => {
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
};

export const handleShowcase = (showcaseList: any, showCaseCarouselRef: any) => {
  new Carousel(showCaseCarouselRef.current, {
    Dots: false,
    slidesPerPage: 1,
    infinite: true,
    on: {
      "Panzoom.beforeTransform": (carousel) => {
        carousel.slides.map((slide: any) => {
          const progress = carousel.getProgress(slide.index);
          const scale = mapRange(0, 1, 1, 1.2, 1 - Math.abs(progress));
          slide.el.style.setProperty("--f-scale", scale);
          slide.el.style.setProperty("--f-translateX", `${progress * -10}%`);
        });
      },
    },
  });
};