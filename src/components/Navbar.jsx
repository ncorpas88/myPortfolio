import { Link } from "react-router-dom";
import { Home, FolderKanban, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
      <div className="title">
          <h1>My Portfolio</h1>
        </div>
      <div className="navbar-links">
        <Link to="/" className="nav-button">
          <Home size={18} />
          Home
        </Link>
        <Link to="/projects" className="nav-button">
          <FolderKanban size={18} />
          Projects
        </Link>
        <Link to="https://github.com/ncorpas88" className="nav-button">
          <FaGithub size={18} />
          GitHub
        </Link>
        <Link to="natel1988@gmail.com" className="nav-button">
          <Mail size={18} />
          Mail
        </Link>
        <Link to="https://www.linkedin.com/in/ncorpas/" className="nav-button">
          <FaLinkedin size={18} />
          Linkedin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
