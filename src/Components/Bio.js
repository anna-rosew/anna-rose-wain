import React from "react";
import "../Styles/App.css";
import "../Styles/Bio.css";

import ContactButton from "../Components/ContactButton";

import lightning from "../imgs/icons/lightning.svg";
import internet from "../imgs/icons/lightning.svg";

export default function Bio() {
  return (
    <div className="bio-container" id="about">
      <p className="bio">
        <span className="line">
          <span>I’m Anna-Rose, I’m a</span>
          <span className="show-gif-on-hover">
            <img src={lightning} alt="Lightning icon wiggling." />
          </span>
          <span>web developer</span>
          <span className="show-gif-on-hover">
            <img src={internet} alt="Lightning icon wiggling." />
          </span>
        </span>
      </p>
      <ContactButton />
    </div>
  );
}
