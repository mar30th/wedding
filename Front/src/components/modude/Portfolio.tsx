import React from "react";
import p1 from "../../assets/img/1.jpg";
import p2 from "../../assets/img/2.jpg";
import Groom from "./Groom";
import Bride from "./Bride";
import ShowCase from "./ShowCase";
import { useTranslation } from "react-i18next";
import Decoration1 from "../decoration/Decoration1";
import Decoration3 from "../decoration/Decoration3";

const Portfolio = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="md:w-4/5 mx-auto py-10">
      <Decoration1 />
      <div className="mx-auto text-4xl md:text-5xl text-center font-semibold ">
        <div className="grid md:grid-cols-12">
          <div className="col-span-12">
            <h2 className="my-10">{t("wedReception")}</h2>
          </div>
        </div>
      </div>
      <div>
        <Bride />
        <Groom />
      </div>
      <Decoration3 />
    </div>
  );
};

export default Portfolio;
