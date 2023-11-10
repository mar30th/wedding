import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { baseURL } from "../../constant/api";
import HandleModal from "../utils/HandleModal";


const Groom = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const srcMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.594695346563!2d106.67239037422605!3d10.765686989382417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee1ca5c4bbd%3A0xd46564515f1df8ef!2zVHJ1bmcgdMOibSBUacOqzKNjIGPGsMahzIFpIC0gSMO0zKNpIG5naGnMoyBXZXN0ZXJuIFBhbGFjZQ!5e0!3m2!1svi!2s!4v1696668657425!5m2!1svi!2s"
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
    <div className="parent grid px-4 md:grid-cols-2 md:px-0">
      <div className="md:col-span-1 md:order-last">
        <div className="">
          <img
            src={baseURL + "/avatar_img/groom.webp"}
            alt="Groom picture"
            className="transform scale-100 ease-in-out rounded-t md:round-0 border border-theme border-b-0 lg:border-0 lg:rounded"
          />
        </div>
      </div>
      <div className="flex items-center justify-center text-left p-4 align-self-center allow-drop border border-t-0 rounded-b border-theme md:border-0">
        <div className="text-center">
          <p>{t("groomPartyTime")}</p>
          <h3 className="text-4xl py-5 text-center">{t("groomParty")}</h3>
          <button
            onClick={showModal}
            className="my-4 bg-theme text-white font-semibold py-1 px-2 focus:outline-none rounded-xl border hover:bg-white hover:border-theme hover:text-theme transition-color duration-300"
            type="button"
          >
            {t("mapButton")}
          </button>
          <div className="text-left">
            <HandleModal
              title={t("groomResName")}
              lobby={t("groomResLobby")}
              address={t("groomResAddress")}
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

export default Groom;
