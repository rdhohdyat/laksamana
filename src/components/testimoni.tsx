const Testimoni = () => {
    return (
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Apa Kata Klien Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami bangga dengan hubungan jangka panjang yang kami bangun dengan
              klien kami dan hasil yang telah kami capai bersama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/80/80"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Darmawan Putra</h4>
                  <p className="text-gray-600 text-sm">CEO, PT Maju Bersama</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Tim ini luar biasa dalam memahami kebutuhan kami dan memberikan
                solusi yang tepat. Website baru kami telah meningkatkan konversi
                sebesar 40%."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/80/80"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Lina Kusuma</h4>
                  <p className="text-gray-600 text-sm">
                    Marketing Director, Bank Sukses
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                "Aplikasi mobile yang mereka kembangkan memiliki UI/UX yang luar
                biasa dan sangat user-friendly. Kami mendapatkan feedback
                positif dari nasabah kami."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="/api/placeholder/80/80"
                  alt="Client"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Hendra Wijaya</h4>
                  <p className="text-gray-600 text-sm">Owner, Fashion Trends</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Kampanye digital yang mereka buat sangat efektif. Traffic
                website kami meningkat 200% dan penjualan online kami tumbuh
                signifikan."
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Testimoni