import "../styles/home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elementsToObserve = document.querySelectorAll(
      ".yomismo, .intro, .description, .tech-card, .left-card, .right-card"
    );

    elementsToObserve.forEach((el) => observer.observe(el));

    return () => {
      elementsToObserve.forEach((el) => observer.unobserve(el));
    };
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
        <div className="yomismo">
          <img src="images/yoo.png" alt="yo" />
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
      <div className="card-container">
        <div className="side-card">
          <ul className="sps-game" style={{ listStyleType: "none", paddingLeft: 20 }}>
            <h3>Skills</h3>
            <li>Autonomous learning</li>
            <li>Analytical thinking</li>
            <li>Initiative</li>
            <li>Problem-solving</li>
            <li> Effective communication</li>
            <li>Teamwork</li>
          </ul>
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
          <span className="tech-item">Bootstap</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
