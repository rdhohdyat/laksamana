import { motion } from "framer-motion";
import homeImage from "../assets/hero.svg";

const Home = () => {
  return (
    <section
      id="home"
      className="bg-white bg-gradient-to-br from-blue-100 via-200 to-white text-gray-800 pt-12 lg:pt-24 lg:pb-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <motion.div
            className="lg:w-1/2 order-2 md:order-none"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight text-gray-900">
              Solusi Digital Terbaik
              <br />
              Untuk Bisnis Anda
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              Tingkatkan bisnis Anda bersama kami melalui strategi digital,
              teknologi terkini, dan kreativitas luar biasa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Lihat Selengkapnya
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative group md:w-[750px] w-full order-1 md:order-none"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img
                src={homeImage}
                alt="Digital Agency Services"
                className="w-full rounded-xl transition duration-300"
              />
            </div>

            <div className="absolute inset-0 z-0 rounded-xl  opacity-100 transition duration-500 blur-2xl scale-105 bg-blue-200/60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
