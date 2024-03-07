import React from "react";
import { GrClose } from "react-icons/gr";

const SubmitData = () => {
  return (
    <div className="fixed z-20 inset-0 text-cyan-700 overflow-y-auto bg-cyan-700 bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white w-full px-6 py-2 min-w-min max-w-[1200px] space-y-8">
          <div className="flex justify-end">
            <button
            //  onClick={() => setDataForm2(false)}
            >
              <GrClose className="text-2xl mt-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitData;
