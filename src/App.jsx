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
          number: { value: 60, density: { enable: true, value_area: 850 } },
          color: { value: ["#3b82f6", "#8b5cf6", "#06b6d4", "#a78bfa"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false },
          },
          size: { value: 2.5, random: true },
          line_linked: {
            enable: true,
            distance: 130,
            color: "#4f7cff",
            opacity: 0.13,
            width: 1,
          },
          move: { enable: true, speed: 0.75, random: true, out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 150, line_linked: { opacity: 0.45 } },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <span className="aurora-blob aurora-1" />
        <span className="aurora-blob aurora-2" />
        <span className="aurora-blob aurora-3" />
        <span className="aurora-blob aurora-4" />
      </div>
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
