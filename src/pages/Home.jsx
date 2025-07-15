import "../styles/home.css";
import { useEffect, useRef } from "react";

function Home() {

  const yomismoRef = useRef(null);

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

    if (yomismoRef.current) {
      observer.observe(yomismoRef.current);
    }

    return () => {
      if (yomismoRef.current) {
        observer.unobserve(yomismoRef.current);
      }
    };
  }, []);


  return (
    <div className="home">
      <div className="welcome-cont">
        <h1 className="welcome">Welcome to my portfolio</h1>
      </div>
      <div className="yomismo" ref={yomismoRef}>
        <img src="images/yoo.png" alt="yo" />
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
      <div className="tech-card">
        <h3 className="tech-title">Technologies I Use:</h3>
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
