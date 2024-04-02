import React from "react";
import "./App.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <h4>
          This site was coded by Anna-Rose Wain and is{" "}
          <a
            href="https://github.com/anna-rosew/annarosewain_portfolio"
            target="_blank"
            rel="noopener noreferrer"
            alt="Portfolio Repo"
          >
            open-sourced on GitHub
          </a>{" "}
          | 2024
        </h4>
      </div>
    </footer>
  );
}
