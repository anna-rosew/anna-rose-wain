import React from "react";
import "../Styles/App.css";
import "../Styles/Header.css";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="Header">
      <h1>
        Anna-Rose <br />
        Wain
      </h1>
      <Link to="about" smooth={true} duration={500} alt="About">
        About
      </Link>
    </div>
  );
}
