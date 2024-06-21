import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopTitlePage from "../../components/ui/TopTitlePage";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <TopTitlePage title={"Blog"} currentPage={"blog"} />
      <div className="py-12 px-10">
        <h2 className="text-3xl font-bold text-center">Blog Comming Soon</h2>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
