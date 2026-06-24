import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CustomCursor from "./components/CustomCursor";
import { useEffect } from "react";

function App() {
  /* Particles */
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

  /* Mouse parallax sobre las capas aurora */
  useEffect(() => {
    const layers = document.querySelectorAll(".aurora-layer");
    const handle = (e) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;
      layers.forEach((layer) => {
        const depth = parseFloat(layer.dataset.depth);
        layer.style.transform = `translate(${cx * depth * 32}px, ${cy * depth * 32}px)`;
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <>
      <CustomCursor />


      {/* Aurora fondo */}
      <div className="bg-aurora" aria-hidden="true">
        <div className="aurora-layer" data-depth="1">
          <span className="aurora-blob aurora-1" />
        </div>
        <div className="aurora-layer" data-depth="0.6">
          <span className="aurora-blob aurora-2" />
        </div>
        <div className="aurora-layer" data-depth="0.35">
          <span className="aurora-blob aurora-3" />
        </div>
        <div className="aurora-layer" data-depth="0.8">
          <span className="aurora-blob aurora-4" />
        </div>
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
