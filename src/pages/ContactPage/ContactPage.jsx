import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopTitlePage from "../../components/ui/TopTitlePage";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <TopTitlePage title={"Contact"} currentPage={"contact us"} />
      <div className="py-12 px-10">
        <h2>Contact Page</h2>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
