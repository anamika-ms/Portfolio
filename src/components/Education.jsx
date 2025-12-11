const Education = () => {
  const data = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Rajiv Gandhi Institute of Technology (RGIT), Kottayam",
      years: "2024 - 2026",
      cgpa: "CGPA: 7.98/10",
      status: "Pursuing",
      highlights: [
        "Advanced Software Development",
        "Database Systems",
        "Full-Stack Web Development",
        "Data Science & Analytics"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Don Bosco College, Thrissur",
      years: "2020 - 2023",
      cgpa: "CGPA: 8.04/10",
      status: "Completed",
      highlights: [
        "Core Programming Fundamentals",
        "Web Development Basics",
        "Database Management",
        "Software Engineering Principles"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      degree: "Higher Secondary (12th) - Computer Science",
      institution: "Government Model Boys HSS, Thrissur",
      years: "2018 - 2020",
      status: "Completed",
      highlights: [
        "Computer Science Fundamentals",
        "Programming in C++",
        "Problem Solving",
        "Mathematics & Logic"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50" id="education">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Education
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto w-28"></div>
          </h2>
          <p className="text-lg text-gray-600 mt-8">Building a strong foundation through quality education</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (for larger screens) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {/* Education Cards */}
          <div className="space-y-8">
            {data.map((item, index) => (
              <div key={item.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} border-4 border-white shadow-lg relative z-10 flex items-center justify-center text-white font-bold`}>
                    {item.id}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-transparent group overflow-hidden">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                        <p className={`text-sm font-semibold px-3 py-1 rounded-full inline-block bg-gradient-to-r ${item.color} text-white`}>
                          {item.status}
                        </p>
                      </div>
                    </div>

                    {/* Institution */}
                    <p className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
                      <span className="text-2xl mr-2">🏫</span>
                      {item.institution}
                    </p>

                    {/* Years & CGPA */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <span className="text-blue-500 font-bold mr-2">📅</span>
                        <span>{item.years}</span>
                      </div>
                      {item.cgpa && (
                        <div className="flex items-center">
                          <span className="text-green-500 font-bold mr-2">📊</span>
                          <span className="font-semibold text-gray-900">{item.cgpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Highlights/Coursework */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
                        Key Areas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 bg-gradient-to-r ${item.color} text-white text-sm rounded-full`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🎓</span>
              Academic Excellence
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Consistent High Performance (8.0+ CGPA)</li>
              <li>✓ Strong Foundation in CS Fundamentals</li>
              <li>✓ Hands-on Project Experience</li>
              <li>✓ Dedication to Continuous Learning</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">🚀</span>
              Learning Journey
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ From Theory to Real-World Applications</li>
              <li>✓ Building Industry-Ready Skills</li>
              <li>✓ Exploring Emerging Technologies</li>
              <li>✓ Contributing to Tech Community</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
