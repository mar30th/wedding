import React from "react";
import { useTranslation } from "react-i18next";
import { baseURL } from "../../constant/api";


const Bride = () => {
  const { t, i18n } = useTranslation();

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
          {/* Modal toggle */}
          <button
            data-modal-target="brideModal"
            data-modal-toggle="brideModal"
            className="my-4 bg-theme text-white font-semibold py-1 px-2 focus:outline-none rounded-xl border hover:bg-white hover:border-theme hover:text-theme transition-color duration-300"
            type="button"
          >
            {t("mapButton")}
          </button>
          <div className="text-left">
            {/* Main modal */}
            <div
              id="brideModal"
              tabIndex={-1}
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow">
                  {/* Modal header */}
                  <div className="flex items-start justify-between p-4 border-b rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t("brideResName")}
                      <br />
                      <span className="opacity-50 text-sm">
                        {t("brideResLobby")}
                        <br />
                        {t("brideResAddress")}
                      </span>
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-theme hover:text-white rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center transition-color duration-300"
                      data-modal-hide="brideModal"
                    >
                      <svg
                        className="w-1 h-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="p-1">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.7702199282749!2d108.00657234442748!3d13.985938100000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1f5df83ab76b%3A0xf8ab08a344fd65c5!2sPleiku%20Palace!5e0!3m2!1svi!2s!4v1696671514448!5m2!1svi!2s"
                      width={"100%"}
                      height={300}
                      style={{
                        border: 0,
                        borderRadius: "10px",
                        margin: "auto",
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Bride;
