import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "../src/Styles/index.css";
import "./Styles/App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Work from "./Components/WorkSection";
import Footer from "./Components/Footer.js";
import Marquee from "./Components/Marquee.js";
import LandingScreen from "./Components/LandingScreen.js";
//Animations for loading

//Dark and light mode
//Get in touch button near top

//Inspired: https://p5aholic.me/contact/

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <div className="container-body">
            <Marquee />
            <LandingScreen />
            <Hero id="hero" />
            <Header />
            <Work />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
