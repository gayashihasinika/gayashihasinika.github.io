import heroImg from './assets/hero.png'
import { motion } from "framer-motion"
import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import {
  FaReact,
  FaLaravel,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaDesktop
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiDocker
} from "react-icons/si";
import { useState } from "react";

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden scroll-smooth">

      {/* Blue Blur Background */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-black/40 backdrop-blur-lg border-b border-blue-900/20">

        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Gayashi
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition">About Me</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-2xl">

          <a
            href="https://github.com/gayashihasinika"
            target="_blank"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gayashi-hasinika-8238a0290/"
            target="_blank"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl ml-2"
          >
            ☰
          </button>

        </div>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-blue-900/20 z-50 flex flex-col items-center gap-6 py-6 text-lg">

          <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-blue-400">
            About Me
          </a>

          <a onClick={() => setMenuOpen(false)} href="#skills" className="hover:text-blue-400">
            Skills
          </a>

          <a onClick={() => setMenuOpen(false)} href="#projects" className="hover:text-blue-400">
            Projects
          </a>

          <a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-blue-400">
            Contact
          </a>

        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-10 gap-12 pt-24">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >

          {/* Intro Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-5">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Available for Freelance Work
          </div>

          <p className="text-blue-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
            Gayashi
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg leading-7">
            I build modern web applications with clean UI, scalable backend systems,
            and smooth user experiences using React, Laravel, and MySQL.
          </p>

          {/* Small Stats */}
          <div className="flex gap-6 mt-6 text-sm text-gray-400">

            <div>
              <p className="text-white text-xl font-semibold">1+</p>
              <p>Years Experience</p>
            </div>

            <div>
              <p className="text-white text-xl font-semibold">2</p>
              <p>Projects</p>
            </div>

            <div>
              <p className="text-white text-xl font-semibold">100%</p>
              <p>Dedication</p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* Projects */}
            <a href="#projects">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 hover:shadow-blue-500/40 text-white px-7 py-3 rounded-full font-semibold transition duration-300 shadow-xl shadow-blue-500/20">
                View Projects
              </button>
            </a>

            {/* Contact */}
            <a href="#contact">
              <button className="border border-blue-500/40 text-blue-300 px-7 py-3 rounded-full hover:bg-blue-500/10 hover:border-blue-400 transition duration-300">
                Contact Me
              </button>
            </a>

            {/* CV */}
            <a
              href={`${import.meta.env.BASE_URL}Gayashi-CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative overflow-hidden bg-[#111827] border border-cyan-400/30 px-7 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 hover:shadow-cyan-500/30 shadow-lg shadow-cyan-500/10">

                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition duration-300"></span>

                <span className="relative flex items-center gap-2 text-cyan-300 group-hover:text-white transition duration-300">
                  📄 View CV
                </span>

              </button>
            </a>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center relative"
        >

          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-3xl"></div>

          <img
            src={heroImg}
            alt="Hero"
            className="relative w-[300px] md:w-[420px] rounded-3xl border border-blue-500/20 shadow-2xl shadow-blue-500/20 hover:scale-105 transition duration-500"
          />

        </motion.div>

      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative px-10 md:px-20 py-20 bg-[#0b0f19] border-t border-blue-900/20"
      >

        <h2 className="text-4xl font-bold mb-10 text-blue-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Text */}
          <div>

            <p className="text-gray-300 leading-8 max-w-2xl mb-6">
              I'm a passionate Full Stack Developer who enjoys creating
              modern, responsive, and user-friendly applications using
              React, Laravel, and MySQL. I love turning ideas into real
              projects with clean UI and smooth user experiences.
            </p>

            <p className="text-gray-400 leading-7">
              I focus on building scalable web applications and continuously
              improving my skills in modern web technologies and best practices.
            </p>

          </div>

          {/* Right Info Card */}
          <div className="space-y-5">

            {/* Degree */}
            <div className="bg-[#111827] border border-blue-500/10 p-6 rounded-2xl hover:border-blue-400/40 transition">
              <h3 className="text-blue-400 font-semibold mb-2">
                🎓 Education
              </h3>
              <p className="text-gray-300">
                BSc (Hons) Computer Science Graduate
              </p>
            </div>

            {/* Experience */}
            <div className="bg-[#111827] border border-blue-500/10 p-6 rounded-2xl hover:border-blue-400/40 transition">
              <h3 className="text-blue-400 font-semibold mb-2">
                💼 Experience
              </h3>
              <p className="text-gray-300">
                1+ Years Experience in Full Stack Development
              </p>
            </div>

            {/* Focus */}
            <div className="bg-[#111827] border border-blue-500/10 p-6 rounded-2xl hover:border-blue-400/40 transition">
              <h3 className="text-blue-400 font-semibold mb-2">
                🚀 Focus
              </h3>
              <p className="text-gray-300">
                Building scalable Laravel + React applications
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative px-10 md:px-20 py-20"
      >

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-16 text-blue-400 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="bg-[#111827] border border-blue-500/10 rounded-3xl p-8 hover:border-blue-400/40 transition duration-300 shadow-lg shadow-blue-500/5">

            <h3 className="text-2xl font-semibold text-white mb-8">
              Frontend
            </h3>

            <div className="space-y-5">

              {/* React */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaReact className="text-4xl text-cyan-400" />
                <span className="text-gray-300 text-lg">
                  React
                </span>
              </div>

              {/* JavaScript */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaJs className="text-4xl text-yellow-400" />
                <span className="text-gray-300 text-lg">
                  JavaScript
                </span>
              </div>

              {/* Tailwind */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <SiTailwindcss className="text-4xl text-cyan-300" />
                <span className="text-gray-300 text-lg">
                  Tailwind CSS
                </span>
              </div>

              {/* HTML */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaHtml5 className="text-4xl text-orange-500" />
                <span className="text-gray-300 text-lg">
                  HTML5
                </span>
              </div>

              {/* CSS */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaCss3Alt className="text-4xl text-blue-400" />
                <span className="text-gray-300 text-lg">
                  CSS3
                </span>
              </div>

            </div>

          </div>

          {/* Backend */}
          <div className="bg-[#111827] border border-blue-500/10 rounded-3xl p-8 hover:border-blue-400/40 transition duration-300 shadow-lg shadow-blue-500/5">

            <h3 className="text-2xl font-semibold text-white mb-8">
              Backend
            </h3>

            <div className="space-y-5">

              {/* Laravel */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaLaravel className="text-4xl text-red-500" />
                <span className="text-gray-300 text-lg">
                  Laravel
                </span>
              </div>

              {/* MySQL */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <SiMysql className="text-4xl text-blue-500" />
                <span className="text-gray-300 text-lg">
                  MySQL
                </span>
              </div>

              {/* Postman */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <SiPostman className="text-4xl text-orange-400" />
                <span className="text-gray-300 text-lg">
                  REST APIs
                </span>
              </div>

            </div>

          </div>

          {/* Tools */}
          <div className="bg-[#111827] border border-blue-500/10 rounded-3xl p-8 hover:border-blue-400/40 transition duration-300 shadow-lg shadow-blue-500/5">

            <h3 className="text-2xl font-semibold text-white mb-8">
              Tools & Platforms
            </h3>

            <div className="space-y-5">

              {/* Git */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaGitAlt className="text-4xl text-orange-500" />
                <span className="text-gray-300 text-lg">
                  Git
                </span>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaGithub className="text-4xl text-white" />
                <span className="text-gray-300 text-lg">
                  GitHub
                </span>
              </div>

              {/* Docker Desktop */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <SiDocker className="text-4xl text-blue-400" />
                <span className="text-gray-300 text-lg">
                  Docker Desktop
                </span>
              </div>

              {/* GitHub Desktop */}
              <div className="flex items-center gap-4 bg-[#0f172a] p-4 rounded-2xl hover:bg-blue-500/10 transition">
                <FaDesktop className="text-3xl text-cyan-300" />
                <span className="text-gray-300 text-lg">
                  GitHub Desktop
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative px-10 md:px-20 py-20 bg-[#0b0f19] border-t border-blue-900/20"
      >

        <h2 className="text-4xl font-bold mb-12 text-blue-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="group bg-[#111827] rounded-3xl overflow-hidden border border-blue-500/10 hover:border-blue-400/40 transition duration-500 hover:scale-[1.02] shadow-xl shadow-blue-500/5">

            {/* Image */}
            <div className="overflow-hidden relative">

              <img
                src={project1}
                alt="Appointment Booking Platform"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            </div>

            {/* Content */}
            <div className="p-8">

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                Appointment Booking Platform
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                A customer-friendly booking platform developed using
                Laravel, React, and Tailwind CSS. Includes advanced
                service filtering, service cart functionality,
                responsive store pages, and smooth booking experiences
                for users.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  React
                </span>

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  Laravel
                </span>

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  Tailwind CSS
                </span>

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  MySQL
                </span>

              </div>

              {/* Button */}
              <a
                href="https://trypod.lk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-8 group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/40">

                  {/* Glow Effect */}
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                  {/* Text */}
                  <span className="relative flex items-center gap-2">
                    View Project →
                  </span>

                </button>
              </a>

            </div>

          </div>

          {/* Project 2 */}
          <div className="group bg-[#111827] rounded-3xl overflow-hidden border border-blue-500/10 hover:border-blue-400/40 transition duration-500 hover:scale-[1.02] shadow-xl shadow-blue-500/5">

            {/* Image */}
            <div className="overflow-hidden relative">

              <img
                src={project2}
                alt="Crop Management System"
                className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

            </div>

            {/* Content */}
            <div className="p-8">

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-4">
                Crop Management System
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                A modern agriculture management system built with
                React, Laravel, and MySQL. Includes crop workflows,
                harvest tracking, field management, employee handling,
                reporting features, and production monitoring tools.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-6">

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  React
                </span>

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  Laravel
                </span>

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  MySQL
                </span>

                <span className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/20">
                  Tailwind CSS
                </span>

              </div>

              {/* Button */}
              <a
                href="https://agriops-staging.on-forge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-8 group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/40">

                  {/* Glow Effect */}
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                  {/* Text */}
                  <span className="relative flex items-center gap-2">
                    View Project →
                  </span>

                </button>
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative px-10 md:px-20 py-20"
      >

        <h2 className="text-4xl font-bold mb-6 text-blue-400 text-center">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12 text-center">
          Let's build something amazing together.
        </p>

        {/* Contact Form */}
        {/* Contact Form */}
        <form
          action="https://formsubmit.co/gayashihasinika482@gmail.com"
          method="POST"
          className="max-w-3xl mx-auto space-y-6"
        >

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Optional Subject */}
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Message!"
          />

          {/* Redirect After Submit */}
          <input
            type="hidden"
            name="_next"
            value="http://localhost:5173/"
          />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-[#101827] border border-blue-500/20 rounded-2xl px-6 py-4 outline-none focus:border-blue-400 text-white"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-[#101827] border border-blue-500/20 rounded-2xl px-6 py-4 outline-none focus:border-blue-400 text-white"
          />

          {/* Message */}
          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
            className="w-full bg-[#101827] border border-blue-500/20 rounded-2xl px-6 py-4 outline-none focus:border-blue-400 text-white resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg shadow-blue-500/20"
          >
            Send Message
          </button>

        </form>

      </section>

    </div>
  )
}