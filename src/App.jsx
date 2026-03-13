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
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaPinterest,} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import CertificatesTimeline from "./components/CertificatesTimeline";
import info from "./assets/images/info.png";
import soft from "./assets/images/software.png";
import pj from "./assets/images/pj.png";
import email from "./assets/images/email.png";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="animated-bg text-pink-900 scroll-smooth font-emilys">

    <nav className="fixed w-full backdrop-blur-md bg-white/60 border-b border-pink-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center text-left gap-3">
          <img src={logo} className="w-12 rounded-full"/>
          <h1 className="font-bold text-xl md:text-xl tracking-wide">Jane Javillo</h1>
        </div>

          <div className="hidden md:flex gap-8 text-xl md:text-xl ">
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
            <div data-aos="fade-down-right">
              <h2 className="text-4xl md:text-7xl font-bold font-serif text-pink-700 animate-typing">Hi, I'm Jane ✨</h2>
              <p className="mt-6 text-lg md:text-4xl text-pink-800 font-serif"> Frontend Developer • Cybersecurity Enthusiast • UI/UX Designer</p>
            <div className="flex gap-4 mt-8 flex-wrap">
              <a href="#projects" className="primaryBtn">View Projects</a>
              <a href="CurriculumVitae.pdf" download="javillo_cv.pdf" className="secondaryBtn">Download CV</a>
            </div>
            </div>
              <div className="w-full max-w-lg" data-aos="fade-up-left">
                <img src={jane} className="w-full h-full object-cover drop-shadow-2xl animate-float"/>
              </div>
        </div>
      </section>

        <section>
          <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6">
            <a href="https://github.com/erica-aaa"><FaGithub className="social"/></a>
            <a href="https://facebook.com"><FaFacebook className="social"/></a>
            <a href="https://instagram.com/janejavs_"><FaInstagram className="social"/></a>
            <a href="https://twitter.com/janejavs_"><FaTwitter className="social"/></a>
            <a href="https://pinterest.com/janejavs_"><FaPinterest className="social"/></a>
          </div>
        </section>

          <section id="about" className="py-24 px-6 bg-white/40 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="flex flex-row md:relative gap-1 md:gap-3 md:block w-full max-w-md md:h-125 mx-auto m-2 p-2 lg:p-3 lg:m-3">
                  <img src={about2} data-aos="flip-left" className="w-1/2 md:absolute md:bottom-0 md:left-0 md:w-55 rounded-2xl shadow-lg"/>
                  <img src={about1} data-aos="flip-right" className="w-1/2 md:absolute md:top-0 md:right-0 md:w-55 rounded-2xl shadow-lg "/>
            </div>

              <div data-aos="zoom-in">
               <div className="flex gap-3">
                 <img src={info} className="w-12 rounded-full"/>
                 <h3 className="sectionTitle">About Me</h3>
               </div>

                <p className="mt-6 text-pink-800">
                  I am currently taking BS Information Technology major in Network Technology.
                  I am passionate about cybersecurity, cloud security, and UI/UX design.
                </p>
                <CertificatesTimeline />
              </div>
          </div>
          </section>

            <section id="skills" className="py-24 px-6">
              <div className="max-w-6xl mx-auto text-center">

               <div className="flex gap-3 justify-center">
                 <img src={soft} className="w-12 "/>
                 <h3 className="sectionTitle">Skills</h3>
               </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="skillCard" data-aos="fade-left">
                    <h4 className="mb-4 font-semibold">Frontend</h4>
                      <ul className="list-disc list-inside space-y-1 text-left mx-auto w-fit">
                        <li className="skill">React</li>
                        <li className="skill">JavaScript</li>
                        <li className="skill">HTML</li>
                        <li className="skill">CSS</li>
                      </ul>
                  </div>

                  <div className="skillCard" data-aos="zoom-in">
                    <h4 className="mb-4 font-semibold">Backend</h4>
                      <ul className="list-disc list-inside space-y-1 text-left mx-auto w-fit">
                        <li className="skill">Firebase</li>
                        <li className="skill">MySQL</li>
                      </ul>
                  </div>

                  <div className="skillCard" data-aos="fade-right">
                    <h4 className="mb-4 font-semibold">Security</h4>
                      <ul className="list-disc list-inside space-y-1 text-left mx-auto w-fit">
                        <li className="skill">Network Defense</li>
                        <li className="skill">Cybersecurity</li>
                      </ul>
                  </div>
                </div>
            </div>
            </section>

                <section id="projects" className="py-24 px-6 bg-white/40 backdrop-blur-lg">
                  <div className="max-w-6xl mx-auto text-center">

                   <div className="flex gap-3 justify-center">
                     <img src={pj} className="w-12 "/>
                     <h3 className="sectionTitle">Projects</h3>
                   </div>

                  <div className="grid md:grid-cols-3 gap-8 mt-12">
                      {[first, third, fourth].map((img, i) => (
                    <div key={i} className="projectCard group" data-aos="zoom-in">
                      <img src={img} className="w-full h-64 object-cover rounded-xl group-hover:scale-110 hover:brightness-110 transition duration-500"/>
                    </div>))}
                  </div>

                    <div className="grid md:grid-cols-2 gap-10 mt-20 items-center" data-aos="fade-up">
                      <div className="text-left">
                        <h4 className="text-2xl font-semibold text-pink-700">Chicken Manure Robot Scraper</h4>
                        <p className="mt-4 text-pink-800">Automation system for poultry farm cleaning using Java, C++ and Firebase.</p>
                      </div>
                        <div className="grid gap-4">
                          <img src={project2} className="rounded-2xl shadow-lg"/>
                            <iframe src={project1} className="rounded-2xl aspect-video "/>
                        </div>
                    </div>
                  </div>
                </section>

                  <section id="contact" className="py-24 text-center px-6">

                 <div className="flex gap-3 justify-center">
                     <img src={email} className="w-12 "/>
                   <h3 className="sectionTitle">Contact</h3>
                 </div>

                    <p className="mt-6 text-pink-800">
                      Feel free to reach out for collaborations,
                      internships, or tech opportunities.
                    </p>
                      <a href="mailto:javilloericajande@gmail.com" className="primaryBtn mt-10 inline-block">Send Email ✨</a>
                  </section>
                    

                    <footer className="bg-white/60 backdrop-blur text-center py-6">
                      <p>© 2026 Jane Javillo • React + Tailwind</p>
                    </footer>

                    <a href="#contact" className="fixed bottom-6 right-6 bg-pink-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-110 transition z-50">💌</a>

    </div>
  );
}

export default App;