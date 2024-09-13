import React, { useState, useEffect } from "react";
import "../Styles/App.css";
import "../Styles/Bio.css";

import ContactButton from "../Components/ContactButton";

import lightning from "../imgs/icons/lightning.svg";
import internet from "../imgs/icons/internet.svg";
import paint from "../imgs/icons/paint.svg";
import stars from "../imgs/icons/star.svg";
import flower from "../imgs/icons/flower.svg";
import code from "../imgs/icons/code.svg";
import www from "../imgs/icons/www.svg";
import plane from "../imgs/icons/airplane.svg";
import wave from "../imgs/icons/wave.svg";

const Bio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bio-container" id="about">
      {isMobile ? (
        <div className="mobile-bio">
          <p className="bio">
            <span className="line">
              <span>I’m Anna-Rose, I'm a</span>
              <span className="show-gif-on-hover invert">
                <img src={lightning} alt="Lightning icon wiggling." />
              </span>
            </span>
            <span className="line">
              <span className="bold">web developer</span>
              <span className="show-gif-on-hover">
                <img src={internet} alt="Internet icon." />
              </span>
            </span>
            <span className="line">
              <span>who specialises in creating</span>
            </span>
            <span className="line">
              <span className="underline">interactive </span>
              <span className="italics">custom </span>
              <span>websites.</span>
            </span>
            <span className="line">
              <span>With a background in the arts </span>
            </span>
            <span className="line">
              <span className="show-gif-on-hover">
                <img src={paint} alt="Paint icon." />
              </span>
              <span>, I love using JavaScript</span>
            </span>
            <span className="line">
              <span>creatively </span>
              <span className="show-gif-on-hover">
                <img src={stars} alt="Stars icon." />
              </span>
              <span>to make unique </span>
            </span>
            <span className="line">
              <span className="underline">user interfaces </span>
              <span>using clean code.</span>
            </span>
          </p>
          <p className="bio">
            <span className="line">
              <span>Inclusivity and sustainability </span>
              <span className="show-gif-on-hover">
                <img src={flower} alt="Flower icon." />
              </span>
            </span>
            <span className="line">
              <span>on the web are also very </span>
            </span>
            <span className="line">
              <span>important to me. When I'm not at </span>
            </span>
            <span className="line">
              <span>my desk </span>
              <span className="show-gif-on-hover">
                <img src={code} alt="Code icon." />
              </span>
              <span>, you’ll probably find</span>
            </span>
            <span className="line">
              <span>me running up a hill somewhere.</span>
            </span>
          </p>
          <p className="bio">
            <span className="line">
              <span>I love chatting about code, </span>
              <span className="show-gif-on-hover">
                <img src={www} alt="Globe vector with www." />
              </span>
            </span>
            <span className="line">
              <span>design and all things collaboration</span>
              <span className="show-gif-on-hover">
                <img src={plane} alt="Paper airplane icon." />
              </span>
              <span>say hello!</span>
              <span className="show-gif-on-hover">
                <img src={wave} alt="Waving hand icon." />
              </span>
            </span>
            <span className="line">
              <span>so,</span>
              <span className="show-gif-on-hover">
                <img src={plane} alt="Paper airplane icon." />
              </span>
              <span>say hello!</span>
              <span className="show-gif-on-hover">
                <img src={wave} alt="Waving hand icon." />
              </span>
            </span>
          </p>
        </div>
      ) : (
        <div className="desktop-bio">
          {/* Desktop structure */}
          <p className="bio">
            <span className="line">
              <span>I’m Anna-Rose, </span>
              <span className="show-gif-on-hover invert">
                <img src={lightning} alt="Lightning icon wiggling." />
              </span>
              <span className="bold">web developer</span>
              <span className="show-gif-on-hover">
                <img src={internet} alt="Internet icon." />
              </span>
              <span>who specialises in creating</span>
            </span>
            <span className="line">
              <span className="underline">interactive </span>
              <span className="italics">custom </span>
              <span>websites. With a background in the arts </span>
              <span className="show-gif-on-hover">
                <img src={paint} alt="Paint icon." />
              </span>
              <span>, I love using</span>
            </span>
            <span className="line">
              <span>JavaScript creatively </span>
              <span className="show-gif-on-hover">
                <img src={stars} alt="Stars icon." />
              </span>
              <span>to make unique </span>
              <span className="underline">user interfaces </span>
              <span>using clean code.</span>
            </span>
          </p>
          <p className="bio">
            <span className="line">
              <span>Inclusivity and sustainability </span>
              <span className="show-gif-on-hover">
                <img src={flower} alt="Flower icon." />
              </span>
              <span>on the web are also very important to me. When I’m </span>
            </span>
            <span className="line">
              <span className="underline">not at my desk </span>
              <span className="show-gif-on-hover">
                <img src={code} alt="Code icon." />
              </span>
              <span>
                , you’ll probably find me running up a hill somewhere.
              </span>
            </span>
          </p>
          <p className="bio">
            <span className="line">
              <span>I love chatting about code </span>
              <span className="show-gif-on-hover">
                <img src={www} alt="Globe vector with www." />
              </span>
              <span>, design and all things collaboration so </span>
              <span className="show-gif-on-hover">
                <img src={plane} alt="Paper airplane icon." />
              </span>
              <span>say hello!</span>
              <span className="show-gif-on-hover">
                <img src={wave} alt="Waving hand icon." />
              </span>
            </span>
          </p>
        </div>
      )}
      <ContactButton />
    </div>
  );
};

export default Bio;
