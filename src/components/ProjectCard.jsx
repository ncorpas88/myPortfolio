import "../styles/projectCard.css"

function ProjectCard({ title, image, tools, description, link }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <div className="flip-card-front-glow" />
          <img src={`/images/${image}`} alt={title} className="flip-card-img" />
          <h2 className="flip-card-title">{title}</h2>
          <span className="flip-hint">Hover to see more</span>
        </div>

        <div className="flip-card-back">
          <div className="flip-card-back-glow" />
          <h2 className="flip-back-title">{title}</h2>
          <p className="flip-back-description">{description}</p>
          <h3 className="flip-back-tools-label">Tooling</h3>
          <ul className="flip-back-tools">
            {tools.map((tool, i) => (
              <li key={i} className="flip-back-tool-item">{tool}</li>
            ))}
          </ul>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flip-back-link"
          >
            View Demo →
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
