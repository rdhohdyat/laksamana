import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Service from "./components/service";
import Profile from "./components/Profile";
import Team from "./components/team";
import Testimoni from "./components/testimoni";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Service />
      <About />
      <Profile />
      <Team />
      <Testimoni />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
