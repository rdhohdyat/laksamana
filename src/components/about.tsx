import { motion } from "framer-motion";
import aboutImage from "../assets/about.svg";

const About = () => {
  return (
    <section id="about" className="xl:py-20  py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="order-2 xl:order-none relative group w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <img src={aboutImage} alt="Tentang Kami" />
            </div>
            <div className="absolute inset-0 z-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-3xl bg-blue-200/60"></div>
          </motion.div>

          <motion.div
            className="md:w-1/2 md:pl-12 order-1 xl:order-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
            <p className="text-gray-700 mb-6">
              Kami adalah tim yang berfokus pada jasa promosi digital berbasis
              afiliasi untuk membantu pemilik produk meningkatkan penjualan
              secara efisien dan terukur. Dengan pengalaman di berbagai platform
              digital, kami siap menjadi mitra promosi terbaik untuk bisnis
              Anda.
            </p>
            <p className="text-gray-700 mb-6">
              Kami percaya bahwa strategi pemasaran yang tepat sasaran dan
              kolaborasi yang transparan adalah kunci sukses dalam dunia digital
              saat ini. Anda cukup fokus pada kualitas produk — biarkan kami
              yang bantu promosikan.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">Visi</h3>
                <p className="text-gray-700">
                  Menjadi mitra promosi terpercaya bagi brand dan UMKM di
                  seluruh Indonesia.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">Misi</h3>
                <p className="text-gray-700">
                  Membantu produk Anda dikenal luas dengan strategi afiliasi
                  yang efektif, hemat biaya, dan hasil nyata.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
