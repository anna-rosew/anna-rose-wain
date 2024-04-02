import "./App.css";
import Hero from "./Hero";
import SummaryLinks from "./SummaryLinks";
import Work from "./WorkSection";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <main>
        <div className="container">
          <Hero />
          <SummaryLinks />
          <Work />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
