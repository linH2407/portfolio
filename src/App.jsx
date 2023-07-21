/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* <div className="cursor__dot">
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            // color="255, 255 ,255"
            // outerAlpha={0.4}
            innerScale={1}
            outerScale={1}
          />
        </div> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
