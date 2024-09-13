import React from "react";
import { Link } from "react-scroll";
import "../Styles/App.css";
import "../Styles/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-item-1 logo">
        <Link
          to="bio"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          alt="Work"
        >
          <h2>
            ANNA-ROSE <br />
            WAIN
          </h2>
        </Link>
      </div>
      <div className="header-item-2">
        <span>
          <Link
            to="work"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="menu-link work-link"
            alt="Work"
          >
            WORK
          </Link>
          <a
            href="mailto:annarosewain9@gmail.com"
            className="menu-link contact-link"
          >
            <div className="link-text">CONTACT</div>
          </a>
        </span>
      </div>
    </div>
  );
}
