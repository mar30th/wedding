import React, { useEffect, useMemo, useRef } from "react";
import Fancybox from "../utils/Fancybox";
import "./css/fading.css";
import { baseURL } from "../../constant/api";
import fadingImg from "../../assets/fading_img/fading_img.json";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { handleFading } from "../utils/handleCarousel";

const Fading = () => {
  const fadingList = useMemo(() => fadingImg, []);
  const fadingCarouselRef = useRef(null);

  useEffect(() => {
    if (fadingList.length > 0 && fadingCarouselRef.current) {
      handleFading(fadingList, fadingCarouselRef)
    }
  }, [])

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-widest text-center font-montserrat my-4 md:my-8">
        Save The Date
      </h1>
      <div className="p-4">
        <div
          ref={fadingCarouselRef}
          id="fadingCarousel"
          className="f-carousel lg:grid lg:grid-cols-[360px_1fr]"
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
                  <LeftOutlined 
                  data-carousel-prev
                  className="px-3 mr-1 py-[10px] bg-theme text-white font-semibold border hover:bg-white border-theme hover:text-theme rounded-md leading-none transition-color duration-300"/>

                  <RightOutlined 
                  onClick={() => {console.log("ok");
                  }}
                  data-carousel-next
                  className="px-3 py-[10px] bg-theme text-white font-semibold border hover:bg-white border-theme hover:text-theme rounded-md leading-none transition-color duration-300"
                  />
              </p>
            </div>
          </div>
          <div className="lg:ml-[-360px]">
            <Fancybox
              options={{
                Thumbs: {
                  type: "none",
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
