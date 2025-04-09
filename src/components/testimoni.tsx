import { motion } from "framer-motion";


const Testimoni = () => {
  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            Apa Kata Klien Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami membangun hubungan jangka panjang dan memberikan hasil nyata yang dirasakan langsung oleh klien kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Darmawan Putra",
              position: "Jual Baju",
              testimony:
                "Tim ini luar biasa dalam memahami kebutuhan kami dan memberikan solusi yang tepat.",
            },
            {
              name: "Lina Kusuma",
              position: "Jual Celana",
              testimony:
                "Penjualan kami meningkat pesat berkat strategi digital yang mereka rancang.",
            },
            {
              name: "Hendra Wijaya",
              position: "Jual Sepatu",
              testimony:
                "Kampanye digital mereka sangat efektif. Penjualan kami naik 200% dalam 3 bulan.",
            },
          ].map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`https://i.pravatar.cc/80?img=${index + 1}`}
                  alt={client.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{client.name}</h4>
                  <p className="text-gray-500 text-sm">{client.position}</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">“{client.testimony}”</p>
              <div className="flex text-yellow-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;

