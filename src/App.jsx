import React from "react";
import Header from "./component/Header/Header"
import AboutMe from "./component/AboutMe/AboutMe";
import Skills from "./component/Skills";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
