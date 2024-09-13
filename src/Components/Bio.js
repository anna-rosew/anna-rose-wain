import React from "react";
import "../Styles/App.css";
import "../Styles/Bio.css";

import ContactButton from "../Components/ContactButton";

import lightning from "../imgs/icons/lightning.svg";
import internet from "../imgs/icons/internet.svg";
import paint from "../imgs/icons/paint.svg";
import stars from "../imgs/icons/star.svg";

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
        <span className="line">
          <div>
            <span className="underline">interactive </span>
            <span className="italics">custom </span>
            <span>websites. With a background in the arts </span>
            <span className="show-gif-on-hover">
              <img src={paint} alt="Paint drip coming out of pot." />
            </span>
            <span>, I love using</span>
          </div>
        </span>
        <span className="line">
          <div>
            <span>JavaScript creatively </span>
            <span className="show-gif-on-hover">
              <img src={stars} alt="Stars twinkling" />
            </span>
            <span>to make unique </span>
            <span className="underline">user interfaces </span>{" "}
            <span>using clean code.</span>
          </div>
        </span>
      </p>
      <p className="bio">
        <span className="line">
          <div>
            <span>Inclusivity and sustainablity </span>
            <span>web developer</span>
            <span className="show-gif-on-hover">
              <img src={internet} alt="Lightning icon wiggling." />
            </span>
            <span>who specialises in creating</span>
          </div>
        </span>
        <span className="line">
          <div>
            <span className="underline">interactive </span>
            <span className="italics">custom </span>
            <span>websites. With a background in the arts </span>
            <span className="show-gif-on-hover">
              <img src={paint} alt="Paint drip coming out of pot." />
            </span>
            <span>, I love using</span>
          </div>
        </span>
        <span className="line">
          <div>
            <span>JavaScript creatively </span>
            <span className="show-gif-on-hover">
              <img src={stars} alt="Stars twinkling" />
            </span>
            <span>to make unique </span>
            <span className="underline">user interfaces </span>{" "}
            <span>using clean code.</span>
          </div>
        </span>
      </p>
      <ContactButton />
    </div>
  );
}
