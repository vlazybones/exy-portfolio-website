import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Project from "./components/Project/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Experience from "./components/Experience/experience";
import tms from "./components/ProjectPages/tms";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Experience />
        <Project />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
