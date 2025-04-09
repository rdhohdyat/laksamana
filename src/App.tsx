import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Service from "./components/service";
import Team from "./components/team";
import Testimoni from "./components/testimoni";
import Contact from "./components/contact";

import waIcon from "./assets/whatsapp.png";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Team />
      <Testimoni />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/6285363262626?text=Hai%20saya%20tertarik%20dengan%20layanan%20Anda"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 w-16 h-16 flex items-center justify-center rounded-full  transition"
      >
        <img src={waIcon} alt="WhatsApp" className="w-16 h-16" />
      </a>
    </>
  );
}

export default App;
