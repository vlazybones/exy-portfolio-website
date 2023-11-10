import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro />
        <Skills />
        <Portfolio />
    </div>
  );
}

export default App;
