export default function Projects() {
  // projects data array
  const portfolioProjects = [
    {
      id: 1,
      title: "Personal Developer Portfolio",
      description: "A responsive, dark-themed personal portfolio website built to showcase my skills, experience, and projects. It features a modern UI with custom SCSS styling and Bootstrap integration.",
      techStack: ["React", "TypeScript", "Bootstrap", "Vite", "SCSS"],
      image: "/projects/Portfolio.png",
      liveLink: "#" 
    },
    {
      id: 2,
      title: "Hackathon 2026 Winner",
      description: "An award-winning healthcare management system developed during the 2026 Hackathon. Designed to streamline digital healthcare processes, this full-stack application features a decoupled architecture to efficiently handle complex data routing and user interactions. Please note that this is only a prototype.",
      techStack: ["React", "Vite", "Javascript", "Tailwind", "C#", "Entity Framework", "REST API"],
      image: "/projects/Hackathon.png",
      liveLink: "https://hackathon-zorg-systeem-frontend.vercel.app",
      ribbon: "1st Place" 
    },
    {
      id: 3,
      title: "CJ Boekhouding",
      description: "A custom financial accounting and bookkeeping page. This represents a significant milestone as my first real-world project built and delivered from scratch for a professional client.",
      techStack: ["HTML/CSS", "PHP"],
      image: "/projects/CJBoekhouding.png",
      liveLink: "https://www.cjboekhouding.nl" 
    },
    {
      id: 4,
      title: "Ventana Interior & Design",
      description: "During my internship at Ventana, I contributed to the development and maintenance of their e-commerce platform using Prestashop. I focused on building custom storefront features and enhancing the site's SEO.",
      techStack: ["HTML/CSS", "JavaScript", "PHP", "Prestashop"],
      image: "/projects/Ventana.png",
      liveLink: "https://www.ventanastore.nl"
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">
              <span className="text-primary">/</span> Things I've Built
            </h2>
            <div className="bg-secondary opacity-25" style={{ height: '1px', width: '100%' }}></div>
          </div>
        </div>

        {/* The Projects Grid */}
        <div className="row g-4">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              {/* Dark Mode Card Styling */}
              <div className="card project-card position-relative h-100 bg-transparent border border-secondary border-opacity-25 shadow-sm rounded-0" style={{ overflow: 'hidden' }}>
                
                {/* Conditionally render the ribbon if it exists */}
                {project.ribbon && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '25px',
                      right: '-35px',
                      width: '150px',
                      background: '#00FFF0',
                      color: '#0a192f',
                      padding: '5px 0',
                      fontWeight: '900',
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textAlign: 'center',
                      transform: 'rotate(45deg)',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                      zIndex: 10,
                    }}
                  >
                    {project.ribbon}
                  </div>
                )}

                {/* Image Container with Overlay */}
                <div className="position-relative">
                  <div className="project-overlay"></div>
                  <img 
                    src={project.image} 
                    className="card-img-top w-100 rounded-0" 
                    alt={project.title} 
                    style={{ 
                      borderBottom: '1px solid rgba(100, 255, 218, 0.2)',
                      height: '225px',       
                      objectFit: 'cover'     
                    }} 
                  />
                </div>
                
                <div className="card-body d-flex flex-column p-4">
                  
                  {/* Title and Link Container */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title fw-bold text-light mb-0">{project.title}</h5>
                    <a 
                      href={project.liveLink} 
                      target={project.liveLink !== "#" ? "_blank" : undefined} 
                      rel="noreferrer" 
                      className="text-primary text-decoration-none fw-bold ms-3 fs-5"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>

                  <p className="card-text text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="mt-auto d-flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="badge bg-secondary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}