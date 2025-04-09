import { useState } from "react";

const Profile = () => {
  const [isHovered, setIsHovered] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      client: "PT Maju Bersama",
      image: "/api/placeholder/500/300",
      category: "Web Development",
    },
    {
      title: "Mobile Banking App",
      client: "Bank Sukses",
      image: "/api/placeholder/500/300",
      category: "Mobile App",
    },
    {
      title: "Digital Campaign",
      client: "Fashion Trends",
      image: "/api/placeholder/500/300",
      category: "Digital Marketing",
    },
  ];

  return (
    <section id="profile" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Portfolio Terbaik Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lihat bagaimana kami telah membantu berbagai bisnis mengoptimalkan
            kehadiran digital mereka melalui proyek-proyek inovatif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(0)}
            >
              <img
                src="https://cdn1-production-images-kly.akamaized.net/MusDQsgxvqdFAS6urPRXXwh8o00=/935x0:4766x3831/1200x900/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4425648/original/092531400_1683895574-DSC02617.JPG"
                alt={project.title}
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 ${
                  isHovered === index ? "opacity-100" : "opacity-90"
                }`}
              >
                <span className="text-blue-300 text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold mt-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-1">Client: {project.client}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
            Lihat Semua Proyek
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
