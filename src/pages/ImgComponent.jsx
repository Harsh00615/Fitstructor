import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/CSS/imgComponent.css";

import gym from "../components/Assets/gym.png";
import physical from "../components/Assets/physical.png";
import wellbeing from "../components/Assets/wellbeing.png";
import nutrition from "../components/Assets/nutrition.png";
import exclusive from "../components/Assets/exclusive.png";

export const ImgComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        
        {/* LEFT COLUMN */}
        <div className="column left">
          <div className="card"
            onClick={() => navigate("/recovery")}
            style={{ cursor: "pointer" }}
          >
            <img src={physical} alt="Recovery" />
            <h2>RECOVERY HUB</h2>
            <p><strong>By CERTIFIED Physiotherapist</strong></p>
          </div>

          {/* 🔥 CLICKABLE CARD */}
          <div
            className="card"
            onClick={() => navigate("/diet")}
            style={{ cursor: "pointer" }}
          >
            <img src={nutrition} alt="Nutrition" />
            <h2>NUTRITIONAL DIET PLAN</h2>
            <p><strong>To look best , eat best</strong></p>
          </div>
        </div>

        {/* CENTER CARD */}
        <div className="card large">
          <img src={exclusive} alt="Exclusive" />
          <h2>One pass for all your FITNESS needs</h2>
        </div>

        {/* RIGHT COLUMN */}
        <div className="column right">
          <div className="card">
            <img src={gym} alt="Gym" />
            <h2>EXPERT COACHES</h2>
            <p><strong>For guided sessions</strong></p>
          </div>

          <div className="card">
            <img src={wellbeing} alt="Wellbeing" />
            <h2>FITNESS MOTIVATION</h2>
            <p><strong>Providing bonus points, rewards, gifts</strong></p>
          </div>
        </div>

      </div>
    </div>
  );
};