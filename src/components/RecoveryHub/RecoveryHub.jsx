import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecoveryHub.css";

const RecoveryHub = () => {
  const navigate = useNavigate();

  return (
    <div className="recovery-wrapper">
      <div className="recovery-container">

        <h1 className="recovery-title">🏥 Recovery Hub</h1>

        {/* PHYSIOTHERAPIST SECTION (NEW) */}
        <div
          className="recovery-card physio-card"
          onClick={() => navigate("/physiotherapist")}
        >
          <h2>🔍 Physiotherapist Near Me</h2>
          <p>
            Find certified physiotherapists near your location for expert care.
          </p>
        </div>

        {/* INJURIES */}
        <div className="recovery-card">
          <h2>🩹 Common Injuries</h2>

          <div className="injury-grid">

            {/* 1 */}
            <div className="injury-card">
              <h3>Back Pain</h3>
              <iframe src="https://www.youtube.com/embed/2VuLBYrgG94" title="Back Pain" allowFullScreen></iframe>
              <p>
                ✔ Maintain posture <br />
                ✔ Stretch daily <br />
                ✔ Avoid heavy lifting
              </p>
            </div>

            {/* 2 */}
            <div className="injury-card">
              <h3>Knee Pain</h3>
              <iframe src="https://www.youtube.com/embed/yXfCJD79wqE?si=0RkRo33IYNd25ySi" title="Knee Pain" allowFullScreen></iframe>
              <p>
                ✔ Strengthen muscles <br />
                ✔ Avoid jumping <br />
                ✔ Use support
              </p>
            </div>

            {/* 3 ✅ UPDATED */}
            <div className="injury-card">
              <h3>Shoulder Pain</h3>
              <iframe src="https://www.youtube.com/embed/ssH35JwmwTM" title="Shoulder Pain" allowFullScreen></iframe>
              <p>
                ✔ Warm up properly <br />
                ✔ Avoid overtraining <br />
                ✔ Do mobility exercises
              </p>
            </div>

            <div className="injury-card">
  <h3>Ankle Sprain</h3>

  <iframe
    src="https://www.youtube.com/embed/t0L7Aw1zLB0?si=XqzSPZ_s_-9HQ_8Y"
    title="Ankle Sprain Rehab Exercises"
    allowFullScreen
  ></iframe>

  <p>
    ✔ Rest properly <br />
    ✔ Apply ice for swelling <br />
    ✔ Keep foot elevated
  </p>
</div>

            {/* 5 */}
            <div className="injury-card">
              <h3>Hamstring Strain</h3>
              <iframe src="https://www.youtube.com/embed/X3-gKPNyrTA" title="Hamstring" allowFullScreen></iframe>
              <p>
                ✔ Stretch regularly <br />
                ✔ Avoid sudden movement <br />
                ✔ Warm up before exercise
              </p>
            </div>

            {/* 6 */}
            <div className="injury-card">
              <h3>Lower Back Strain</h3>
              <iframe src="https://www.youtube.com/embed/2VuLBYrgG94" title="Lower Back" allowFullScreen></iframe>
              <p>
                ✔ Core strengthening <br />
                ✔ Maintain posture <br />
                ✔ Avoid bending incorrectly
              </p>
            </div>

            {/* 7 */}
            <div className="injury-card">
              <h3>Neck Pain</h3>
              <iframe src="https://www.youtube.com/embed/2NOsE-VPpkE" title="Neck Pain" allowFullScreen></iframe>
              <p>
                ✔ Neck stretches <br />
                ✔ Avoid screen strain <br />
                ✔ Maintain posture
              </p>
            </div>

            <div className="injury-card">
  <h3>Elbow Pain</h3>

  <iframe
    src="https://www.youtube.com/embed/7kTNk3qEuLM?si=52dcjxNI8UA2W21v"
    title="Tennis Elbow Exercises"
    allowFullScreen
  ></iframe>

  <p>
    ✔ Avoid overuse <br />
    ✔ Apply ice daily <br />
    ✔ Do light strengthening exercises
  </p>
</div>

            {/* 9 */}
            <div className="injury-card">
              <h3>Wrist Pain</h3>
              <iframe src="https://www.youtube.com/embed/hUyMNyrOHJQ" title="Wrist Pain" allowFullScreen></iframe>
              <p>
                ✔ Stretch regularly <br />
                ✔ Avoid overload <br />
                ✔ Use wrist support
              </p>
            </div>

            {/* 10 */}
            <div className="injury-card">
              <h3>Shin Splints</h3>
              <iframe src="https://www.youtube.com/embed/yZxnb1eqLfo" title="Shin Splints" allowFullScreen></iframe>
              <p>
                ✔ Proper footwear <br />
                ✔ Reduce running intensity <br />
                ✔ Ice therapy
              </p>
            </div>

            {/* 11 ✅ UPDATED */}
            <div className="injury-card">
              <h3>Calf Strain</h3>
              <iframe src="https://www.youtube.com/embed/k50hrc5Uadg?si=JYRgLG4EPJmfphHY" title="Calf Strain" allowFullScreen></iframe>
              <p>
                ✔ Stretch regularly <br />
                ✔ Stay hydrated <br />
                ✔ Warm up properly
              </p>
            </div>

            {/* 12 */}
            <div className="injury-card">
              <h3>Hip Pain</h3>
              <iframe src="https://www.youtube.com/embed/TQycKHiJlZg?si=oOO-ap7NSWJO7q29" title="Hip Pain" allowFullScreen></iframe>
              <p>
                ✔ Improve mobility <br />
                ✔ Strength training <br />
                ✔ Avoid overuse
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default RecoveryHub;