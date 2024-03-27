import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MeasurementCard from "./MeasurementCard";

// Assuming you have an ImpactTarget type defined somewhere
interface ImpactTarget {
  // Define the properties of an ImpactTarget here
}

const Measurements = () => {
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!userRecord || userRecord.impactTargets.length === 0 || userRecord.impactTargets[0].length === 0) {
    return null;
  }

  const innerTargets = userRecord.impactTargets[0][0] as unknown as ImpactTarget[];

  const displayedTargets = innerTargets.slice(currentIndex, currentIndex + 3);
  

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, innerTargets.length - 3));
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
        What do you need to measure?
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {displayedTargets.map((target: ImpactTarget) => (
          <MeasurementCard {...{ target }} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePrevious} className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" disabled={currentIndex + 3 >= innerTargets.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Measurements;
