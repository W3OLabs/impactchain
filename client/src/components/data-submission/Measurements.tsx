import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MeasurementCard from "./MeasurementCard";
import { ImpactTarget, UserRecord } from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";


const Measurements = () => {
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [record, setRecord] = useState<UserRecord | null>(null);
  const [targets, setTargets] = useState<ImpactTarget[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (userRecord) {
      setRecord(userRecord);
    }
  }, [userRecord]);

  if (!userRecord || !userRecord.impactTargets[0]) {
    return null;
  }

  const innerTargets = userRecord?.impactTargets[0][0] as unknown as ImpactTarget[];

  const sortedTargets = [...innerTargets].sort((a, b) => Number(a.id) - Number(b.id));



  const displayedTargets = sortedTargets.slice(currentIndex, currentIndex + 3);
   

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, innerTargets.length - 3));
  };

  console.log()

  return (
    <div>
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
        What do you need to measure?
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {displayedTargets.map((target: ImpactTarget) => (
          <MeasurementCard {...{ target, record, setRecord, setTargets, targets }} />
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
