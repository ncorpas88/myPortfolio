import { useEffect, useRef } from "react";
import "../styles/cursor.css";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, .flip-card, .cylinder-track, .nav-button, .tech-item, .skill-item, .flip-back-link")) {
        dotRef.current?.classList.add("is-hover");
        ringRef.current?.classList.add("is-hover");
      }
    };

    const onOut = (e) => {
      if (e.target.closest("a, button, .flip-card, .cylinder-track, .nav-button, .tech-item, .skill-item, .flip-back-link")) {
        dotRef.current?.classList.remove("is-hover");
        ringRef.current?.classList.remove("is-hover");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

export default CustomCursor;
