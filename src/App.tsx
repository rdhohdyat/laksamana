import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Service from "./components/service";
import Team from "./components/team";
import Testimoni from "./components/testimoni";
import Contact from "./components/contact";

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

      <div>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
    </>
  );
}

export default App;
