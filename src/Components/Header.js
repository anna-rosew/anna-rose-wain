import React from "react";
import "../Styles/App.css";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-item-1">
        <div className="switch-it-up">switch it up</div>
      </div>
      <div className="header-item-2">ANNA-ROSE WAIN</div>
      <div className="header-item-3">
        <div>Work</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

//import { Link } from "react-scroll"; <Link
//to="about"
//smooth={true}
//duration={500}
//alt="About"
//className="about-anchor"
//>
//About
//</Link>;
