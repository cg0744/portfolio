export default function Projects() {
  // projects data array
  const portfolioProjects = [
    {
      id: 1,
      title: "Personal Developer Portfolio",
      description: "A responsive, dark-themed personal portfolio website built to showcase my skills, experience, and projects. It features a modern UI with custom SCSS styling and Bootstrap integration.",
      techStack: ["React", "TypeScript", "Bootstrap", "Vite", "SCSS"],
      image: "https://placehold.co/600x400/112240/64ffda?text=Portfolio+Site",
      githubLink: "https://github.com/cg0744/portfoli",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Data Structure Analyzer",
      description: "An algorithm visualizer built during my coursework to demonstrate proficiency in complex data routing and state management.",
      techStack: ["TypeScript", "Vite", "Algorithms"],
      image: "https://placehold.co/600x400/112240/64ffda?text=Project+2",
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Custom Client Solution",
      description: "A flexible architecture designed to show how I can build scalable tools for real-world applications or freelance clients.",
      techStack: ["API", "Backend", "Database"],
      image: "https://placehold.co/600x400/112240/64ffda?text=Project+3",
      githubLink: "#",
      liveLink: "#"
    }
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
              <div className="card h-100 bg-transparent border border-secondary border-opacity-25 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <img src={project.image} className="card-img-top" alt={project.title} style={{ borderBottom: '1px solid rgba(100, 255, 218, 0.2)' }} />
                
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title fw-bold text-light mb-3">{project.title}</h5>
                  <p className="card-text text-muted mb-4" style={{ fontSize: '0.95rem' }}>
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Badges */}
                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="badge bg-secondary bg-opacity-10 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links*/}
                  <div className="mt-auto d-flex gap-3">
                    <a href={project.githubLink} className="text-light text-decoration-none hover-primary">
                      <i className="bi bi-github fs-5"></i> GitHub
                    </a>
                    <a href={project.liveLink} className="text-primary text-decoration-none fw-bold">
                      Live Demo <i className="bi bi-box-arrow-up-right"></i>
                    </a>
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