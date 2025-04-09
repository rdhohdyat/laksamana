import { Megaphone, ShoppingCart, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Service = () => {
  const services = [
    {
      icon: <Megaphone size={32} />,
      title: "Promosi Produk",
      description:
        "Kami membantu mempromosikan produk Anda melalui strategi konten, sosial media, dan channel afiliasi yang telah terbukti meningkatkan penjualan.",
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Listing Produk",
      description:
        "Produk Anda akan kami tampilkan di marketplace untuk menjangkau lebih banyak calon pembeli.",
    },
    {
      icon: <Zap size={32} />,
      title: "Iklan Digital",
      description:
        "Kami mengelola kampanye iklan untuk menjangkau audiens yang tepat.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan layanan promosi digital untuk membantu produk Anda dikenal luas, menarik pelanggan potensial, dan meningkatkan penjualan melalui strategi afiliasi yang efektif.
          </p>
        </motion.div>

        {/* Kartu Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
