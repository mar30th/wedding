import React, { useEffect } from "react";
import p1 from "../../assets/img/1.jpg";
import p2 from "../../assets/img/2.jpg";
import p3 from "../../assets/img/3.jpg";
import p4 from "../../assets/img/4.jpg";
import p5 from "../../assets/img/5.jpg";
import p6 from "../../assets/img/banner.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { FetchGallery } from "../../store/WeddingManage/thunkActions";
import Fancybox from "../Fancybox";

const FullGallery = () => {
  const { galleryList } = useSelector(
    (state: RootState) => state.weddingManage
  );

  console.log(galleryList);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FetchGallery());
  }, [dispatch]);

  return (
    <div>
      <div className="md:w-3/4 mx-auto">
        <div className="mx-auto py-5">
          <div className="">
            <img
              src="https://templates.microweber.com/wedding/userfiles/templates/wedding/assets/img/decoration-3.svg"
              style={{ maxHeight: "40px", maxWidth: "500px", margin: "auto" }}
            />
          </div>
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
              <a data-fancybox="gallery" href={`http://localhost:8080` + img.link}>
                <img
                  src={`http://localhost:8080` + img.link}
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
