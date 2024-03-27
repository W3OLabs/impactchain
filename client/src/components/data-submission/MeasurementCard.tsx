import { FC, useEffect, useState } from "react";
import { targetOptions } from "../../data/constants";
import MeasurementItem from "./MeasurementItem";
import {
  ImpactTarget,
  UserRecord,
} from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";

type Props = {
  target: ImpactTarget;
  record: UserRecord | null;
  setRecord: (record: UserRecord) => void;
  setTargets: (targets: ImpactTarget[]) => void;
  targets: ImpactTarget[];
};

const MeasurementCard: FC<Props> = ({
  target,
  setRecord,
  record,
  setTargets,
  targets,
}) => {
  const measurement = targetOptions.find((t) => t.id === Number(target.id));
  const [localTarget, setLocalTarget] = useState<ImpactTarget>(target);
  const [selectedMeasurements, setSelectedMeasurements] = useState<string[]>(
    []
  );

  console.log("Local Target", localTarget);

  useEffect(() => {
    const updatedTarget: ImpactTarget = {
      ...localTarget,
      measurements: [selectedMeasurements],
    };
    setLocalTarget(updatedTarget);
    const updatedTargets = targets.map((t) =>
      t.id === target.id ? updatedTarget : t
    );
    if (record) {
      const updatedRecord: UserRecord = {
        ...record,
        impactTargets: [updatedTargets],
      };
      setRecord(updatedRecord);
    }
  }, [selectedMeasurements]);

  console.log("Local Target", localTarget);
  console.log("Record", record);
  return (
    <div className="flex flex-col rounded-3xl bg-black p-10 slide-fwd-center">
      <div className="flex items-center justify-center">
        <img
          src={measurement?.icon}
          alt={target.name}
          className="h-[150px] w-[150px]"
        />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {measurement?.measurements.map((m) => (
          <MeasurementItem key={m.id} {...{ m, setSelectedMeasurements }} />
        ))}
      </div>
    </div>
  );
};

export default MeasurementCard;
