import React, { useState } from "react";
import "./Fitpass.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Fitpassimg from "../Assets/Fitpassimg.png";
import Fitpassimg2 from "../Assets/Fitpassimg2.png"; 

/* 🔥 DURATIONS */
const durations = [
  { label: "12 MONTHS", price: 974 },
  { label: "6 MONTHS", price: 1582 },
  { label: "3 MONTHS", price: 2597 },
  { label: "24 MONTHS", price: 754 },
  { label: "1 MONTH", price: 5490 },
];

/* 🔥 PLAN DATA (DURATION BASED) */
const planData = [
  {
    duration: "12 MONTHS",
    proPlus: { price: 1049, total: 12590, pause: 60, sessions: 60, credits: 100 },
    pro: { price: 974, total: 11690, pause: 30, sessions: 30, credits: 50 },
  },
  {
    duration: "6 MONTHS",
    proPlus: { price: 1698, total: 10190, pause: 30, sessions: 30, credits: 50 },
    pro: { price: 1582, total: 9490, pause: 15, sessions: 15, credits: 25 },
  },
  {
    duration: "3 MONTHS",
    proPlus: { price: 2797, total: 8390, pause: 10, sessions: 15, credits: 30 },
    pro: { price: 2597, total: 7790, pause: 5, sessions: 10, credits: 15 },
  },
  {
    duration: "24 MONTHS",
    proPlus: { price: 754, total: 18096, pause: 90, sessions: 90, credits: 150 },
    pro: { price: 700, total: 16800, pause: 60, sessions: 60, credits: 100 },
  },
  {
    duration: "1 MONTH",
    proPlus: { price: 5490, total: 5490, pause: 0, sessions: 5, credits: 10 },
    pro: { price: 4990, total: 4990, pause: 0, sessions: 3, credits: 5 },
  },
];

/* 🔥 CATEGORY DATA (WITH PRICING CARDS) */
const categoryPlans = {
  strength: {
    title: "Strength Training",
    plans: [
      { name: "Discover", price: 99 },
      { name: "Enterprise", price: 299 },
      { name: "Professional", price: 199 },
    ],
  },
  yoga: {
    title: "Basic Yoga",
    plans: [
      { name: "Discover", price: 79 },
      { name: "Enterprise", price: 199 },
      { name: "Professional", price: 149 },
    ],
  },
  bodybuilding: {
    title: "Gym",
    plans: [
      { name: "Discover", price: 129 },
      { name: "Enterprise", price: 349 },
      { name: "Professional", price: 249 },
    ],
  },
  weightloss: {
    title: "Cardio",
    plans: [
      { name: "Discover", price: 89 },
      { name: "Enterprise", price: 249 },
      { name: "Professional", price: 179 },
    ],
  },
};

const Fitpass = () => {
  const [selected, setSelected] = useState(0); // duration
  const [activeCategory, setActiveCategory] = useState("strength"); // category

  const currentPlan = planData[selected];
  const currentCategory = categoryPlans[activeCategory];

  return (
    <>
      <Navbar />

      {/* 🔥 BANNER */}
      <div className="fitpass-banner">
        <img src={Fitpassimg} alt="Fitpass Banner" />
      </div>

      <div className="fitstructor">

        {/* 🔥 CATEGORY SELECT */}
        <div className="features">
          <div
            className={`feature-card ${activeCategory === "strength" ? "active" : ""}`}
            onClick={() => setActiveCategory("strength")}
          >
            Strength Training
          </div>

          <div
            className={`feature-card ${activeCategory === "yoga" ? "active" : ""}`}
            onClick={() => setActiveCategory("yoga")}
          >
            Basic Yoga
          </div>

          <div
            className={`feature-card ${activeCategory === "bodybuilding" ? "active" : ""}`}
            onClick={() => setActiveCategory("bodybuilding")}
          >
            Body Building
          </div>

          <div
            className={`feature-card ${activeCategory === "weightloss" ? "active" : ""}`}
            onClick={() => setActiveCategory("weightloss")}
          >
            Weight Loss
          </div>
        </div>
 

        {/* 🔥 TITLE */}
        <h1 className="title">{currentCategory.title} Plans</h1>
        <p className="subtitle">Flexible plans for your fitness needs</p>

        {/* 🔥 PRICING CARDS */}
        <div className="pricing">
          <div className="pricing-cards">
            {currentCategory.plans.map((plan, index) => (
              <div
                key={index}
                className={`price-card ${index === 1 ? "active" : ""}`}
              >
                <h4>{plan.name}</h4>
                <h1>${plan.price}</h1>
                <p>/ month</p>

                <ul>
                  <li>✔ 5 sessions</li>
                  <li>✔ Trainer support</li>
                  <li>✔ Diet guidance</li>
                  <li>✔ Flexible timing</li>
                </ul>

                <button className="choose-btn">Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
       {/* 🔥 MID IMAGE BANNER */}
<div className="mid-banner">
  <img src={Fitpassimg2} alt="Mid Banner" />
</div>
        {/* 🔥 DURATION SELECT */}
        <div className="duration">
          {durations.map((d, i) => (
            <div
              key={i}
              className={`duration-card ${selected === i ? "active" : ""}`}
              onClick={() => setSelected(i)}
            >
              <h3>{d.label}</h3>
              <p>₹{d.price}/mo*</p>
            </div>
          ))}
        </div>

        {/* 🔥 TABLE */}
        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th></th>
                <th className="highlight">
                  PRO PLUS <p>₹{currentPlan.proPlus.price}/mo*</p>
                </th>
                <th>
                  PRO <p>₹{currentPlan.pro.price}/mo*</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Membership Pause Days</td>
                <td>{currentPlan.proPlus.pause}</td>
                <td>{currentPlan.pro.pause}</td>
              </tr>

              <tr>
                <td>Other City Sessions</td>
                <td>{currentPlan.proPlus.sessions}</td>
                <td>{currentPlan.pro.sessions}</td>
              </tr>

              <tr>
                <td>Access Credits</td>
                <td>{currentPlan.proPlus.credits}</td>
                <td>{currentPlan.pro.credits}</td>
              </tr>

              <tr>
                <td>Membership Transfer</td>
                <td className="tick">✔</td>
                <td className="cross">✖</td>
              </tr>

              <tr>
                <td>Video Workouts</td>
                <td className="tick">✔</td>
                <td>10000</td>
              </tr>

              <tr className="price-row">
                <td>Total Payable</td>
                <td>₹{currentPlan.proPlus.total}</td>
                <td>₹{currentPlan.pro.total}</td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button className="buy-btn">BUY</button>
                </td>
                <td>
                  <button className="buy-btn">BUY</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Fitpass;