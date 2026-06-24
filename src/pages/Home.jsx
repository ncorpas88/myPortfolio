import "../styles/home.css";
import { useEffect } from "react";

const carouselItems = [
  { src: "rideo.png",        alt: "Rideo" },
  { src: "sicaruscreen.png", alt: "Sicarú" },
  { src: "thebike.png",      alt: "The Bike Hub" },
  { src: "donut.png",        alt: "Catch de Donut" },
];

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            if (entry.target.classList.contains("yomismo-flip")) {
              entry.target.classList.add("spin-once");
              const inner = entry.target.querySelector(".yomismo-inner");
              if (inner) {
                inner.addEventListener(
                  "animationend",
                  () => entry.target.classList.remove("spin-once"),
                  { once: true }
                );
              }
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const els = document.querySelectorAll(
      ".yomismo-flip, .intro, .description, .tech-card, .left-card, .right-card, .side-card, .cylinder-section"
    );
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="home">
      <div className="welcome-cont">
        <h1 className="welcome">
          I´m Natanael
          <br />
          Welcome to my portfolio
        </h1>
      </div>

      <div className="yomismo-wrapper">
        <div className="yomismo-flip">
          <div className="yomismo-inner">
            <div className="yomismo-front">
              <img src="images/yoo.png" alt="Natanael" />
            </div>
            <div className="yomismo-back">
              <img src="images/avatar.png" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>

      <div className="intro">
        <h2>Hi, I'm Natanael Corpas Rivero</h2>
      </div>

      <div className="description">
        <h4>
          I'm a Full Stack Web Developer with experience in building dynamic,
          responsive applications using modern technologies. Passionate about
          creating efficient solutions from front-end interfaces to robust
          back-end systems.
        </h4>
      </div>

      {/* 3D cylinder carousel */}
      <div className="cylinder-section">
        <p className="cylinder-label">Featured Projects</p>
        <div className="cylinder-stage">
          <div className="cylinder-track">
            {carouselItems.map((item, i) => (
              <div
                key={i}
                className="cylinder-item"
                style={{ "--i": i }}
              >
                <img src={`/images/${item.src}`} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
        <p className="cylinder-hint">Hover to pause · See all in Projects</p>
      </div>

      <div className="card-container">
        <div className="side-card">
          <div className="sps-game">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span className="skill-item">Autonomous learning</span>
              <span className="skill-item">Analytical thinking</span>
              <span className="skill-item">Initiative</span>
              <span className="skill-item">Problem-solving</span>
              <span className="skill-item">Effective communication</span>
              <span className="skill-item">Teamwork</span>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-card">
        <h3 className="tech-title">Tooling</h3>
        <div className="tech-list">
          <span className="tech-item">HTML</span>
          <span className="tech-item">CSS</span>
          <span className="tech-item">JavaScript</span>
          <span className="tech-item">React</span>
          <span className="tech-item">Node.js</span>
          <span className="tech-item">Express</span>
          <span className="tech-item">MongoDB</span>
          <span className="tech-item">Mongoose</span>
          <span className="tech-item">Cloudinary</span>
          <span className="tech-item">Tailwind</span>
          <span className="tech-item">Bootstrap</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
