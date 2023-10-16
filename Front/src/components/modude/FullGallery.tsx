import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { FetchGallery } from "../../store/WeddingManage/thunkActions";
import Fancybox from "../utils/Fancybox";
import Decoration3 from "../decoration/Decoration3";

const FullGallery = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { galleryList } = useSelector(
    (state: RootState) => state.weddingManage
  );
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FetchGallery());
  }, [dispatch, galleryList]);

  return (
    <div>
      <div className="md:w-3/4 mx-auto">
        <div className="mx-auto py-5">
          {/* <div className="">
            <img
              src="https://templates.microweber.com/wedding/userfiles/templates/wedding/assets/img/decoration-3.svg"
              alt="decoration-3"
              style={{ maxHeight: "40px", maxWidth: "500px", margin: "auto" }}
            />
          </div> */}
          <Decoration3 />
          <button
            type="button"
            className="my-4 bg-theme text-white font-semibold py-4 px-9 focus:outline-none rounded-full border hover:bg-white hover:text-black hover:border-theme"
            onClick={() => {
              navigate("/");
            }}
          >
            Back To Wedding
          </button>
        </div>
      </div>
      <Fancybox>
        <div className="container w-3/4 my-5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryList?.map((img: { link: string }, index: number) => (
            <div key={index} className="box w-full break-inside-avoid">
              <a
                data-fancybox="gallery"
                href={baseUrl + img.link}
              >
                <img
                  src={baseUrl + img.link}
                  alt={`img`}
                  className="max-w-full rounded-2xl hover:opacity-80"
                />
              </a>
            </div>
          ))}
        </div>
      </Fancybox>
    </div>
  );
};

export default FullGallery;
