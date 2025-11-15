// src/components/IndiaFortMap.js
import React from "react";

const IndiaFortMap = () => {
  return (
    <div
      className="map-container"
      style={{
        width: "100%",
        height: "60vh",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/forts/fort-header-bg.jpg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // ensures it's always behind
        }}
        onLoadedData={(e) => {
          console.log(
            "✅ Video loaded! Size:",
            e.target.videoWidth + "x" + e.target.videoHeight
          );
        }}
        onError={(e) => {
          console.error("❌ Video error:", e);
          console.error("Error code:", e.target.error?.code);
          console.error("Error message:", e.target.error?.message);
        }}
        onLoadStart={() => {
          console.log("🔄 Video loading started...");
        }}
      >
        <source src="/videos/forts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay text */}
      <div
        className="overlay"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(0, 0, 0, 0.4)",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          fontSize: "16px",
          zIndex: 1,
        }}
      >
        Explore the Magnificent Forts of India
      </div>
    </div>
  );
};

export default IndiaFortMap;
