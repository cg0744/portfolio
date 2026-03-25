export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "ICT Software Developer Student",
      company: "ROC van Twente",
      duration: "Present",
      description: "Studying modern software development practices, including full-stack web architecture, data routing, and collaborative project management.",
      skills: ["Software Engineering", "Teamwork", "Problem Solving"]
    },
    {
      id: 2,
      role: "Software Developer (Intern)",
      company: "Ventana Interior Design & Decoration",
      duration: "Recent",
      description: "Executed hands-on tasks involving SEO optimization to improve digital visibility, alongside workflows for training and refining AI models.",
      skills: ["SEO", "AI Training", "Data Analysis"]
    },
    {
      id: 3,
      role: "Sales & Retail Representative",
      company: "Various Retailers",
      duration: "Previous",
      description: "Developed exceptional communication and conflict-resolution skills in fast-paced, face-to-face customer environments.",
      skills: ["Communication", "Customer Success", "Time Management"]
    }
  ];

  return (
    <section id="experience" className="py-5 bg-body">
      <div className="container py-5" style={{ maxWidth: '900px' }}>
        
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3 text-light">
              <span className="text-primary">/</span> Experience
            </h2>
            <div className="bg-secondary opacity-25" style={{ height: '1px', width: '100%' }}></div>
          </div>
        </div>

        {/* The Timeline */}
        <div className="row">
          <div className="col-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="row mb-5 pb-3 border-bottom border-secondary border-opacity-10">
                
                {/* Left Column: Duration */}
                <div className="col-md-3 mb-3 mb-md-0">
                  <span className="text-secondary fw-bold" style={{ letterSpacing: '1px' }}>
                    {exp.duration}
                  </span>
                </div>
                
                {/* Right Column: Details */}
                <div className="col-md-9">
                  <h3 className="h4 text-light fw-bold mb-1">{exp.role}</h3>
                  <h4 className="h6 text-primary mb-3">{exp.company}</h4>
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                    {exp.description}
                  </p>
                  
                  {/* Skills tags for each role */}
                  <div className="d-flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="badge bg-secondary bg-opacity-10 text-muted rounded-1 px-2 py-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}