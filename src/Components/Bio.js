import React from "react";
import "../Styles/App.css";
import "../Styles/Bio.css";

import ContactButton from "../Components/ContactButton";

import lightning from "../imgs/icons/lightning.svg";
import internet from "../imgs/icons/internet.svg";

export default function Bio() {
  return (
    <div className="bio-container" id="about">
      <p className="bio">
        <span className="line">
          <div>
            <span>I’m Anna-Rose, </span>
            <span className="show-gif-on-hover invert">
              <img src={lightning} alt="Lightning icon wiggling." />
            </span>
            <span>web developer</span>
            <span className="show-gif-on-hover">
              <img src={internet} alt="Lightning icon wiggling." />
            </span>
            <span>who specialises in creating</span>
          </div>
        </span>
      </p>
      <ContactButton />
    </div>
  );
}
