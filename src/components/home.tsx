import homeImage from '../assets/hero.svg'

const Home = () => {
    return (
        <section id="home" className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Solusi Digital Terbaik Untuk Bisnis Anda
              </h1>
              <p className="text-lg mb-8 opacity-90">
                Kami membantu bisnis Anda tumbuh melalui strategi digital yang tepat sasaran, teknologi mutakhir, dan kreativitas tanpa batas.
              </p>
              <div className="flex space-x-4">
                <button className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 hover:bg-opacity-10 transition duration-300">
                  Portfolio Kami
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src={homeImage}
                alt="Digital Agency Services" 
              />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Home;