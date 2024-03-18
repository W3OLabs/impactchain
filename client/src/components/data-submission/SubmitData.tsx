import React from "react";
import { GrClose } from "react-icons/gr";
import "bootstrap/dist/css/bootstrap.min.css";

const SubmitData = () => {
  return (
    <div className="fixed z-20 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-600 rounded w-full px-6 py-2 min-w-min max-w-[1200px] space-y-8">
          <div className="flex justify-end">
            <button
            //  onClick={() => setDataForm2(false)}
            >
              <GrClose className="text-2xl text-white mt-2" />
            </button>
          </div>
          <div className="min-h-96 px-32">
            <div className="ratio ratio-16x9">           
              <iframe
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex justify-end items-center mt-20 mb-10 ">
            <button className="mx-32 px-10 py-1.5 bg-custom-green rounded-full text-black font-bold">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitData;
