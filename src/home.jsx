import bg from './../src/assets/images/bg.jpg';
import jane from './../src/assets/images/janee.png';
import { FaGithub, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

export default function Home () {
    return (
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
    )
}