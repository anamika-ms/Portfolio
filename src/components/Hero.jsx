const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        {/* <div className="mb-6 inline-block">
          <span className="text-lg font-semibold text-purple-300 bg-purple-900/50 px-4 py-2 rounded-full border border-purple-400/30">
            Welcome to my Portfolio
          </span>
        </div> */}

        {/* Name */}
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Anamika M S</span>
        </h1>

        {/* Role */}
        <p className="text-2xl md:text-3xl text-purple-200 mb-4 font-medium">
          Full-Stack Developer & Tech Innovator
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate coding enthusiast with a strong foundation in software development and a commitment to continuous learning. 
          Dedicated to building efficient and scalable web applications, with a keen interest in both frontend and backend technologies.
        </p>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <p className="text-2xl font-bold text-blue-400">20+</p>
            <p className="text-sm text-gray-300">Projects</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <p className="text-2xl font-bold text-purple-400">15+</p>
            <p className="text-sm text-gray-300">Tech Skills</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4">
            <p className="text-2xl font-bold text-pink-400">8.01</p>
            <p className="text-sm text-gray-300">Avg CGPA</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
          {/* <button 
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </button> */}
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
