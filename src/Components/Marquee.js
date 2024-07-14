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
        <div className="marquee" onDoubleClick={handleDoubleClick}>
          <ul className="marquee__content">
            <div className="marquee__item">
              <p>React.js</p>
            </div>
          </ul>
          <ul aria-hidden="true" className="marquee__content">
            <div className=" marquee__item"></div>
            <div className=" marquee__item"></div>
            <div className=" marquee__item"></div>
          </ul>
        </div>
      </section>
    </div>
  );
}
