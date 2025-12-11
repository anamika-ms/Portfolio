const Skills = () => {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "C/C++", level: 80 },
        { name: "SQL", level: 87 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "React.js", level: 85 },
        { name: "HTML5", level: 92 },
        { name: "CSS3", level: 88 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Bootstrap", level: 87 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      items: [
        { name: "Django", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 82 },
        { name: "REST APIs", level: 88 }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      color: "from-orange-500 to-red-500",
      items: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "SQLite", level: 84 },
        { name: "Database Design", level: 86 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      color: "from-indigo-500 to-blue-500",
      items: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 92 },
        { name: "Vite", level: 85 },
        { name: "Google Colab", level: 80 }
      ]
    },
    {
      title: "Data Science & ML",
      icon: "📊",
      color: "from-violet-500 to-purple-500",
      items: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 83 },
        { name: "Matplotlib", level: 82 },
        { name: "TensorFlow", level: 78 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50" id="skills">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Technical Skills
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto w-32"></div> */}
          </h2>
          <p className="text-lg text-gray-600 mt-8">Proficient in a wide range of technologies and frameworks</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-transparent group"
            >
              {/* Header with Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${group.color} mb-4`}>
                <span className="text-2xl">{group.icon}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition">
                {group.title}
              </h3>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${group.color} rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-blue-500 mr-3 rounded"></span>
              Core Competencies
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Full-Stack Web Development</li>
              <li>✓ Database Design & Optimization</li>
              <li>✓ RESTful API Development</li>
              <li>✓ Responsive UI/UX Design</li>
              <li>✓ Data Analysis & Visualization</li>
              <li>✓ Version Control & Git Workflows</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
              Soft Skills
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Problem Solving & Analytical Thinking</li>
              <li>✓ Team Collaboration & Communication</li>
              <li>✓ Project Management</li>
              <li>✓ Attention to Detail</li>
              <li>✓ Adaptability & Quick Learner</li>
              <li>✓ Documentation & Technical Writing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
