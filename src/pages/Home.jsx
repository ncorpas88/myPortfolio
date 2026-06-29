import "../styles/home.css";
import { useEffect, useState, useRef } from "react";

/* ── Typewriter ── */
const LINES = ["I´m Natanael", "Welcome to my portfolio"];

function TypewriterTitle() {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (phase === 0) {
      if (line1.length < LINES[0].length) {
        const t = setTimeout(() => setLine1(LINES[0].slice(0, line1.length + 1)), 70);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase(1), 380);
      return () => clearTimeout(t);
    }
    if (phase === 1) {
      if (line2.length < LINES[1].length) {
        const t = setTimeout(() => setLine2(LINES[1].slice(0, line2.length + 1)), 55);
        return () => clearTimeout(t);
      }
      setPhase(2);
    }
  }, [line1, line2, phase]);

  return (
    <h1 className="welcome">
      <span>{line1}</span>
      {line1.length === LINES[0].length && (
        <>
          <br />
          <span>{line2}</span>
        </>
      )}
      {phase < 2 && <span className="tw-cursor">|</span>}
    </h1>
  );
}

/* ── Animated counter ── */
function Counter({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ── Certifications data ── */
const certifications = [
  {
    issuer: "AWS",
    color: "#ff9900",
    bg: "rgba(255,153,0,0.1)",
    border: "rgba(255,153,0,0.35)",
    items: ["Introduction to Amazon EC2", "Introduction to Amazon VPC"],
  },
  {
    issuer: "Google",
    color: "#4285f4",
    bg: "rgba(66,133,244,0.1)",
    border: "rgba(66,133,244,0.35)",
    items: [
      "Foundations of Cybersecurity",
      "Detection and Response",
      "Assets, Threats and Vulnerabilities",
      "Tools of the Trade: Linux and SQL",
      "Networks and Network Security",
      "Manage Security Risks",
    ],
  },
  {
    issuer: "Ironhack",
    color: "#e11d48",
    bg: "rgba(225,29,72,0.1)",
    border: "rgba(225,29,72,0.35)",
    items: ["Full Stack Web Developer"],
  },
  {
    issuer: "IBM",
    color: "#0062ff",
    bg: "rgba(0,98,255,0.1)",
    border: "rgba(0,98,255,0.35)",
    items: [
      "IBM Certified Application Developer",
      "Web Development with Python",
      "Python Certificate",
    ],
  },
  {
    issuer: "Keepcoding",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.1)",
    border: "rgba(124,58,237,0.35)",
    items: ["Fundamentos de Python"],
  },
];

/* ── Carousel items ── */
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
      ".yomismo-flip, .reveal-left, .reveal-right, .reveal-up, .reveal-scale"
    );
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="home">
      <div className="welcome-cont">
        <TypewriterTitle />
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

      <div className="intro reveal-left">
        <h2>Hi, I'm Natanael Corpas Rivero</h2>
      </div>

      <div className="description reveal-right">
        <h4>
          I'm a Full Stack Web Developer with experience in building dynamic,
          responsive applications using modern technologies. I also work as an
          OTT platform technician, managing Linux servers, automating tasks with
          Bash scripting and Crontab, and monitoring production systems with
          Grafana. Passionate about creating efficient solutions from front-end
          interfaces to robust back-end and infrastructure.
        </h4>
      </div>

      {/* Contadores animados */}
      <div className="stats-row reveal-up">
        <Counter target={4}  suffix=""  label="Projects" />
        <Counter target={2}  suffix="+" label="Years coding" />
        <Counter target={20} suffix="+" label="Technologies" />
      </div>

      {/* 3D cylinder carousel */}
      <div className="cylinder-section reveal-scale">
        <p className="cylinder-label">Featured Projects</p>
        <div className="cylinder-stage">
          <div className="cylinder-track">
            {carouselItems.map((item, i) => (
              <div key={i} className="cylinder-item" style={{ "--i": i }}>
                <img src={`/images/${item.src}`} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
        <p className="cylinder-hint">Hover to pause · See all in Projects</p>
      </div>

      {/* Certifications */}
      <div className="certs-section reveal-up">
        <h3 className="certs-title">Certifications</h3>
        <div className="certs-grid">
          {certifications.map((group) => (
            <div
              key={group.issuer}
              className="cert-card"
              style={{
                "--cert-color": group.color,
                "--cert-bg": group.bg,
                "--cert-border": group.border,
              }}
            >
              <span className="cert-issuer">{group.issuer}</span>
              <ul className="cert-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-tooling-row">
        <div className="side-card reveal-left">
          <div className="sps-game">
            <h3>Skills</h3>
            <div className="skills-grid">
              <span className="skill-item">Autonomous learning</span>
              <span className="skill-item">Analytical thinking</span>
              <span className="skill-item">Initiative</span>
              <span className="skill-item">Problem-solving</span>
              <span className="skill-item">Effective communication</span>
              <span className="skill-item">Teamwork</span>
              <span className="skill-item">Server administration</span>
              <span className="skill-item">System monitoring</span>
              <span className="skill-item">Incident response</span>
              <span className="skill-item">Network security</span>
              <span className="skill-item">Risk management</span>
              <span className="skill-item">Threat detection</span>
            </div>
          </div>
        </div>

        <div className="tech-card reveal-right">
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
            <span className="tech-item">Linux / Ubuntu</span>
            <span className="tech-item">Bash scripting</span>
            <span className="tech-item">Crontab</span>
            <span className="tech-item">SSH</span>
            <span className="tech-item">Grafana</span>
            <span className="tech-item">Git</span>
            <span className="tech-item">AWS EC2</span>
            <span className="tech-item">AWS VPC</span>
            <span className="tech-item">SQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
