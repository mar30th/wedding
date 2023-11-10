import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { baseURL } from "../../constant/api";
import HandleModal from "../utils/HandleModal";

const Bride = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const srcMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.7702199282749!2d108.00657234442748!3d13.985938100000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1f5df83ab76b%3A0xf8ab08a344fd65c5!2sPleiku%20Palace!5e0!3m2!1svi!2s!4v1696671514448!5m2!1svi!2s";

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid px-4 md:grid-cols-2 md:px-0 md:mb-0 mb-2">
      <div className="md:col-span-1">
        <div className="">
          <img
            src={baseURL + "/avatar_img/bride.webp"}
            alt="Bride picture"
            className="border border-theme border-b-0 rounded-t lg:rounded lg:border-0"
          />
        </div>
      </div>
      <div className="flex items-center justify-center text-left p-4 align-self-center allow-drop border border-t-0 border-theme rounded-b lg:border-0">
        <div className="child text-center">
          <p>{t("bridePartyTime")}</p>
          <h3 className="text-4xl py-5 text-center">{t("brideParty")}</h3>
          <button
            onClick={showModal}
            className="my-4 bg-theme text-white font-semibold py-1 px-2 focus:outline-none rounded-xl border hover:bg-white hover:border-theme hover:text-theme transition-color duration-300"
            type="button"
          >
            {t("mapButton")}
          </button>
          <div className="text-left">
            <HandleModal
              title={t("brideResName")}
              lobby={t("brideResLobby")}
              address={t("brideResAddress")}
              srcMap={srcMap}
              isModalOpen={isModalOpen}
              handleCancel={handleCancel}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bride;
