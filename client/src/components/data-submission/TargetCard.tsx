import React, { useState } from "react";

const TargetCard = ({ target, setSelectedTargets }) => {
    const [selectedButton, setSelectedButton] = useState<boolean>(false);
    const handleClicked = () => {
        setSelectedButton(!selectedButton);
        if (!selectedButton) {
            setSelectedTargets((prev) => [...(prev || []), target]);
        } else {
            setSelectedTargets((prev) =>
                (prev || []).filter((t) => t.id !== target.id)
            );
        }
    };
    
  return (
    <button
        onClick={handleClicked}
    >
      <img
        className={`${selectedButton ? "opacity-40" : ""} hover:scale-105 duration-300 fade-in-fwd`}
        src={target.icon}
        alt={target.name}
      />
    </button>
  );
};

export default TargetCard;
