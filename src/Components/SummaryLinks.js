import React from "react";
import "../Styles/App.css";
import "../Styles/SummaryLinks.css";

export default function SummaryLinks() {
  return (
    <div className="containerSummary">
      <div className="row justify-content-start">
        <div className="col-sm-6 col-md">
          <div className="summary-links">
            <h2>Get in touch</h2>
            <a className="summary" href="https://github.com/anna-rosew">
              Contact Form
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md">
          <div className="summary-links">
            <h2>GitHub</h2>
            <a className="summary" href="https://github.com/anna-rosew">
              /anna-rosew
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md">
          <div className="summary-links">
            <h2>LinkedIn</h2>
            <a
              className="summary"
              href="https://www.linkedin.com/in/anna-rose-wain/"
            >
              /anna-rose-wain
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md">
          <div className="summary-links">
            <h2>SheCodes</h2>
            <a
              className="summary"
              href="https://www.shecodes.io/graduates/68516-anna-rose-wain"
            >
              Qualifications
            </a>
          </div>
        </div>
        <div className="col-sm-6 col-md">
          <div className="summary-links">
            <h2>CV</h2>
            <a className="summary" href="https://github.com/anna-rosew">
              Online /
            </a>
            <span>
              <a className="summary" href="https://github.com/anna-rosew">
                Request PDF
              </a>
            </span>
          </div>
        </div>
        <div className="col-sm-6 col-md">
          <div className="summary-links">
            <h2>Other work</h2>
            <a className="summary" href="https://github.com/anna-rosew">
              See some art
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
