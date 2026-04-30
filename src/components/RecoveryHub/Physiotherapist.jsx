import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecoveryHub.css";

const Physiotherapist = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState({
    lat: 28.6139,
    lng: 77.2090,
  }); // default Delhi

  const [city, setCity] = useState("");

  // 📍 Auto detect location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => {
          console.log("Location access denied");
        }
      );
    }
  }, []);

  const handleSearch = () => {
    if (city.trim() !== "") {
      // Google Maps auto-search city
      window.open(
        `https://www.google.com/maps/search/physiotherapist+in+${city}`,
        "_blank"
      );
    }
  };

  return (
    <div className="recovery-wrapper">
      <div className="recovery-container">

        <button
  className="back-btn icon-only"
  onClick={() => navigate(-1)}
  aria-label="Go back"
>
  ⬅
</button>

        <h1 className="recovery-title">🔍 Physiotherapist Near Me</h1>

        {/* SEARCH BAR */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter city name (e.g. Mumbai)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {/* GOOGLE MAP */}
        <div className="map-container">
          <iframe
            title="Physiotherapist Map"
            src={`https://www.google.com/maps?q=physiotherapist&ll=${location.lat},${location.lng}&z=14&output=embed`}
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Physiotherapist;