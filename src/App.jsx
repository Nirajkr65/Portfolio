import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, CodingProfiles, Certifications } from "./components";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-x-hidden'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <CodingProfiles />
        <Certifications />
        <Experience />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
