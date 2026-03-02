import { useState } from 'react';
import './index.css';
import bg from './../src/assets/images/bg.jpg';
import first from './../src/assets/images/1.png';
import second from './../src/assets/images/2.png';
import third from './../src/assets/images/3.png';
import fourth from './../src/assets/images/4.png';
import fifth from './../src/assets/images/5.png';
import jane from './../src/assets/images/janee.png';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen]= useState(false);
  
  return (
    <div className='bg-pink-50 text-pink-900 scroll-smooth'>
      <nav className='fixed w-full bg-pink-200/70 backdrop-blur-md shadow-md z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold tracking-wide '>Erica's Portfolio 🎀</h1>
        <div className='hidden md:flex gap-8 font-medium'>
          <a href="#home" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>Home</a>
          <a href="#about" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>About</a>
          <a href="#projects" className='mt-5 px-6 py-3 hover:text-pink-600 bg-pink-300 hover:bg-pink-400 rounded-full shadow-lg hover:scale-105 transition'>Project</a>
        </div>
        <button className='md:hidden text-2xl' onClick={() => setMenuOpen (!menuOpen)}> 🎀 </button>
            {menuOpen && (
              <div className='md:hidden flex flex-col items-center pb-4 gap-3 font-medium'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Project</a>
              </div>
            )}
      </div>
      </nav>
      <section id='home' className='min-h-screen flex items-center px-6 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bg})`}}>
        <div className='max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify justify-between gap-12'>
            <div className='text-center md:text-left max-w-xl'>
                  <h2 className='text-5xl md:text-7xl font-bold text-pink-700 leading-tight'>Hi! I'm Jane 🩷 </h2>
                  <p className='mt-6 text-lg text-pink-700 text-center'> A passionate frontend developer who loves creating interactive web experiences</p>
            </div>
            <div className='relative'>
                  <img src= {jane} alt='eme' className='w-lg md:w[450px] drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]'/>
                  {/* <div className='absolute inset-0 bg-pink-300/20 blur-3xl rounded-full'></div>  */}
            </div>
            <div className="flex flex-col self-end gap-6 mt-8">
                  <a href="https://github.com/ericaa-aaa" target='_blank' rel='noopener noreferrer' className='text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300'><FaGithub/></a>
                  <a href="https://www.facebook.com/jane.javillo226" target='_blank' rel='noopener noreferrer' className='text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300'><FaFacebook/></a>
                  <a href="https://www.instagram.com/janejavs_/" target='_blank' rel='noopener noreferrer' className='text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300'><FaInstagram/></a>
                  <a href="https://x.com/janejavs_" target='_blank' rel='noopener noreferrer' className='text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300'><FaTwitter/></a>
                  <a href="https://ph.pinterest.com/janejavillo_/" target='_blank' rel='noopener noreferrer' className='text-3xl text-pink-500 hover:text-white hover:bg-pink-500 p-3 rounded-full shadow-lg hover:scale-125 transition duration-300'><FaPinterest/></a>
            </div>   
        </div>
      </section>
      
      <section id='about' className='min-h-screen flex flex-col justify-center items-center  py-20 bg-pink-100 px-6 text-center'>
        <h3 className='text-3xl font-bold mb-6'>About me 🌷</h3>
        <p className='max-w-3xl mx-auto text-pink-800 leading-relaxed'>
         <span> I am a creative developer who enjoys blending design and functionality.</span><br/>
          <span>My goal is to build clean, responsive and beautiful websites.</span>
        </p>
      </section>

      <section id='projects' className='min-h-screen flex flex-col justify-center items-center py-20 px-6 text-center bg-linear-to-br from-pink-100 via-rose-200 to-pink-300'>
        <h3 className='text-3xl font-bold mb-12'>My Project 🎀 </h3>
        <div className='grid grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4'>
          {[first,second,third,fourth,fifth].map((image, index) => (
            <div key='index' className='min-w-75'>
              <div className='rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-100'>
                <img src={image} alt={`Project ${index + 1}`}
                className='w-full h-100 object-cover hover:scale-110 transition duration-500'/>
              </div>
            </div>
          )
          )}

        </div>
      </section>

      <footer className='bg-pink-200 text-center py-6'>
        <p className='text-pink-800'> ©️ 2026 Jane Javillo 🩷 Made with react and tailwind</p>
      </footer>
    </div>
  )
}

export default App
