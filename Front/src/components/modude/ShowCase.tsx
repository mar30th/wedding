import React, { useEffect } from "react";
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

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchShowcase());
  }, [dispatch]);

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
              const scale = mapRange(
                0,
                1,
                1,
                1.2,
                1 - Math.abs(progress)
              );

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
      <div className="p-4">
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
          {/* {showcaseList?.map((img: { link: string }, index: number) => (
            <div className="f-carousel__slide">
              <a
                data-fancybox="gallery"
                href={baseUrl + img.link}
              >
                <img
                  className="hover:opacity-80"
                  width="640"
                  height="640"
                  alt=""
                  data-lazy-src={baseUrl + img.link}
                />
              </a>
            </div>
          ))} */}
        </div>
      </div>
    </Fancybox>
  );
};

export default ShowCase;
