import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
