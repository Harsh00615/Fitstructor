import React from "react";
import "../pages/CSS/imgComponent.css";
import gym from "../components/Assets/gym.png";
import physical from "../components/Assets/physical.png";
import wellbeing from "../components/Assets/wellbeing.png";
import nutrition from "../components/Assets/nutrition.png";
import exclusive from "../components/Assets/exclusive.png";

export const ImgComponent = () => {
  return (
    <div>
        <div class="container">
        <div class="column left">
            <div class="card">
            <img src={require("../components/Assets/physical.png")} alt="Gym" />

                {/* <img src=""></img> */}
                <h2>RECOVERY HUB</h2>
                <p><strong>By CERTIFIED Physiotherapist</strong></p>
            </div>
            <div class="card">
                {/* <img src="playing_partner.png" alt="Playing Partner"></img> */}
                <img src={require("../components/Assets/nutrition.png")} alt="Gym" />
                <h2>NUTRITIONAL DIET PLAN</h2>
                <p><strong>To look best , eat best </strong></p>
            </div>
        </div>

        
        <div class="card large">
            {/* <img src="sports_pass.png" alt="Sports Pass"></img> */}
            <img src={require("../components/Assets/exclusive.png")} alt="Gym" />
            <h2>One pass for all your FITNESS needs</h2>
        </div>

        
        <div class="column right">
            <div class="card">
                {/* <img src="expert_coaches.png" alt="Expert Coaches"></img> */}
                <img src={require("../components/Assets/gym.png")} alt="Gym" />

                <h2> EXPERT COACHES</h2>
                <p><strong> For guided sessions </strong></p>
            </div>
            <div class="card">
                {/* <img src="heated_pools.png" alt="Heated Pools"></img> */}
                <img src={require("../components/Assets/wellbeing.png")} alt="Gym" />
                <h2>FITNESS MOTIVATION</h2>
                <p><strong>Providing bonus points , rewards , gifts</strong></p>
            </div>
        </div>
    </div>
    </div>
  )
}
