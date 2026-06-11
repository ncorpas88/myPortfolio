import { Link, useLocation } from "react-router-dom";
import { Home, FolderKanban, Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="avatar">
        <img src="images/avatar.png" alt="avatar" />
      </div>

      <button
        className="hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`navbar-links ${open ? "open" : ""}`}>
        <Link
          to="/"
          className={`nav-button ${location.pathname === "/" ? "active" : ""}`}
          onClick={close}
        >
          <Home size={16} /> Home
        </Link>

        <Link
          to="/projects"
          className={`nav-button ${location.pathname === "/projects" ? "active" : ""}`}
          onClick={close}
        >
          <FolderKanban size={16} /> Projects
        </Link>

        <a
          href="https://github.com/ncorpas88"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
          onClick={close}
        >
          <FaGithub size={16} /> GitHub
        </a>

        <a href="mailto:natel1988@gmail.com" className="nav-button" onClick={close}>
          <Mail size={16} /> Mail
        </a>

        <a
          href="https://www.linkedin.com/in/ncorpas/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
          onClick={close}
        >
          <FaLinkedin size={16} /> LinkedIn
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
