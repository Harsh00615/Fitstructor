import React, { useState } from "react";
import "./Expert.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const data = {
  yoga: ["v7AYKMP6rOE", "4pKly2JojMw", "oBu-pQG6sTY", "2pLT-olgUJs"],
  strength: ["U0bhE67HuDY", "2tM1LFFxeKg", "rT7DgCr-3pg", "6kALZikXxLc"],
  bodybuilding: ["lA-diBuGy6I", "IODxDxX7oi4", "q7rCeOa_m58", "y83qwTu0phM"],
  weight: ["UBMk30rjy0o", "IT94xC35u6k", "2MoGxae-zyo", "ml6cT4AZdqI"],
};

const Expert = () => {
  const [active, setActive] = useState("yoga");
  const [modalVideo, setModalVideo] = useState(null);

  const heroVideo = data[active][0];
  const recommendations = data[active].slice(1);

  return (
    <>
      <Navbar />

      {/* 🔥 HERO SECTION */}
      <div className="hero">
        <iframe
          src={`https://www.youtube.com/embed/${heroVideo}?autoplay=1&mute=1`}
          title="hero"
          allowFullScreen
        />

        <div className="hero-content">
          <h1>{active.toUpperCase()} TRAINING</h1>
          <p>Train with expert coaches and transform your fitness journey.</p>
          <button onClick={() => setModalVideo(heroVideo)}>
            ▶ Play Workout
          </button>
        </div>
      </div>

      {/* 🔥 CATEGORY CHIPS */}
      <div className="categories">
        {Object.keys(data).map((cat) => (
          <span
            key={cat}
            className={active === cat ? "chip active" : "chip"}
            onClick={() => setActive(cat)}
          >
            {cat.toUpperCase()}
          </span>
        ))}
      </div>

      {/* ⭐ RECOMMENDATIONS */}
      <h2 className="section-title">Recommended for You</h2>
      <div className="video-row">
        {recommendations.map((vid, i) => (
          <div
            key={i}
            className="video-tile"
            onClick={() => setModalVideo(vid)}
          >
            <img
              src={`https://img.youtube.com/vi/${vid}/hqdefault.jpg`}
              alt="thumbnail"
            />
            <span className="play-overlay">▶</span>
          </div>
        ))}
      </div>

      {/* 🎬 FULL SCREEN MODAL */}
      {modalVideo && (
        <div className="video-modal" onClick={() => setModalVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setModalVideo(null)}>
              ✕
            </span>
            <iframe
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1`}
              title="modal-video"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Expert;
// import React, { useState } from "react";
// import "./Expert.css";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";

// const data = {
//   yoga: ["v7AYKMP6rOE","4pKly2JojMw","oBu-pQG6sTY","2pLT-olgUJs"],
//   strength: ["U0bhE67HuDY","2tM1LFFxeKg","rT7DgCr-3pg","6kALZikXxLc"],
//   bodybuilding: [
//     "lA-diBuGy6I",   // FIXED
//     "IODxDxX7oi4",
//     "q7rCeOa_m58",
//     "y83qwTu0phM"    // FIXED
//   ],
//   weight: ["UBMk30rjy0o","IT94xC35u6k","2MoGxae-zyo","ml6cT4AZdqI"],
// };

// const Expert = () => {
//   const [active, setActive] = useState("yoga");
//   const [playing, setPlaying] = useState(null);

//   return (
//     <>
//       <Navbar />

//       {/* 🔥 HERO SECTION */}
//       <div className="hero">
//         <iframe
//           src={`https://www.youtube.com/embed/${data[active][0]}?autoplay=1&mute=1`}
//           title="hero"
//           allowFullScreen
//         />

//         {/* TEXT + BUTTON BELOW VIDEO */}
//         <div className="hero-content">
//           <h1>{active.toUpperCase()} TRAINING</h1>
//           <p>Train with expert coaches and transform your fitness journey.</p>

//           <button onClick={() => setPlaying(data[active][0])}>
//             ▶ Play Workout
//           </button>
//         </div>
//       </div>

//       {/* 🔥 CATEGORY CHIPS */}
//       <div className="categories">
//         {Object.keys(data).map((cat) => (
//           <span
//             key={cat}
//             className={active === cat ? "chip active" : "chip"}
//             onClick={() => {
//               setActive(cat);
//               setPlaying(null);
//             }}
//           >
//             {cat.toUpperCase()}
//           </span>
//         ))}
//       </div>

//       {/* 🔥 VIDEO ROW */}
//       <div className="video-row">
//         {data[active].map((vid, i) => (
//           <div key={i} className="video-tile">
//             {playing === vid ? (
//               <iframe
//                 src={`https://www.youtube.com/embed/${vid}?autoplay=1`}
//                 title={i}
//                 allowFullScreen
//               />
//             ) : (
//               <img
//                 src={`https://img.youtube.com/vi/${vid}/hqdefault.jpg`}
//                 alt="thumbnail"
//                 onClick={() => setPlaying(vid)}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Expert;