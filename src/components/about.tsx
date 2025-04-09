import aboutImage from "../assets/about.svg"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src={aboutImage}
              alt="About Our Agency"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
            <p className="text-gray-700 mb-6">
              Didirikan pada tahun 2018, kami adalah digital agency yang
              berfokus pada inovasi dan hasil nyata. Kami percaya bahwa setiap
              bisnis memiliki potensi untuk tumbuh di era digital dengan
              strategi yang tepat.
            </p>
            <p className="text-gray-700 mb-6">
              Tim kami terdiri dari para profesional berpengalaman di bidang
              desain, pengembangan, dan pemasaran digital yang siap membantu
              bisnis Anda mencapai tujuan digitalnya.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Visi</h3>
                <p className="text-gray-700">
                  Menjadi partner digital terpercaya bagi setiap bisnis di
                  Indonesia.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">Misi</h3>
                <p className="text-gray-700">
                  Memberikan solusi digital terbaik dengan inovasi dan
                  integritas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
