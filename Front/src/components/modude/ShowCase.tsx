import React, { useEffect, useRef } from "react";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./css/showcase.css";
import { Carousel } from "@fancyapps/ui";
import Fancybox from "../utils/Fancybox";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { FetchShowcase } from "../../store/WeddingManage/thunkActions";
import { mapRange } from "../utils/mapRange";

const ShowCase = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const { showcaseList } = useSelector(
    (state: RootState) => state.weddingManage
  );
  const showCaseCarouselRef = useRef(null);


  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchShowcase());
  }, [dispatch]);

  useEffect(() => {
    if (showcaseList && showcaseList.length > 0 && showCaseCarouselRef.current) {
      new Carousel(
        showCaseCarouselRef.current,
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
    }
  }, [showcaseList]);

  return (
    <Fancybox>
      <div className="p-4">
        <div className="f-carousel" ref={showCaseCarouselRef} id="showCaseCarousel">
          {showcaseList?.map((img, index) => (
            <div key={index} className="f-carousel__slide">
              <a data-fancybox="gallery" href={baseUrl + img.link}>
                <img
                  className="hover:opacity-80"
                  width="640"
                  height="640"
                  alt=""
                  data-lazy-src={baseUrl + img.link}
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

