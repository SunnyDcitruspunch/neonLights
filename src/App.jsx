import React from "react";
import Header from "./component/Header/Header"
import AboutMe from "./component/AboutMe/AboutMe";
import Skills from "./component/Skills/Skills";
import Resume from "./component/Resume/Resume"
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
