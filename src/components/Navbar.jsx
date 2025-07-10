import { Link } from "react-router-dom";
import { Home, User, FolderKanban, Mail } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src="images/myportfolio.gif" alt="logo" width={300}/>
      <div className="navbar-links">
        <Link to="/" className="nav-button">
          <Home size={18} />
          Home
        </Link>
         <Link to="/about" className="nav-button">
          <User size={18} />
          About me
        </Link>
        <Link to="/projects" className="nav-button">
          <FolderKanban size={18} />
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
