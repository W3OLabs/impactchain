import { targetOptions } from "../../data/constants";
import MeasurementItem from "./MeasurementItem";

const MeasurementCard = ({ target }) => {
  const measurement = targetOptions.find((t) => t.id === target.id);

  console.log(measurement);

  return (
    <div className="flex flex-col rounded-3xl bg-black p-10">
      <div className="flex items-center justify-center">
        <img src={measurement?.icon} alt={target.name} />
      </div>
      <div className="">
        {measurement?.measurements.map((m) => (
          <MeasurementItem key={m.id} {...{ m, target }} />
        ))}
      </div>
    </div>
  );
};

export default MeasurementCard;
