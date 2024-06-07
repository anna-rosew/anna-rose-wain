import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "../src/Styles/index.css";
import "./Styles/App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Work from "./Components/WorkSection";
import Footer from "./Components/Footer.js";

//Upload correct and complete projects
//Blender, AI Cocktails(responsive image), Weather, Rose Long coming soon (caption for cursor)
//Animations for loading
//Cursors different for each project
//Dark and light mode
//Get in touch button near top

//Inspired: https://p5aholic.me/contact/

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <div className="container-body">
            <div className="crawler">
              <Marquee>
                {" "}
                JavaScript | HTML & CSS | Vanilla.js | React.js | REST APIs |
                Wireframing | UI/UX | Bootstrap | Responsive Web Design | Adobe
                Creative Suite | Git | Version Control | Blender 3D | VR/AR
                Development | C# | Three.js | Photoshop | p5.js | Yarn | NPM.js
                |
              </Marquee>
            </div>
            <Header />
            <Work />
            <Hero id="hero" />
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
