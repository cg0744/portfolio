import { Link } from 'react-router-dom';
import cgLogo from '../assets/images/cg-logo.png'; // Importing your image directly

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={cgLogo} alt="Christian Gawriyah Logo" className="nav-logo" />
                </Link>

                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                    <ul className="navbar-nav me-3">
                        <li className="nav-item">
                            <a href="/#about-me" className="nav-link">About me</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#competencies" className="nav-link">Competencies</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#personality" className="nav-link">Personality</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#profile" className="nav-link">Profile</a>
                        </li>
                        <li className="nav-item">
                            {/* Using Link for actual separate pages */}
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;