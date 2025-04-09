import {
  Code,
  Layout,
  Zap,
} from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Web Development",
      description:
        "Kami membangun website profesional yang responsif dan user-friendly untuk mengoptimalkan kehadiran online bisnis Anda.",
    },
    {
      icon: <Code size={32} />,
      title: "Mobile Apps",
      description:
        "Kembangkan aplikasi mobile yang inovatif untuk Android dan iOS yang meningkatkan engagement dengan pelanggan Anda.",
    },
    {
      icon: <Zap size={32} />,
      title: "Digital Marketing",
      description:
        "Strategi pemasaran digital yang komprehensif untuk meningkatkan brand awareness dan mendorong pertumbuhan bisnis Anda.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda
            berkembang di era digital dengan strategi yang terukur dan efektif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
