import React from "react";
import p1 from "../../assets/img/1.jpg";

const Groom = () => {
  return (
    <div className="parent grid px-4 md:grid-cols-2 md:px-0">
      <div className="child md:col-span-1 md:order-last">
        <img src="http://localhost:8080/public/avatar_img/groom.webp"/>
      </div>
      <div className="flex items-center justify-center text-left p-4 align-self-center allow-drop border border-t-0 border-theme md:border-0">
        <div className="text-center">
          <p>Saturday | 02-12-2023 | 06:00 PM.</p>
          <h3 className="text-4xl py-5 text-center">Groom's Party</h3>
            {/* Modal toggle */}
            <button
              data-modal-target="groomModal"
              data-modal-toggle="groomModal"
              className="my-4 bg-theme text-white font-semibold py-1 px-2 focus:outline-none rounded-xl border hover:bg-white hover:text-black hover:border-theme hover:text-theme"
              type="button"
            >
              Where to go
            </button>
          <div className="text-left">
            {/* Main modal */}
            <div
              id="groomModal"
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
                      Western Palace Wedding & Convention
                      <br />
                      <span className="opacity-50 text-sm">
                        Spring Palace Lobby - 4th Floor <br />
                        443 - 445 Le Hong Phong Street, Ward 2, District 10, Ho
                        Chi Minh City, Vietnam
                      </span>
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                      data-modal-hide="groomModal"
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.594695346563!2d106.67239037422605!3d10.765686989382417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ee1ca5c4bbd%3A0xd46564515f1df8ef!2zVHJ1bmcgdMOibSBUacOqzKNjIGPGsMahzIFpIC0gSMO0zKNpIG5naGnMoyBXZXN0ZXJuIFBhbGFjZQ!5e0!3m2!1svi!2s!4v1696668657425!5m2!1svi!2s"
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

export default Groom;
