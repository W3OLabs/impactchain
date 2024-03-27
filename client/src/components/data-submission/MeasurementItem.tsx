import { FaSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";

const MeasurementItem = ({ m, target }) => {
  console.log(m, target);
  return (
    <div className="flex items-center gap-3 text-white">
        <span><FaRegSquare size={25} className=" text-white"/></span>
      <span>{m.description}</span>
    </div>
  );
};

export default MeasurementItem;
