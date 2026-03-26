import chrisImage from '../assets/Chris.jpeg';

// Hero section component
export default function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center min-vh-100 pt-5">
      <div className="container mt-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          
          {/* Main content and CTA */}
          <div className="col-lg-6 pe-lg-5 text-center text-lg-start mt-4 mt-lg-0">
            <span className="text-primary fw-bold text-uppercase" style={{ letterSpacing: '2px' }}>
              Hi, my name is
            </span>
            <h1 className="display-3 fw-bolder mb-2 mt-2 text-light">
              Christian Gawriyah.
            </h1>
            <h2 className="h1 fw-bold text-secondary mb-4 opacity-75">
              I love building software.
            </h2>
            <p className="lead mb-5" style={{ maxWidth: '540px' }}>
              I am an enthusiastic developer who loves turning ideas into functional, clean code. I enjoy exploring new technologies and solving interesting problems. Whether I'm collaborating with an engineering team or building custom solutions for clients, I'm always excited to take on new challenges and grow my skills.
            </p>
            
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-outline-primary btn-lg px-4 shadow-sm">
                Check Out My Work
              </a>
            </div>
          </div>

          {/* Profile image container */}
          <div className="col-lg-6 text-center">
            <img 
              src={chrisImage}
              alt="Christian Gawriyah" 
              className="img-fluid rounded-4 shadow-lg mb-4 mb-lg-0" 
              style={{ maxHeight: '480px', objectFit: 'cover' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}