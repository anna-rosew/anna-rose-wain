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
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: [0, 900] }}
        transition={{
          duration: "3",
          delay: "1",
        }}
        whileHover={{ scale: "1.5" }}
      >
        CREATIVE
      </motion.h1>
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
