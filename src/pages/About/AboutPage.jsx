import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopTitlePage from "../../components/ui/TopTitlePage";
import about from "../../assets/number-one.png";
import { MdResetTv } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { MdOutlineWatchLater } from "react-icons/md";

import "../../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <TopTitlePage title={"About US"} currentPage={"about-us"} />
      <div className="py-16 px-10">
        <div className="about-all-content">
          <div className="about-desc grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-center justify-between">
            <div>
              <h3 className="font-bold text-2xl mb-6">
                We are no. 1 internet provider company in Bangladesh.
              </h3>
              <p>
                Net Expert BD was established in 2021 as an IT infrastructure &
                Solutions company with a team of dedicated and experienced
                professional, we cater to a broad spectrum of technical
                disciplines and services. We have been maintaining a long &
                fruitful association with our customers to lead & guide them to
                develop their business & activities using their IT
                infrastructure with cost effective solutions. We take utmost
                care to meet the customer`s requirements
              </p>
              <button
                className="mt-5 bg-[#60c2a4] hover:bg-[#020a0e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                View Details
              </button>
            </div>
            <div className="text-center">
              <img className="mx-auto" src={about} alt="" />
            </div>
          </div>
          {/* mission vision */}
          <div className="mission-vision grid lg:grid-cols-2 md:grid-cols-1 gap-8 items-center justify-between my-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum dolore soluta earum eius odio molestias assumenda
                ipsam facere perferendis incidunt, eligendi culpa dolorem
                maiores velit quis ipsa aspernatur. Sit porro eveniet illo illum
                saepe commodi excepturi cum numquam architecto est.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum dolore soluta earum eius odio molestias assumenda
                ipsam facere perferendis incidunt, eligendi culpa dolorem
                maiores velit quis ipsa aspernatur. Sit porro eveniet illo illum
                saepe commodi excepturi cum numquam architecto est.
              </p>
            </div>
          </div>
          {/* we are provide */}
          <div className="we-provide pt-8">
            <h3 className="font-bold text-2xl mb-6 text-center">
              We Are Provide
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center justify-between my-12">
              {/* single item */}
              <div className="text-center">
                <span>
                  <MdResetTv className="w-full text-center text-4xl text-[#60C2A4]" />
                </span>
                <h4 className="font-bold my-4">Free Installations & Setup</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum.
                </p>
              </div>
              {/* single item */}
              <div className="text-center">
                <span>
                  {" "}
                  <LuDownload className="w-full text-center text-4xl text-[#60C2A4]" />{" "}
                </span>
                <h4 className="font-bold my-4">Up to 1 Gpbs Download Speed</h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum.
                </p>
              </div>
              {/* single item */}
              <div className="text-center">
                <span>
                  {" "}
                  <MdOutlineWatchLater className="w-full text-center text-4xl text-[#60C2A4]" />{" "}
                </span>
                <h4 className="font-bold my-4">24/7 Customer Support </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
