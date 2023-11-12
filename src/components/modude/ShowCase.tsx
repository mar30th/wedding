import React, { useEffect, useMemo, useRef } from "react";
import "@fancyapps/ui/dist/carousel/carousel.css";
import "./css/showcase.css";
import Fancybox from "../utils/Fancybox";
import { baseURL } from "../../constant/api";
import showcaseImg from "../../assets/showcase_img/showcase.json";
import Decoration2 from "../decoration/Decoration2";
import { handleShowcase } from "../utils/handleCarousel";

const ShowCase = () => {
  const showcaseList = useMemo(() => showcaseImg, []);
  const showCaseCarouselRef = useRef(null);

  useEffect(() => {
    if (showcaseList.length > 0 && showCaseCarouselRef.current) {
      handleShowcase(showcaseList, showCaseCarouselRef);
    }
  }, []);

  return (
    <div>
      <div className="text-2xl md:text-5xl font-semibold my-4 md:my-12">
        <h1 className="text-[22px] lg:text-[35px] font-extrabold tracking-widest text-center font-montserrat my-4 md:my-8">
          Chấn Đông & Bích Phương
        </h1>
      </div>
      <Fancybox
        options={{
          Thumbs: {
            type: "none",
          },
        }}
      >
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
      <Decoration2 />
    </div>
  );
};

export default ShowCase;

{
  /* <div className="text-2xl md:text-5xl font-semibold my-4 md:my-12">
<h1 className="text-[22px] lg:text-[35px] font-extrabold tracking-widest text-center font-montserrat my-4 md:my-8">
  Chấn Đông & Bích Phương
</h1>
</div>
<ShowCase />
</div> */
}
