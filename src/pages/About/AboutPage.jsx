import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopTitlePage from "../../components/ui/TopTitlePage";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <TopTitlePage title={"About US"} currentPage={"about-us"} />
      <div className="py-12 px-10">
        <h2>About Page</h2>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
