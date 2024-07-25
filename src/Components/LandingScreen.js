import React from "react";
import "../Styles/LandingScreen.css";
import Header from "./Header";
import { motion } from "framer-motion";

import emoji from "../imgs/icons/robot.svg";
import arrow from "../imgs/icons/arrow.svg";

export default function LandingScreen() {

  return (
    <div className="LandingScreen">
      <Header />
      <div className="title"></div>
      <div className="emoji">
        <img src={emoji} alt="Robot Gif" />
      </div>
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">LinkedIn</FlipLink>
      <FlipLink href="#">Facebook</FlipLink>
      <FlipLink href="#">Twitter</FlipLink>
      <FlipLink href="#">Instagram</FlipLink>
      <h1>CREATIVE</h1>
      <h1>DEVELOPER/DESIGNER</h1>
      <div className="text-container">
        <h2>
          I’M A JUNIOR FRONT-END DEVELOPER SPECIALISING IN INTERACTIVE
          INTERFACES.{" "}
        </h2>
      </div>
      <div className="arrow">
        <img src={arrow} alt="Arrow pointing down" />
      </div>
    </div>
  );
}

const FlipLink = {{children, href}: {children: string; href: string}} => {
  return <a href={href} className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase ">{children}</a>;
};

