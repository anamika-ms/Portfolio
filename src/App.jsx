import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 text-gray-800 font-sans">

      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 space-y-24 py-10">

        {/* HERO SECTION */}
        <section id="hero" className="scroll-mt-20">
          <Hero />
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>

      </div>

      {/* FOOTER */}
      {/* <Footer /> */}

    </div>
  );
}
