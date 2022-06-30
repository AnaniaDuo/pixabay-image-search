import React from "react";

function About() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          padding: "1rem",
          textAlign: "center",
          backgroundImage: `url(robotbackground.jpg)`,
          backgroundSize: "cover",
          height: 500,
          width: 500,
        }}
      />
      <div>
        Welcome to ImageSearch! Navigate to Home Page to search for images. Have
        fun!
      </div>
    </div>
  );
}

export default About;
