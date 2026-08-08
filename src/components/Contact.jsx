const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "anamikams.dev@gmail.com",
      link: "mailto:anamikams2003@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/anamika-m-s",
      link: "https://linkedin.com/in/anamika-m-s",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/anamika-ms",
      link: "https://github.com/anamika-ms",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Kerala, India",
      link: null,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="contact">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            Get In Touch
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto w-32"></div> */}
          </h2>
          <p className="text-lg text-gray-600 mt-8">Let's connect and explore opportunities for collaboration</p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link || "#"}
              target={method.link && method.link.startsWith("http") ? "_blank" : "_self"}
              rel={method.link && method.link.startsWith("http") ? "noopener noreferrer" : ""}
              className={`group relative overflow-hidden rounded-lg p-6 bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${!method.link ? 'cursor-default' : ''}`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                <div className={`text-5xl mb-4 text-center`}>{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{method.title}</h3>
                <p className="text-gray-600 text-center font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-1 h-8 bg-blue-500 mr-3 rounded"></span>
              Let's Talk!
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question 
              or just want to say hello, feel free to reach out to me. I'll do my best to respond as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">💡</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Collaboration</h4>
                  <p className="text-gray-600 text-sm">Open to exciting projects and partnerships</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">🎯</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Quick Response</h4>
                  <p className="text-gray-600 text-sm">Will get back to you within 24-48 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-2xl mr-4">🌟</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Flexible</h4>
                  <p className="text-gray-600 text-sm">Available for freelance, full-time, or part-time roles</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🎓</span>
                About Me
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <span><strong>MCA Student</strong> at RGIT, Kottayam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <span><strong>Full-Stack Developer</strong> with hands-on experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-3">✓</span>
                  <span><strong>Tech Enthusiast</strong> passionate about innovation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🚀</span>
                Currently
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-3">→</span>
                  <span>Exploring <strong>advanced web technologies</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-3">→</span>
                  <span>Building <strong>scalable applications</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 font-bold mr-3">→</span>
                  <span>Contributing to <strong>open-source projects</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-lg mb-8 text-blue-100">
            Drop me an email or connect on LinkedIn to start a conversation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:anamikams.dev@gmail.com"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/anamika-m-s"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/20 border-2 border-white text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Thank you for visiting my portfolio. I look forward to connecting with you! 🙌
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
