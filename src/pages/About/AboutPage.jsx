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
              Our mission as Internet Service Experts is to deliver fast, reliable, and secure internet solutions tailored to meet the unique needs of our clients. We strive to provide exceptional service through a combination of cutting-edge technology, professional expertise, and dedicated customer support. Our goal is to ensure seamless connectivity for businesses and individuals alike, enabling them to stay connected to what matters most. We are committed to staying at the forefront of the ever-evolving digital landscape by continuously upgrading our skills and infrastructure. Whether its setting up complex networks, optimizing internet speeds, or troubleshooting connectivity issues, we approach each challenge with a solution-oriented mindset. Our team of experts works tirelessly to exceed customer expectations, offering personalized service that guarantees satisfaction. With us, you can trust that your internet service needs are in capable hands.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              <p>
              Our vision is to revolutionize internet services by setting new standards for connectivity, reliability, and customer satisfaction. We aim to be the leading provider of internet solutions, empowering businesses and individuals to reach their full potential in a digitally connected world. We envision a future where high-speed internet is accessible to all, fostering innovation, collaboration, and growth. We are dedicated to leveraging the latest technologies and best practices to create a seamless online experience. By investing in advanced infrastructure and prioritizing customer needs, we aspire to offer internet services that are not just fast and reliable but also secure and user-friendly. Our focus is on building long-term relationships with our clients, becoming a trusted partner in their digital journey.
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
                Enjoy hassle-free internet service with complimentary installation and setup, ensuring you are quickly connected and ready to go.
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
                Experience ultra-fast internet with download speeds up to 1 Gbps for seamless streaming, gaming, and browsing.
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
                Get round-the-clock assistance from our dedicated support team, ensuring help is always available when you need it.
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
