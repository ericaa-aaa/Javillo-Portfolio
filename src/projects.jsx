import first from './../src/assets/images/1.png';
/* import second from './../src/assets/images/2.png';*/
import third from './../src/assets/images/3.png';
import fourth from './../src/assets/images/4.png';
/* import fifth from './../src/assets/images/5.png'; */
import project1 from './../src/assets/images/project_capstone.mp4';
import project2 from './../src/assets/images/project_bot.jpeg';

export default function Projects () {
    return (
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
    )
}