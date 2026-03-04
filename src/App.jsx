import { useState } from 'react';
import './index.css';
import logo from './../src/assets/images/Logo.png';
import './index.css';
import first from './../src/assets/images/1.png';
import third from './../src/assets/images/3.png';
import fourth from './../src/assets/images/4.png';
import project1 from './../src/assets/images/project_capstone.mp4';
import project2 from './../src/assets/images/project_bot.jpeg';
import bg from './../src/assets/images/bg.jpg';
import jane from './../src/assets/images/janee.png';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import about1 from './../src/assets/images/about_1.jpg';
import about2 from './../src/assets/images/about_2.jpg';

function App() {
  const [menuOpen, setMenuOpen]= useState(false);
  
  return (
    <div className='bg-pink-50 text-pink-900 scroll-smooth'>
      <nav className='fixed w-full bg-pink-200/70 backdrop-blur-md shadow-md z-50'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex justify-around items-center'>
          <img src={logo} alt='logo' className='items-start flex flex-row max-w-20 rounded-full'></img>
          <h1 className='text-xl font-bold tracking-wide pr-25'>Erica's Portfolio 🎀</h1>
            <div className='hidden md:flex gap-8 font-medium'>
              <a href="#home" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>Home</a>
              <a href="#about" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>About</a>
              <a href="#skills" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>Skills</a>
              <a href="#projects" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>Project</a>
              <a href="#contact" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>Contact</a>
            </div>
              <button className='md:hidden text-2xl' onClick={() => setMenuOpen (!menuOpen)}> 🎀 </button>
                {menuOpen && (
                  <div className='md:hidden flex flex-col items-center pb-4 gap-3 font-medium'>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Project</a>
                    <a href="#contact">Contact</a>
                   </div>)} 
        </div>
      </nav>

 <section id='home' className='min-h-screen flex items-center px-6 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bg})`}}>
                <div className='max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify justify-between gap-12'>
                  <div className='text-center md:text-left max-w-xl'>
                    <h2 className='text-5xl md:text-7xl font-bold text-pink-700 leading-tight'>Hi! I'm Jane 🩷 </h2>
                    <p className='mt-6 text-lg text-pink-700 text-center'> A passionate frontend developer who loves creating interactive web experiences</p>
                  </div>
                      <div className=''>
                        <img src= {jane} alt='eme' className='w-lg md:w[450px] drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]'/>
                        <div className=' inset-0 bg-pink-300/20 blur-3xl rounded-full'></div>
                      </div>
                        <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-6">
                          <a href="https://github.com/ericaa-aaa" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300"><FaGithub/></a>
                          <a href="https://www.facebook.com/jane.javillo226" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300"><FaFacebook/></a>
                          <a href="https://www.instagram.com/janejavs_/" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300"><FaInstagram/></a>
                          <a href="https://x.com/janejavs_" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300"><FaTwitter/></a>
                          <a href="https://ph.pinterest.com/janejavillo_/" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300"><FaPinterest/></a>
                        </div>  
                </div>
          </section>
       <section id="about" className="min-h-screen flex items-center py-20 bg-linear-to-br from-pink-100 via-rose-200 to-pink-300 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="grid grid-cols-2 gap-6">
                    <img src={about1} alt="About1" className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"/>
                    <img src={about2} alt="About2" className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"/>
                </div>
            
                    <div className=''>
                      <h3 className="text-4xl font-bold mb-6 text-pink-700 ">About Me 🌷</h3>
                        <p className="text-lg text-pink-800 leading-relaxed mb-6">I am currently taking 
                          <span className="font-semibold">Bachelor of Science in Information Technology</span>, major in 
                          <span className="font-semibold">Network Technology</span>.
                        </p>
                              <p className="text-lg text-pink-800 leading-relaxed mb-6">
                              I am passionate about cybersecurity, and cloud security.
                              As well as to UI/UX design. I continuously enhance my skills 
                              through hands-on labs, certifications, and technical courses.</p>
                                <div className="mt-8">
                                  <h4 className="text-2xl font-semibold mb-4 text-pink-700">Certifications 🎓</h4>
                                  <ul className="space-y-4 text-pink-800">
                                    <li> <span className="font-semibold">Cisco Networking Academy</span>
                                      <p className="text-sm">
                                      • Introduction to Cybersecurity  
                                      • Network Defense (April–May 2025)
                                      </p>
                                    </li>
                                    <li> <span className="font-semibold">AWS Academy</span>
                                      <p className="text-sm">
                                       • Cloud Security Foundations (December 2025)
                                      </p>
                                    </li>
                                     <li> <span className="font-semibold">Qualys</span>
                                      <p className="text-sm">
                                        • Vulnerability Management Foundation (March 2025)
                                       </p>
                                    </li>
                                  </ul>
                                  <a href="CurriculumVitae.pdf" target='_blank' rel='nooper noreferrer' className="inline-block mt-10 px-5 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-400 hover:scale-120 transition duration-100"> View My CV ✨</a>
                                </div>
                      </div>
                     </div>
            </section> 
        <section id="skills" className="min-h-screen flex items-center py-20 bg-pink-200 px-6">
                <div className="max-w-6xl mx-auto w-full text-center">
                  <h3 className="text-4xl font-bold text-pink-700 mb-12">My Skills 💻</h3>
                <div className="grid md:grid-cols-3 gap-10 text-left">
                  <div className="bg-pink-300 p-6 rounded-2xl shadow-xl">
                    <h4 className="text-xl font-semibold text-pink-700 mb-4">Frontend Development</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="skill">React</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                      </div>
                  </div>
                    <div className="bg-pink-300 p-6 rounded-2xl shadow-xl">
                      <h4 className="text-xl font-semibold text-pink-700 mb-4">Programming & Backend</h4>
                        <div className="flex flex-wrap gap-3">
                          <span className="skill">MySQL</span>
                          <span className="skill">Firebase</span>
                        </div>
                    </div>
        
                      <div className="bg-pink-300 p-6 rounded-2xl shadow-xl">
                        <h4 className="text-xl font-semibold text-pink-700 mb-4">Security & Quality</h4>
                          <div className="flex flex-wrap gap-3">
                            <span className="skill">Quality Assurance (QA)</span>
                            <span className="skill">Network Defense</span>
                            <span className="skill">Cybersecurity Basics</span>
                          </div>
                      </div>
                </div>
              </div>
            </section>
    <section id='projects' className='min-h-screen flex flex-col justify-center items-center py-20 px-6 text-center bg-linear-to-br from-pink-100 via-rose-200 to-pink-300'>
                      <h3 className='text-3xl font-bold mb-12'>My Project's 🎀 </h3>
                      <h2 className='text-lg text-pink-800 text-center justify-around mb-8'>This is my simple flutter project using dart.</h2>
                        <div className='grid grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4'>
                          {[first,third,fourth].map((image, index) => (
                            <div key='index' className='min-w-75'>
                              <div className='rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-100'>
                                <img src={image} alt={`Project ${index + 1}`}
                                 className='w-full h-100 object-cover hover:scale-110 transition duration-500'/>
                              </div>
                            </div>))}
                        </div>
        
                          <div className='max-w-auto flex flex-row p-10 m-10'>
                            <div className='p-10 m-10 text-center'>
                              <p className="text-lg text-pink-800 leading-relaxed mb-6">This is our capstone project <br/>
                              <span className="font-semibold">Chicken Maure Robot Scraper</span>, for Guinhawa's Poultry <br/>
                              Using java and c++ for programming language and firebase for its database.</p>
                            </div>
        
                            <div className='grid grid-cols-2 gap-6'>
                              <img src={project2} alt="owowoow" className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"/>
                              <iframe width="653" height="380" src={project1} 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              title="embedded project" className='mb-10 p-10 '/>
                            </div>
                          </div>
                      </section>

            <section id='contact' className=" bg-pink-100 text-center ">
                <div className=" min-h-screen p-20 m-20 ">
                <h3 className="text-4xl font-bold text-pink-700 mt-20 mb-15">Contact Me 💌</h3>
                  <p className="text-lg text-pink-800 mb-8">Feel free to reach out for collaborations, internships, or tech opportunities.</p>
                    <a href="mailto:javilloericajande@gmail.com" className="inline-block px-8 py-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transition duration-300"> Send me an Email ✨</a>
                  <p className="mt-6 text-pink-700 text-sm">javilloericajane@gmail.com</p>
                  </div>
            </section>

                <footer className='bg-pink-200 text-center py-6'>
                  <p className='text-pink-800'> ©️ 2026 Jane Javillo 🩷 Made with react and tailwind</p>
                </footer>
    </div>
  )
}

export default App
