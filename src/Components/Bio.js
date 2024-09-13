import React from "react";
import "../Styles/App.css";
import "../Styles/Bio.css";

import ContactButton from "../Components/ContactButton";

import lightning from "../imgs/icons/lightning.svg";
import internet from "../imgs/icons/internet.svg";
import paint from "../imgs/icons/paint.svg";
import stars from "../imgs/icons/star.svg";
import flower from "../imgs/icons/flower.svg";
import code from "../imgs/icons/code.svg";
import www from "../imgs/icons/www.svg";
import plane from "../imgs/icons/airplane.svg";
import wave from "../imgs/icons/wave.svg";

export default function Bio() {
  return (
    <div className="bio-container" id="about">
      <p className="bio">
        <span className="line">
          <span>I’m Anna-Rose, </span>
          <span className="show-gif-on-hover invert">
            <img src={lightning} alt="Lightning icon wiggling." />
          </span>
          <span className="bold">web developer</span>
          <span className="show-gif-on-hover">
            <img src={internet} alt="Internet icon." />
          </span>
          <span>who specialises in creating</span>
        </span>
        <span className="line">
          <span className="underline">interactive </span>
          <span className="italics">custom </span>
          <span>websites. With a background in the arts </span>
          <span className="show-gif-on-hover">
            <img src={paint} alt="Paint icon." />
          </span>
          <span>, I love using</span>
        </span>
        <span className="line">
          <span>JavaScript creatively </span>
          <span className="show-gif-on-hover">
            <img src={stars} alt="Stars icon." />
          </span>
          <span>to make unique </span>
          <span className="underline">user interfaces </span>
          <span>using clean code.</span>
        </span>
      </p>

      <p className="bio">
        <span className="line">
          <span>Inclusivity and sustainability </span>
          <span className="show-gif-on-hover">
            <img src={flower} alt="Flower icon." />
          </span>
          <span>on the web are also very important to me. When I’m </span>
        </span>
        <span className="line">
          <span className="underline">not at my desk </span>
          <span className="show-gif-on-hover">
            <img src={code} alt="Code icon." />
          </span>
          <span>, you’ll probably find me running up a hill somewhere.</span>
        </span>
      </p>

      <p className="bio">
        <span className="line">
          <span>I love chatting about code </span>
          <span className="show-gif-on-hover">
            <img src={www} alt="Globe vector with www." />
          </span>
          <span>, design and all things collaboration so </span>
          <span className="show-gif-on-hover">
            <img src={plane} alt="Paper airplane icon." />
          </span>
          <span>say hello!</span>
          <span className="show-gif-on-hover">
            <img src={wave} alt="Waving hand icon." />
          </span>
        </span>
      </p>

      <ContactButton />
    </div>
  );
}
