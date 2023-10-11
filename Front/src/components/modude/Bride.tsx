import React from "react";
import p1 from "../../assets/img/1.jpg";

const Bride = () => {
  return (
    <div className="grid px-4 md:grid-cols-2 md:px-0 md:mb-0 mb-2">
      <div className="md:col-span-1">
        <div className="">
          <img
            src={p1}
            alt=""
            style={{ height: "444px", width: "566px" }}
            className="transform scale-100 hover:opacity-70 transition-transform duration-300 ease-in-out rounded-t md:round-0"
          />
        </div>
      </div>
      <div className="flex items-center justify-center text-left p-4 align-self-center allow-drop border border-t-0 border-theme md:border-0">
        <div className="child text-center">
          <p>Saturday | 18-11-2023 | 11:00 AM.</p>
          <h3 className="text-4xl py-5 text-center">Bride's Party</h3>
          {/* Modal toggle */}
          <button
            data-modal-target="brideModal"
            data-modal-toggle="brideModal"
            className="my-4 bg-theme text-white font-semibold py-1 px-2 focus:outline-none rounded-xl border hover:bg-white hover:text-black hover:border-theme hover:text-theme"
            type="button"
          >
            Where to go
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
                      Pleiku Palace
                      <br />
                      <span className="opacity-50 text-sm">
                        Vien Ngoc Xanh 1 Lobby
                        <br />
                        03 Nguyen Tat Thanh Street, Ward Hoa Lu, Pleiku City,
                        Gia Lai
                      </span>
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
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
