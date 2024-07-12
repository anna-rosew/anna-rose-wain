import React from "react";
import "./Styles/App.css";

//https://www.freecodecamp.org/news/how-to-build-a-marquee-component-with-react/

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <ul className="marquee__content">
          <div className=" marquee__item">
            <p>React.js</p>
          </div>
          <div className=" marquee__item"></div>
          <div className=" marquee__item"></div>
          <div className=" marquee__item"></div>
          <div className=" marquee__item"></div>
          <div className=" marquee__item"></div>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <div className=" marquee__item"></div>
          <div className=" marquee__item"></div>
          <div className=" marquee__item"></div>
        </ul>
      </div>
    </div>
  );
}
