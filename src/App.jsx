import { useState, useEffect } from "react";
import "./index.css";

import logo from "./assets/images/Logo.png";
import first from "./assets/images/1.png";
import third from "./assets/images/3.png";
import fourth from "./assets/images/4.png";
import project1 from "./assets/images/project_capstone.mp4";
import project2 from "./assets/images/project_bot.jpeg";

import jane from "./assets/images/janee.png";
import about1 from "./assets/images/about_1.jpg";
import about2 from "./assets/images/about_2.jpg";

import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="animated-bg text-pink-900 scroll-smooth">

{/* NAVBAR */}

    <nav className="fixed w-full backdrop-blur-md bg-white/60 border-b border-pink-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <img src={logo} className="w-12 rounded-full"/>
          <h1 className="font-bold text-lg tracking-wide">Jane Javillo</h1>
        </div>

          <div className="hidden md:flex gap-8">
            <a href="#home" className="navBtn">Home</a>
            <a href="#about" className="navBtn">About</a>
            <a href="#skills" className="navBtn">Skills</a>
            <a href="#projects" className="navBtn">Projects</a>
            <a href="#contact" className="navBtn">Contact</a>
          </div>

            <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>🎀</button>
        </div>

          {menuOpen && (
            <div className="md:hidden flex flex-col items-center pb-4 gap-4">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>)}
      </nav>

        <section id="home" className="min-h-screen flex items-center pt-28 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-5xl md:text-6xl font-bold text-pink-700">Hi, I'm Jane ✨</h2>
              <p className="mt-6 text-lg text-pink-800"> Frontend Developer • Cybersecurity Enthusiast • UI/UX Designer</p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="#projects" className="primaryBtn">View Projects</a>
              <a href="CurriculumVitae.pdf" className="secondaryBtn">Download CV</a>
            </div>
            </div>
              <div className="flex justify-center" data-aos="fade-left">
                <img src={jane} className="w-[320px] drop-shadow-2xl animate-float"/>
              </div>
        </div>
      </section>

        <section>
          <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6">
            <a href="https://github.com"><FaGithub className="social"/></a>
            <a href="https://facebook.com"><FaFacebook className="social"/></a>
            <a href="https://instagram.com"><FaInstagram className="social"/></a>
            <a href="https://twitter.com"><FaTwitter className="social"/></a>
            <a href="https://pinterest.com"><FaPinterest className="social"/></a>
          </div>
        </section>

          <section id="about" className="py-24 px-6 bg-white/40 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-6" data-aos="zoom-in">
              <img src={about1} className="rounded-3xl shadow-xl hover:scale-105 transition"/>
              <img src={about2} className="rounded-3xl shadow-xl hover:scale-105 transition"/>
            </div>

              <div data-aos="fade-up">
                <h3 className="sectionTitle">About Me</h3>
                <p className="mt-6 text-pink-800">
                  I am currently taking BS Information Technology major in Network Technology.
                  I am passionate about cybersecurity, cloud security, and UI/UX design.
                </p>
                  <h4 className="mt-6 font-semibold text-xl text-pink-700">Certifications</h4>
                    <ul className="mt-3 space-y-2 text-pink-800">
                      <li>• Cisco – Cybersecurity</li>
                      <li>• AWS – Cloud Security</li>
                      <li>• Qualys – Vulnerability Management</li>
                    </ul>
              </div>

          </div>

          </section>

            <section id="skills" className="py-24 px-6">
              <div className="max-w-6xl mx-auto text-center">
              <h3 className="sectionTitle">Skills</h3>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="skillCard" data-aos="fade-up">
                    <h4>Frontend</h4>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="skill">React</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                      </div>
                  </div>

                  <div className="skillCard" data-aos="fade-up">
                    <h4>Backend</h4>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="skill">Firebase</span>
                        <span className="skill">MySQL</span>
                      </div>
                  </div>

                  <div className="skillCard" data-aos="fade-up">
                    <h4>Security</h4>
                      <div className="flex flex-wrap gap-2 mt-3">
                        <span className="skill">Network Defense</span>
                        <span className="skill">Cybersecurity</span>
                      </div>
                  </div>
                </div>

            </div>

            </section>

                <section id="projects" className="py-24 px-6 bg-white/40 backdrop-blur-lg">
                  <div className="max-w-6xl mx-auto text-center">
                    <h3 className="sectionTitle">Projects</h3>
                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                      {[first, third, fourth].map((img, i) => (
                    <div key={i} className="projectCard group" data-aos="zoom-in">
                      <img src={img} className="w-full h-64 object-cover rounded-xl group-hover:scale-110 transition duration-500"/>
                    <div className="projectOverlay">Project {i + 1}</div>
                    </div>))}
                  </div>

                    <div className="grid md:grid-cols-2 gap-10 mt-20 items-center" data-aos="fade-up">
                      <div className="text-left">
                        <h4 className="text-2xl font-semibold text-pink-700">Chicken Manure Robot Scraper</h4>
                        <p className="mt-4 text-pink-800">Automation system for poultry farm cleaning using Java, C++ and Firebase.</p>
                      </div>
                        <div className="grid gap-4">
                          <img src={project2} className="rounded-2xl shadow-lg"/>
                            <iframe src={project1} className="rounded-2xl h-64"/>
                        </div>
                    </div>
                  </div>
                </section>

                  <section id="contact" className="py-24 text-center px-6">
                    <h3 className="sectionTitle">Contact</h3>
                    <p className="mt-6 text-pink-800">
                      Feel free to reach out for collaborations,
                      internships, or tech opportunities.
                    </p>
                      <a href="mailto:javilloericajande@gmail.com" className="primaryBtn mt-10 inline-block">Send Email ✨</a>
                  </section>
                    <a href="#contact" className="fixed bottom-6 right-6 bg-pink-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-110 transition">💌</a>

                    <footer className="bg-white/60 backdrop-blur text-center py-6">
                      <p>© 2026 Jane Javillo • React + Tailwind</p>
                    </footer>

    </div>
  );
}

export default App;