import React from "react";
import "../Styles/App.css";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-item-1 logo">
        <h2>
          ANNA-ROSE <br />
          WAIN
        </h2>
      </div>
      <div className="header-item-2">
        <span>
          <div>WORK</div>
          <div>CONTACT</div>
        </span>
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
