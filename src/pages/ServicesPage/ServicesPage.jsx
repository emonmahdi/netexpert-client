import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopTitlePage from "../../components/ui/TopTitlePage";

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <TopTitlePage title={"Services"} currentPage={"service"} />
      <div className="py-12 px-10">
        <h2>Services Page</h2>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
