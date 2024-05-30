import Marquee from "react-fast-marquee";
import "../src/Styles/index.css";
import "./Styles/App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Work from "./Components/WorkSection";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container-body">
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
          <Work />
          <Hero />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
