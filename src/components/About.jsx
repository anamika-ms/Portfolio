const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50 relative overflow-hidden" id="about">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          {/* <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">ABOUT ME</span>
          </div> */}
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            About Me<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></span>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            A passionate developer on a journey to create impactful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl">
                    🚀
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">Who I Am</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm a passionate full-stack developer with a strong foundation in Computer Applications, currently pursuing my Master's degree. 
                  I'm driven by curiosity and a commitment to continuous learning in the ever-evolving tech landscape. With hands-on experience 
                  in both frontend and backend development, I craft digital solutions that are not just functional but meaningful and user-centric.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 group-hover:from-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                    💡
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">My Philosophy</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I believe in writing clean, maintainable code and solving complex problems through logical thinking. Every project is an 
                  opportunity to learn something new and push my boundaries. I'm passionate about creating intuitive user experiences and 
                  building scalable applications that make a real impact on people's lives.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 group-hover:from-green-500/5 group-hover:to-green-500/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl">
                    ✨
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">What Drives Me</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The intersection of creativity and technology excites me deeply. Whether it's optimizing performance, exploring new frameworks, 
                  or mentoring others, I'm always seeking opportunities to grow. I'm committed to delivering excellence in every project and 
                  continuously challenging myself to be better.
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Highlights - Right Side */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">20+</div>
                <p className="text-gray-700 font-semibold">Live Projects</p>
              </div>
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">15+</div>
                <p className="text-gray-700 font-semibold">Tech Skills</p>
              </div>
              <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 mb-2">8.01</div>
                <p className="text-gray-700 font-semibold">Avg CGPA</p>
              </div>
              <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border border-pink-200 hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 mb-2">2K+</div>
                <p className="text-gray-700 font-semibold">Hours Coded</p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-100 p-8 rounded-2xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-3xl mr-3">⚡</span>
                Quick Facts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start group/item">
                  <span className="text-blue-500 font-bold text-xl mr-3 group-hover/item:scale-125 transition">→</span>
                  <span className="text-gray-700 group-hover/item:text-gray-900 transition"><strong>Full-Stack Developer</strong> with expertise in React, Django & Node.js</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-500 font-bold text-xl mr-3 group-hover/item:scale-125 transition">→</span>
                  <span className="text-gray-700 group-hover/item:text-gray-900 transition"><strong>Problem Solver</strong> tackling complex challenges daily</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-green-500 font-bold text-xl mr-3 group-hover/item:scale-125 transition">→</span>
                  <span className="text-gray-700 group-hover/item:text-gray-900 transition"><strong>Tech Enthusiast</strong> exploring emerging technologies</span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-pink-500 font-bold text-xl mr-3 group-hover/item:scale-125 transition">→</span>
                  <span className="text-gray-700 group-hover/item:text-gray-900 transition"><strong>Collaborative</strong> team player passionate about growth</span>
                </li>
              </ul>
            </div>

            {/* Beyond Code */}
            <div className="bg-gradient-to-br from-purple-50 via-purple-50 to-pink-100 p-8 rounded-2xl border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🌟</span>
                Beyond Code
              </h3>
              <p className="text-gray-700 leading-relaxed mb-5">
                When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-purple-700 rounded-full text-sm font-bold border border-purple-300 hover:bg-white transition">📚 Learning</span>
                <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-purple-700 rounded-full text-sm font-bold border border-purple-300 hover:bg-white transition">💻 Innovation</span>
                <span className="px-4 py-2 bg-white/60 backdrop-blur-sm text-purple-700 rounded-full text-sm font-bold border border-purple-300 hover:bg-white transition">🚀 Growth</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <div className="my-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div> */}

        {/* Additional Section - Values */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">My Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h4 className="text-xl font-bold text-white mb-2">Excellence</h4>
              <p className="text-blue-100">Striving for excellence in every line of code and every project</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-white mb-2">Collaboration</h4>
              <p className="text-blue-100">Believing in the power of teamwork and shared learning</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-5xl mb-4">🔄</div>
              <h4 className="text-xl font-bold text-white mb-2">Growth</h4>
              <p className="text-blue-100">Continuous improvement and embracing challenges</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
