import { useState } from "react";
import { FaSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";

const MeasurementItem = ({ m, setSelectedMeasurements }) => {
  const [selectedButton, setSelectedButton] = useState<boolean>(false);

  const handleClicked = () => {
    setSelectedButton(!selectedButton);
    setSelectedMeasurements((prev) => [...(prev || []), m.description]);
  };
  return (
    <div
      onClick={handleClicked}
      className="flex items-center gap-3 text-white hover:cursor-pointer"
    >
      <span>
        {selectedButton ? (
            <FaSquare size={30} className=" text-white" />
        ) : (
            <FaRegSquare size={30} className=" text-white" />
        )}
      </span>
      <span className="leading-tight">{m.description}</span>
    </div>
  );
};

export default MeasurementItem;
