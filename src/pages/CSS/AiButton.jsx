import React from "react";
import { FaRobot } from "react-icons/fa";
import "./AI.css";

const AiButton = () => {
  const openAI = () => {
    window.open("https://opal.google/app/1H0dRZRKT_D9CzFNiWOanz0A6BMDWh1Ri", "_blank");
  };

  return (
    <button className="ai-button" onClick={openAI}>
      <FaRobot />
    </button>
  );
};

export default AiButton;