import AboutUs from "../../components/AboutUs/AboutUs";
// import Banner from "../../components/Banner";
import ContactUs from "../../components/Contact/ContactUs";
import Services from "../../components/Services/Services";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Banner /> */}
      <Slider />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
