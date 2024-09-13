import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";

import "../src/Styles/index.css";
import "./Styles/App.css";
import Header from "./Components/Header";
import Bio from "./Components/Bio";
import Work from "./Components/WorkSection";
import Footer from "./Components/Footer.js";
import Marquee from "./Components/Marquee.js";
import LandingScreen from "./Components/LandingScreen.js";
//Animations for loading

//Dark and light mode
//Get in touch button near top
//image gifs: https://gsap.com/community/forums/topic/36083-images-stick-smoothly-to-cursor/#comment-180675

//Inspired: https://p5aholic.me/contact/

function App() {
  useEffect(() => {
    console.log(document.getElementById("work"));
  }, []);
  return (
    <Router>
      <div className="App">
        <main>
          <div className="container-body">
            <Header />
            <LandingScreen />
            <Marquee />
            <Element name="bio">
              <Bio />
            </Element>
            <Element name="work">
              <Work />
            </Element>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
