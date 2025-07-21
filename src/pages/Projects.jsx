import ProjectCard from "../components/ProjectCard"
import "../styles/projectCard.css"
import { useState } from "react";

 const projects = [
    {
      title: "Rideo",
      image: "rideo.png",
      tools: ["HTML", "CSS", "Javascript", "React", "Bootstrap", "Coudinary", "Express", "Node", "Moongodb", "Mongoose"],
      description: "Rideo is a social network for cyclists, a website where cyclists can post their photos and share their adventures with other cyclists.",
      link: "https://rideo-app.netlify.app/"
    },
     {
      title: "The Bike Hub",
      image: "thebike.png",
      tools: ["HTML", "CSS", "Javascript", "React", "Bootstrap", "Node"],
      description: "It is a web app designed to showcase a store's product catalog in a more interactive way, making it easier for customers to engage and providing them with a clearer view of the available offers.",
      link: "https://bikestore-app.netlify.app/"
    },
    {
      title: "Catch de donut",
      image: "donut.png",
      tools: ["HTML", "CSS", "Javascript", "DOM Manipulation"],
      description: "After a nuclear explosion in Springfield, only the donuts are safe. Help Homer collect them, avoid the radioactive cherries and broccoli to keep from losing points, and take down the ghost of Mr. Burns by shooting him with Duff beers—before he gets you first.",
      link: "https://ncorpas88.github.io/Game-Hunger-Homer/"
    }
  ]

function Projects() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="project-list">
      {projects.map((project, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`project-card-wrapper ${
            hoveredIndex !== null ? (hoveredIndex === i ? 'active' : 'dimmed') : ''
          }`}
        >
          <ProjectCard
            title={project.title}
            image={project.image}
            tools={project.tools}
            description={project.description}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Projects;
