import React from "react";
import "../Styles/LandingScreen.css";
import Header from "./Header";

import emoji from "../imgs/icons/robot.svg";
import arrow from "../imgs/icons/arrow.svg";

export default function LandingScreen() {
  return (
    <div className="LandingScreen">
      <Header />

      <div className="title">
        {" "}
        <h1>Hi, I'm Anna.</h1>
        <span>
          <h1>A Web Developer</h1>
          <h1 className="small">based in Liverpool.</h1>
        </span>
      </div>
      <div className="nav">
        <img src={emoji} alt="Robot Gif" className="robot-img" />
        <img src={arrow} alt="Arrow pointing down" className="arrow-img" />
      </div>
    </div>
  );
}
