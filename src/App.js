import "./App.css";
import Marquee from "react-fast-marquee";
import Header from "./Header";
import Hero from "./Hero";
import SummaryLinks from "./SummaryLinks";
import Work from "./WorkSection";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="crawler">
            <Marquee>
              {" "}
              JavaScript | HTML & CSS | Vanilla.js | React.js | REST APIs |
              Wireframing | UI/UX | Bootstrap | Responsive Web Design | Adobe
              Creative Suite | Git | Version Control | Blender 3D | VR/AR
              Development | C# | Three.js | Photoshop | p5.js | Yarn | NPM.js |
            </Marquee>
          </div>
          <Header />
          <SummaryLinks />
          <Work />
          <Hero />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
