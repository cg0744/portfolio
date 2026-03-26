// Navigation bar component
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm bg-body">
      <div className="container">
        {/* Brand identity */}
        <a className="navbar-brand fw-bold text-primary" href="#">
          &lt;Chris /&gt;
        </a>

        {/* Responsive menu toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3 py-3 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="btn btn-outline-primary btn-sm px-3 rounded-pill"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}