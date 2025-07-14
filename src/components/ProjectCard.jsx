import "../styles/projectCard.css"

function ProjectCard({ title, image, tools, description, link }) {
  return (
    <div className="project-card">
      <img src={`/images/${image}`} alt={title} />
      <div className="project-card-content">
        <h2 className="project-card-title">{title}</h2>
        <p className="project-card-description">{description}</p>
        <div>
          <h3 className="project-card-tools-title">Tooling</h3>
          <ul className="project-card-tools">
            {tools.map((tool, i) => (
              <li key={i} className="project-card-tool-item">
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;
