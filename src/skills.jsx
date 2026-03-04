export default function Skills () {
    return (
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
    )
}