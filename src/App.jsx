import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner";
import Services from "./components/Services/Services";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <Services />
      <Footer />
    </>
  );
}

export default App;
