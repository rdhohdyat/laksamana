import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
            <p className="text-gray-700 mb-6">
              Tertarik untuk bekerja sama dengan kami? Hubungi kami sekarang
              untuk konsultasi gratis tentang kebutuhan digital bisnis Anda.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-blue-600 mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-700">info@digitalagency.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-blue-600 mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-bold">Telepon</h3>
                  <p className="text-gray-700">+62 21 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="text-blue-600 mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-bold">Alamat</h3>
                  <p className="text-gray-700">
                    Jl. Digital No. 123, Jakarta Selatan, 12345
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <form className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="email@anda.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Subjek pesan"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tuliskan pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
