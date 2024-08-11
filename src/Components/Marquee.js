import React, { useState } from "react";
import "../Styles/App.css";

//https://www.freecodecamp.org/news/how-to-build-a-marquee-component-with-react/

export default function Marquee() {
  const [reverseAnimation, setReverseAnimation] = useState(false);
  const handleDoubleClick = () => {
    setReverseAnimation((prev) => !prev);
  };
  return (
    <div className="marquee-container">
      <section className="enable-animation">
        <div
          className={`marquee ${reverseAnimation && "marquee--reverse"}`}
          onDoubleClick={handleDoubleClick}
        >
          <ul className="marquee__content">
            <div className="marquee__item">
              <p>REACT.JS </p>
            </div>
            <div className="marquee__item">
              <p>JAVASCRIPT</p>
            </div>
            <div className="marquee__item">
              <p>HTML & CSS</p>
            </div>
            <div className="marquee__item">
              <p>VANILLA.JS</p>
            </div>
            <div className="marquee__item">
              <p>REST APIS</p>
            </div>
            <div className="marquee__item">
              <p>WIREFRAMING</p>
            </div>
            <div className="marquee__item">
              <p>FIGMA</p>
            </div>
            <div className="marquee__item">
              <p>BOOTSTRAP</p>
            </div>
            <div className="marquee__item">
              <p>RESPONSIVE WEB DESIGN</p>
            </div>
            <div className="marquee__item">
              <p>ADOBE CREATIVE SUITE</p>
            </div>
            <div className="marquee__item">
              <p>GIT</p>
            </div>
            <div className="marquee__item">
              <p>GITHUB</p>
            </div>
            <div className="marquee__item">
              <p>BLENDER 3D</p>
            </div>
            <div className="marquee__item">
              <p>SPLINE 3D</p>
            </div>
            <div className="marquee__item">
              <p>NODE.JS</p>
            </div>
          </ul>
          <ul aria-hidden="true" className="marquee__content">
            <div className="marquee__item">
              <p>REACT.JS</p>
            </div>
            <div className="marquee__item">
              <p>HTML, CSS & JAVASCRIPT</p>
            </div>
            <div className="marquee__item">
              <p>VANILLA.JS</p>
            </div>
            <div className="marquee__item">
              <p>REST APIs</p>
            </div>
            <div className="marquee__item">
              <p>WIREFRAMING</p>
            </div>
            <div className="marquee__item">
              <p>FIGMA</p>
            </div>
            <div className="marquee__item">
              <p>BOOTSTRAP</p>
            </div>
            <div className="marquee__item">
              <p>RESPONSIVE WEB DESIGN</p>
            </div>
            <div className="marquee__item">
              <p>ADOBE ILLUSTRATOR & PHOTOSHOP</p>
            </div>
            <div className="marquee__item">
              <p>GIT</p>
            </div>
            <div className="marquee__item">
              <p>GITHUB</p>
            </div>
            <div className="marquee__item">
              <p>BLENDER 3D</p>
            </div>
            <div className="marquee__item">
              <p>SPLINE 3D</p>
            </div>
            <div className="marquee__item">
              <p>NODE.JS</p>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}
