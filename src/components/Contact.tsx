export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-body text-center">
      <div className="container py-5" style={{ maxWidth: '600px' }}>
        
        <span className="text-primary fw-bold text-uppercase tracking-wide mb-2 d-block">
          What's Next?
        </span>
        <h2 className="display-4 fw-bold text-light mb-4">
          Get In Touch
        </h2>
        
        <p className="lead text-muted mb-5">
          Whether you have a question, an internship opportunity, or a custom programming project you need help with, my inbox is always open. I'll try my best to get back to you!
        </p>
        
        {/* Replace the mailto with your actual email address */}
        <a href="mailto:your.email@example.com" className="btn btn-outline-primary btn-lg px-5 py-3 fs-5 shadow-sm mb-5">
          Say Hello
        </a>

      </div>

      {/* Minimalist Footer */}
      <footer className="mt-5 pt-4 border-top border-secondary border-opacity-25">
        <div className="container d-flex flex-column align-items-center">
          
          {/* Social Links */}
          <div className="d-flex gap-4 mb-3">
            <a href="https://github.com/cg0744" target="_blank" rel="noreferrer" className="text-muted text-decoration-none fs-4 hover-primary">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="text-muted text-decoration-none fs-4 hover-primary">
              <i className="bi bi-linkedin"></i>
            </a>
            {/* You can swap this icon out if you have a Fiverr or freelance storefront link! */}
            <a href="#" target="_blank" rel="noreferrer" className="text-muted text-decoration-none fs-4 hover-primary">
              <i className="bi bi-briefcase"></i>
            </a>
          </div>

          <p className="text-muted small">
            Built by Christian Gawriyah
          </p>
        </div>
      </footer>
    </section>
  );
}