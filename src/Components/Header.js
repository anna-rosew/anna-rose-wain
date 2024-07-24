import React from "react";
import "../Styles/App.css";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-item-1">switch it up</div>
      <div className="header-item-2">Anna-Rose Wain</div>
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
