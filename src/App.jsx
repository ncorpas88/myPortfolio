import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { useEffect } from "react";

function App() {
  useEffect(() => {
     if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
        },
      });
    }
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
