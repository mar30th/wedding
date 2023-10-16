import React, { useEffect } from "react";
import Fancybox from "../Fancybox";
import { Carousel } from "@fancyapps/ui";
import "./css/fading.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { FetchGallery } from "../../store/WeddingManage/thunkActions";

const Fading = () => {

  const baseUrl = process.env.REACT_APP_BASE_URL;
 
  const { galleryList } = useSelector(
    (state: RootState) => state.weddingManage
  );
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchGallery());
  }, [dispatch]);


  const mapFadingRange = (
    inputLower: any,
    inputUpper: any,
    outputLower: any,
    outputUpper: any,
    value: any
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    return (
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
    );
  };
  
  useEffect(() => {
    const fadingCarousel = new Carousel(
      document.getElementById("fadingCarousel"),
      {
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
              const scale = mapFadingRange(0, 1, 0.8, 1, progress);

              slide.el.style.setProperty("--f-scale", `${scale}`);
              slide.el.style.setProperty("--f-progress", `${progress}`);
            });
          },
        },
      }
    );

    return () => {
      // Clean up and destroy the Carousel when the component unmounts
      fadingCarousel.destroy();
    };
  }, []);

  return (
    <div>
      <div className="p-4">
        <div
          id="fadingCarousel"
          className="mb-9 f-carousel lg:grid lg:grid-cols-[360px_1fr] text-slate-700"
        >
          <div className="py-4 pr-10 z-10">
            <h2 className="mb-6 font-serif font-semibold text-2xl">
              Our Best Moments
            </h2>
            <p className="mb-6 text-xl">
              We are grateful to God and to destiny for meeting you in this
              life. My love, thank you for those beautiful moments we shared
              together. Rejoice us!
            </p>
            <p className="font-serif text-3xl">
              <button data-carousel-prev className="px-3 mr-1 h-10 bg-theme text-white font-semibold border hover:bg-white hover:border-theme hover:text-theme rounded-md leading-none">
                ←
                </button>
              <button data-carousel-next className="px-3 h-10 bg-theme text-white font-semibold border hover:bg-white hover:border-theme hover:text-theme rounded-md leading-none">
                →
              </button>
            </p>
          </div>
          <div className="lg:ml-[-360px]">
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
              <div className="f-carousel__viewport lg:pl-[360px]">
                <div className="f-carousel__track items-baseline">
                  {galleryList
                    ?.slice(1, 6)
                    .map((img: { link: string }, index: number) => (
                      <div key={index} className="f-carousel__slide">
                        <a
                          data-fancybox="gallery"
                          href={baseUrl + img.link}
                        >
                          <img
                            className="mb-4 w-full rounded-lg hover:opacity-80"
                            width={300}
                            height={400}
                            src={baseUrl + img.link}
                          />
                        </a>
                      </div>
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
