import React from "react";
import "../Styles/App.css";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <h4>
          This site was coded by <strong>Anna-Rose Wain</strong> and is{" "}
          <a
            href="https://github.com/anna-rosew/anna-rose-wain"
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
