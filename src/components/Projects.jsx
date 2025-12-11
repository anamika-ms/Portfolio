const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Electric Vehicle Charging Platform",
      shortDesc: "Smart EV charging station management system",
      description:
        "A comprehensive platform connecting EV users, charging station providers, and administrators. The system features real-time station availability, location-based search, integrated payment gateway, and detailed analytics dashboard.",
      technologies: ["Django", "MySQL", "HTML5", "CSS3", "JavaScript"],
      features: [
        "Real-time EV station listing with live availability",
        "User authentication & profile management",
        "Station provider dashboard for operations",
        "Admin panel for platform management",
        "Search & filter functionality",
        "Integrated payment gateway",
        "Review & rating system"
      ],
      impact: "Reduces EV charging search time by 70% and improves station utilization",
      status: "Completed"
    },
    {
      id: 2,
      name: "QR Based Bus Fare Automation Portal",
      shortDesc: "Cashless transit fare management system",
      description:
        "An innovative QR code-based fare management system for public transportation. Enables seamless, cashless travel through QR code scanning while providing real-time journey tracking, fare calculation, and comprehensive admin reporting.",
      technologies: ["Django", "MySQL", "QR Code API", "HTML5", "CSS3"],
      features: [
        "QR code generation & validation",
        "Cashless fare payment system",
        "Passenger scanning & check-in",
        "Real-time journey tracking",
        "Automatic fare calculation",
        "Admin dashboard with reporting",
        "Transaction history & receipts",
        "User wallet management"
      ],
      impact: "Eliminates cash handling, speeds up boarding by 40%, and improves revenue tracking",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="projects">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Featured Projects
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto w-32"></div> */}
          </h2>
          <p className="text-lg text-gray-600 mt-8">Showcasing my full-stack development capabilities and problem-solving approach</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300 group"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                    <p className="text-blue-100 text-lg">{project.shortDesc}</p>
                  </div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur">
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-1 h-6 bg-blue-500 mr-3 rounded"></span>
                    Overview
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                {/* Grid: Features & Technologies */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-500 font-bold mr-3 text-lg">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-lg font-medium border border-purple-200 hover:shadow-md transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="text-blue-500 text-xl mr-2">💡</span>
                    Business Impact
                  </h4>
                  <p className="text-gray-700">{project.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Info */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">More Projects Coming Soon!</h3>
          <p className="text-gray-700 mb-6">I'm continuously working on new and exciting projects. Check back soon or visit my GitHub for more!</p>
          <a
            href="https://github.com/anamika-ms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
