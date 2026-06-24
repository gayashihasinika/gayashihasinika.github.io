import heroImg from './assets/hero.png';
import myPhoto from './assets/myphoto.png';
import project1 from './assets/project1.png';
import project2 from './assets/project2.png';

import {
  FaReact, FaLaravel, FaJs, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub, FaLinkedin, FaDesktop, FaPhp
} from "react-icons/fa";

import {
  SiTailwindcss, SiMysql, SiPostman, SiDocker
} from "react-icons/si";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Active Section Tracker
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px -20%" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="bg-[#09090B] text-white min-h-screen overflow-hidden scroll-smooth font-sans">

      {/* Scroll Progress Bar (ADD HERE) */}
      <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] bg-white/5 backdrop-blur">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Circular Scroll Indicator */}
      <div className="fixed bottom-8 right-8 z-[9999]">
        <div className="relative w-16 h-16">

          {/* Background Circle */}
          <svg className="w-16 h-16 rotate-[-90deg]">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="4"
              fill="none"
            />

            {/* Progress Circle */}
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 28}
              strokeDashoffset={
                2 * Math.PI * 28 * (1 - scrollProgress / 100)
              }
              className="transition-all duration-150"
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center text-xs text-white/70">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>


      {/* Background Orbs - Enhanced */}
      <div className="fixed top-[-180px] left-[-120px] w-[650px] h-[650px] bg-gradient-to-br from-purple-600/20 via-cyan-500/10 to-transparent rounded-full blur-[130px] pointer-events-none"></div>
      <div className="fixed bottom-[-200px] right-[-150px] w-[580px] h-[580px] bg-gradient-to-br from-sky-500/15 via-purple-500/10 to-transparent rounded-full blur-[110px] pointer-events-none"></div>

      {/* Navbar - Active States + Smooth Scroll */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 bg-black/80 backdrop-blur-2xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
            <span className="text-white text-2xl font-bold tracking-tighter">G</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent tracking-tighter">
            Gayashi
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
            className={`hover:text-purple-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all ${activeSection === "about" ? "text-purple-400" : ""}`}>
            About
          </a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}
            className={`hover:text-purple-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all ${activeSection === "skills" ? "text-purple-400" : ""}`}>
            Skills
          </a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
            className={`hover:text-purple-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all ${activeSection === "projects" ? "text-purple-400" : ""}`}>
            Projects
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
            className={`hover:text-purple-400 transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 hover:after:w-full after:transition-all ${activeSection === "contact" ? "text-purple-400" : ""}`}>
            Contact
          </a>
        </div>

        {/* Social Icons + Mobile Menu */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-2xl">
            <a href="https://github.com/gayashihasinika" target="_blank" className="hover:text-purple-400 transition-all hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gayashi-hasinika-8238a0290/" target="_blank" className="hover:text-purple-400 transition-all hover:scale-110">
              <FaLinkedin />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-purple-400 hover:text-white transition-all"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Enhanced */}
      {menuOpen && (
        <div className="md:hidden fixed top-[88px] left-0 w-full bg-[#09090B]/95 backdrop-blur-2xl border-b border-white/10 z-50 py-10">
          <div className="flex flex-col items-center gap-8 text-lg font-medium">
            <a onClick={() => scrollToSection("about")} className="hover:text-purple-400">About Me</a>
            <a onClick={() => scrollToSection("skills")} className="hover:text-purple-400">Skills</a>
            <a onClick={() => scrollToSection("projects")} className="hover:text-purple-400">Projects</a>
            <a onClick={() => scrollToSection("contact")} className="hover:text-purple-400">Contact</a>

            <div className="flex gap-8 mt-6">
              <a href="https://github.com/gayashihasinika" target="_blank"><FaGithub className="text-3xl hover:text-purple-400" /></a>
              <a href="https://www.linkedin.com/in/gayashi-hasinika-8238a0290/" target="_blank"><FaLinkedin className="text-3xl hover:text-purple-400" /></a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-16 pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#1b2533_0%,transparent_70%)] opacity-60"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 max-w-2xl z-10"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-purple-400/20 px-6 py-2.5 rounded-3xl text-sm mb-8 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-400"></span>
            </span>
            Open to Freelance & Opportunities
          </div>

          <p className="text-purple-400 font-medium tracking-widest text-lg mb-2">HELLO, I'M</p>

          <h1 className="text-[4.8rem] md:text-[6.2rem] leading-none font-bold tracking-tighter bg-gradient-to-br from-white via-purple-100 to-cyan-300 bg-clip-text text-transparent">
            GAYASHI
          </h1>

          <h2 className="text-3xl md:text-4xl text-gray-300 mt-4 font-light">Full Stack Developer</h2>

          <p className="text-gray-400 mt-8 text-lg max-w-lg leading-relaxed">
            I craft beautiful, scalable, and user-centric web applications using modern technologies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-4xl font-semibold text-white">1+</div>
              <div className="text-sm text-gray-400 tracking-widest mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">2+</div>
              <div className="text-sm text-gray-400 tracking-widest mt-1">Applications Built</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">15+</div>
              <div className="text-sm text-gray-400 tracking-widest mt-1">Features Delivere</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">50+</div>
              <div className="text-sm text-gray-400 tracking-widest mt-1">Bugs Fixed</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 px-9 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-purple-500/40 transition-all flex items-center gap-3">
                Explore Projects <span className="text-xl">→</span>
              </motion.button>
            </a>

            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                className="border border-white/30 hover:border-purple-400 px-9 py-4 rounded-2xl font-semibold text-lg transition-all">
                Get In Touch
              </motion.button>
            </a>

            <a href="./GayashiHasinika_CV.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}
                className="group border border-purple-400/40 hover:border-purple-400 px-7 py-4 rounded-2xl font-semibold flex items-center gap-3 transition-all">
                📄 View CV
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Right Side - Your Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="absolute -inset-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/15 rounded-[4rem] blur-3xl"></div>

          <div className="relative z-10">
            <motion.img
              src={myPhoto}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-[320px] md:w-[420px] rounded-3xl shadow-2xl shadow-purple-500/30 border border-white/10 object-cover"
            />

            <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md border border-purple-400/30 px-6 py-3 rounded-2xl text-sm flex items-center gap-2 shadow-2xl">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Available for Work
            </div>
          </div>
        </motion.div>
      </section>

      {/* Marquee - Enhanced */}
      <section className="border-y border-white/10 py-6 overflow-hidden">
        <div className="flex gap-12 text-gray-400 whitespace-nowrap animate-marquee">
          {["React", "Laravel", "PHP", "MySQL", "Tailwind CSS", "Docker", "Git", "REST APIs", "JavaScript"].map((tech) => (
            <span key={tech} className="text-lg font-medium hover:text-purple-400 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 md:px-12 py-24 bg-[#12121a] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm tracking-[3px] font-medium">CHAPTER 01</span>
            <h2 className="text-5xl font-bold mt-3">About Me</h2>
          </div>
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 space-y-8 text-lg text-gray-300 leading-relaxed">
              <p>I'm a passionate Full Stack Developer who enjoys creating modern, responsive, and user-friendly applications using React, Laravel, and MySQL. I love turning ideas into real projects with clean UI and smooth user experiences.</p>
              <p>I focus on building scalable web applications and continuously improving my skills in modern web technologies and best practices</p>
            </div>
            <div className="md:col-span-5 space-y-6">
              <div className="bg-[#1a1a24] border border-white/10 p-8 rounded-3xl hover:border-purple-400/30 transition-all">
                <div className="text-4xl mb-4 text-purple-400">🎓</div>
                <h3 className="text-xl font-semibold">BSc (Hons) Computer Science</h3>
              </div>
              <div className="bg-[#1a1a24] border border-white/10 p-8 rounded-3xl hover:border-purple-400/30 transition-all">
                <div className="text-4xl mb-4 text-purple-400">💼</div>
                <h3 className="text-xl font-semibold">1+ Years Experience</h3>
              </div>
              <div className="bg-[#1a1a24] border border-white/10 p-8 rounded-3xl hover:border-purple-400/30 transition-all">
                <div className="text-4xl mb-4 text-purple-400">🚀</div>
                <h3 className="text-xl font-semibold">Passionate Learner</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="px-6 md:px-12 py-24 bg-[#111827] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm tracking-[3px]">
              CHAPTER 02
            </span>
            <h2 className="text-5xl font-bold mt-3">
              Education
            </h2>
          </div>

          <div className="bg-[#1a1a24] border border-white/10 rounded-3xl p-10 hover:border-purple-400/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl">🎓</span>
              <div>
                <h3 className="text-2xl font-semibold">
                  BSc (Hons) Computer Science
                </h3>
                <p className="text-gray-400">
                  Asia Pacific Institute of Information Technology
                </p>

                <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20">
                  <span className="text-purple-400 font-semibold">
                    Second Class (Second Division)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-purple-400 mb-6">
              Expected Graduation: 2026 December
            </p>

            <h4 className="text-lg font-semibold mb-4">
              Relevant Coursework
            </h4>

            <div className="grid md:grid-cols-2 gap-4 text-gray-300">
              <div>• Data Structures & Algorithms</div>
              <div>• Database Systems</div>
              <div>• Software Engineering</div>
              <div>• Web Application Development</div>
              <div>• System Analysis & Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-6 md:px-12 py-24 bg-[#0f172a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm tracking-[3px]">
              CHAPTER 03
            </span>
            <h2 className="text-5xl font-bold mt-3">
              Certifications & Learning
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Certificate Card 1 */}
            <div className="bg-[#1a1a24] border border-white/10 rounded-3xl p-8 hover:border-purple-400/30 transition-all">
              <h3 className="text-xl font-semibold mb-3">
                HTML Essential Training
              </h3>

              <p className="text-gray-400 mb-4">
                Completed course by Jen Simmons on LinkedIn Learning
              </p>

              <a
                href="https://lnkd.in/gdvMBkr3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                View Certificate →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm tracking-[3px]">CHAPTER 04</span>
            <h2 className="text-5xl font-bold mt-3">Technical Expertise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-[#12121a] border border-white/5 rounded-3xl p-10 hover:border-purple-400/30 transition-all group">
              <div className="uppercase tracking-widest text-purple-400 text-sm mb-8">Frontend</div>
              <div className="space-y-6">
                {[{ icon: <FaReact className="text-cyan-400" />, name: "React" },
                { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
                { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind CSS" },
                { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
                { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS3" }]
                  .map((s, i) => (
                    <div key={i} className="flex items-center gap-5 text-lg">
                      <div className="text-4xl">{s.icon}</div>
                      <span>{s.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#12121a] border border-white/5 rounded-3xl p-10 hover:border-purple-400/30 transition-all group">
              <div className="uppercase tracking-widest text-purple-400 text-sm mb-8">Backend</div>
              <div className="space-y-6">
                {[{ icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
                { icon: <FaPhp className="text-purple-500" />, name: "PHP" },
                { icon: <SiMysql className="text-blue-500" />, name: "MySQL" },
                { icon: <SiPostman className="text-orange-400" />, name: "REST APIs" }]
                  .map((s, i) => (
                    <div key={i} className="flex items-center gap-5 text-lg">
                      <div className="text-4xl">{s.icon}</div>
                      <span>{s.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-[#12121a] border border-white/5 rounded-3xl p-10 hover:border-purple-400/30 transition-all group">
              <div className="uppercase tracking-widest text-purple-400 text-sm mb-8">Tools &amp; Others</div>
              <div className="space-y-6">
                {[{ icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
                { icon: <FaGithub className="text-white" />, name: "GitHub" },
                { icon: <SiDocker className="text-blue-400" />, name: "Docker" },
                { icon: <FaDesktop className="text-cyan-300" />, name: "GitHub Desktop" }]
                  .map((s, i) => (
                    <div key={i} className="flex items-center gap-5 text-lg">
                      <div className="text-4xl">{s.icon}</div>
                      <span>{s.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Highlights Section */}
      <section className="px-6 md:px-12 py-24 bg-[#0f172a] border-t border-white/5">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm tracking-[3px]">
              QUICK OVERVIEW
            </span>
            <h2 className="text-5xl font-bold mt-3">
              Resume Highlights
            </h2>
            <p className="text-gray-400 mt-4">
              Key strengths and expertise at a glance
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >

            {[
              "Full Stack Developer",
              "React + Laravel Specialist",
              "Production System Experience",
              "REST API Development",
              "Database Design & Optimization",
              "Responsive UI Development"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#1a1a24] border border-white/10 rounded-2xl px-6 py-5 hover:border-purple-400/30 transition-all"
              >
                <span className="text-green-400 text-lg">✓</span>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="px-6 md:px-12 py-24 bg-[#111827]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Experience</h2>
          </div>

          <div className="border-l border-purple-500 pl-8 space-y-10">
            <div>
              <span className="text-cyan-400">2024 - Present</span>

              <h3 className="text-2xl font-semibold mt-2">
                Software Engineer Trainee
              </h3>

              <p className="text-purple-400 font-medium mt-1">
                Impresso Ceylon Holdings (PVT) LTD
              </p>

              <ul className="mt-4 text-gray-400 space-y-3">
                <li>• Developed and maintained modern web applications using React.js and Laravel.</li>
                <li>• Designed and integrated RESTful APIs for business-critical systems.</li>
                <li>• Built responsive and user-friendly interfaces with Tailwind CSS.</li>
                <li>• Worked with MySQL databases, including schema design and optimization.</li>
                <li>• Collaborated with cross-functional teams to deliver production-ready features.</li>
                <li>• Performed bug fixing, testing, and application maintenance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-12 py-24 bg-[#12121a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm tracking-[3px]">CHAPTER 05</span>
            <h2 className="text-5xl font-bold mt-3">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div whileHover={{ y: -12 }} className="group bg-[#1a1a24] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-400/30 transition-all">
              <div className="relative overflow-hidden">
                <img src={project1} alt="Project 1" className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-9">
                <h3 className="text-3xl font-semibold">Appointment Booking Platform</h3>
                <p className="text-gray-400 mt-4">Full-featured booking system built with React & Laravel.</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Laravel", "Tailwind", "MySQL"].map(t => <span key={t} className="text-xs bg-white/5 px-4 py-1.5 rounded-full border border-white/10">{t}</span>)}
                </div>
                <a href="https://trypod.lk/" target="_blank" rel="noopener noreferrer">
                  <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 rounded-2xl font-semibold hover:brightness-110 transition-all">Visit Live Project →</button>
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -12 }} className="group bg-[#1a1a24] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-400/30 transition-all">
              <div className="relative overflow-hidden">
                <img src={project2} alt="Project 2" className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-9">
                <h3 className="text-3xl font-semibold">Crop Management System</h3>
                <p className="text-gray-400 mt-4">Agriculture management system with advanced features.</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["React", "Laravel", "MySQL", "Tailwind"].map(t => <span key={t} className="text-xs bg-white/5 px-4 py-1.5 rounded-full border border-white/10">{t}</span>)}
                </div>
                <a href="https://agriops-staging.on-forge.com/" target="_blank" rel="noopener noreferrer">
                  <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 rounded-2xl font-semibold hover:brightness-110 transition-all">Visit Live Project →</button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">What I Do</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Frontend", desc: "Building responsive React applications" },
              { title: "Backend", desc: "Laravel APIs and business systems" },
              { title: "Database", desc: "MySQL architecture & optimization" },
              { title: "Deployment", desc: "Hosting and maintaining applications" },
            ].map((item) => (
              <div key={item.title} className="bg-[#111827] p-8 rounded-3xl border border-white/10 hover:border-purple-400/30 transition-all">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-bold">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-400 mt-6">I'm always excited to work on new projects.</p>

          <form action="https://formsubmit.co/gayashihasinika482@gmail.com" method="POST" className="mt-16 space-y-8">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            <input type="hidden" name="_next" value="https://gayashihasinika.github.io/" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              <input type="text" name="name" placeholder="Your Name" required className="bg-[#1a1a24] border border-white/10 focus:border-purple-400 rounded-2xl px-8 py-5 outline-none text-lg" />
              <input type="email" name="email" placeholder="Your Email" required className="bg-[#1a1a24] border border-white/10 focus:border-purple-400 rounded-2xl px-8 py-5 outline-none text-lg" />
            </motion.div>
            <textarea name="message" rows="7" placeholder="Tell me about your project..." required className="bg-[#1a1a24] border border-white/10 focus:border-purple-400 rounded-3xl px-8 py-7 outline-none text-lg w-full"></textarea>

            <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 py-6 text-xl font-semibold rounded-3xl hover:brightness-110 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-sm text-gray-500">
        © 2026 Gayashi Hasinika. All Rights Reserved.
      </footer>
    </div>
  );
}