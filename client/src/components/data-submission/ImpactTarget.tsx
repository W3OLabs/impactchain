import React, { useState } from "react";
import TargetCard from "./TargetCard";
import { setDataComponent, setShowDataForm, setUserRecord } from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import { TargetOption, targetOptions } from "../../data/constants";
import { RootState } from "../../redux/store";
import { useAuth } from "../../hooks/AppContext";
import {
  ImpactTarget as ImpactTargetType,
  UserRecord,
} from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";

const ImpactTarget = () => {
  const { userRecord } = useSelector((state: RootState) => state.app);
  const { dataActor } = useAuth();
  const [selectedTargets, setSelectedTargets] = useState<TargetOption[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setDataComponent("ProfileLogo"));
  };

  const handleNext = () => {
    dispatch(setShowDataForm(false));
  };

  const handleSubmit = async () => {
    if (selectedTargets && dataActor && userRecord) {
      try {
        setLoading(true);
        const tragets: ImpactTargetType[] = selectedTargets.map((target) => {
          return {
            id: BigInt(target.id),
            name: target.name,
            measurements: [],
            targetRecords: [],
          };
        });
        const data: UserRecord = {
          ...userRecord,
          impactTargets: [tragets],
        };
        dispatch(setUserRecord(data));
        await dataActor.addUserRecord(data);
        dispatch(setDataComponent("Measurements"));
      } catch (error) {
        console.log("Error adding impact targets", error);
      }
    } else {
      setLoading(false);
      console.log("Error adding impact targets, no dataActor or userRecord");
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold ">
        What Impact are you targeting?
      </h3>
      <div className="grid grid-cols-6 gap-4 mt-6 bg-black p-10 rounded-3xl mb-10">
        {targetOptions.map((target) => (
          <div
            key={target.id}
            className="rounded-lg flex items-center justify-center"
          >
            <TargetCard {...{ target, setSelectedTargets }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-20 mb-10 mx-20 ">
        <button onClick={handleBack}>
          <span className="text-custom-green">Back</span>
        </button>
        <button
          onClick={handleSubmit}
          className={` ${
            selectedTargets ? "bg-custom-green" : "bg-green-700"
          } px-10 py-1.5  rounded-full text-black font-bold`}
        >
         {loading ? "Loading..." : "Save & Continue"}
        </button>
        <button onClick={handleNext}>
          <span className="text-custom-green">Skip</span>
        </button>
      </div>
    </div>
  );
};

export default ImpactTarget;
