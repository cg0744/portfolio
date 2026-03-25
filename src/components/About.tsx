export default function About() {
  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="display-5 fw-bold mb-3">
              <span className="text-primary">/</span> About Me
            </h2>
            <div className="bg-secondary opacity-25" style={{ height: '1px', width: '100%' }}></div>
          </div>
        </div>

        <div className="row gy-5">
          {/* Left Column: The Narrative */}
          <div className="col-lg-6 pe-lg-5">
            <h3 className="h4 text-light fw-bold mb-4">My Background</h3>
            <p className="text-muted mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              I am currently studying to become an ICT Software Developer at ROC van Twente. My path into tech is built upon a strong foundation of communication and teamwork, having spent previous years working in fast-paced retail and face-to-face sales environments.
            </p>
            <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Recently, I've been expanding my technical horizons by working on hands-on tasks like SEO optimization and AI training. Whether I'm debugging complex logic or collaborating across teams in Dutch or English, I love connecting the dots and solving real-world problems.
            </p>
            <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              When I'm not at my keyboard, you can usually find me hitting the gym, socializing with friends, or relaxing with a great movie.
            </p>
          </div>

          {/* Right Column: Fast Facts & Tech Stack */}
          <div className="col-lg-6">
            <div className="p-4 rounded-4 border border-secondary border-opacity-25 bg-secondary bg-opacity-10 h-100">
              <h3 className="h5 text-light fw-bold mb-4"><i className="bi bi-person-badge text-primary me-2"></i>Quick Facts</h3>
              
              <ul className="list-unstyled text-muted mb-5">
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-caret-right-fill text-primary me-2"></i> 
                  <strong>Education:</strong>&nbsp; ROC van Twente (MBO Level 4)
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-caret-right-fill text-primary me-2"></i> 
                  <strong>Languages:</strong>&nbsp; Dutch, English, Arabic
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <i className="bi bi-caret-right-fill text-primary me-2"></i> 
                  <strong>Location:</strong>&nbsp; Hengelo, Netherlands
                </li>
              </ul>

              <h3 className="h5 text-light fw-bold mb-3"><i className="bi bi-code-square text-primary me-2"></i>Core Technologies</h3>
              <div className="d-flex flex-wrap gap-2">
                {/* We can update these specific badges as you learn more! */}
                {['C#', 'React', 'TypeScript', 'Vite', 'Bootstrap', 'HTML & CSS'].map((skill, index) => (
                  <span key={index} className="badge bg-body text-primary border border-primary border-opacity-25 px-3 py-2 fs-6">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}