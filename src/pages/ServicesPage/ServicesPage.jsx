import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopTitlePage from "../../components/ui/TopTitlePage";
import icon1 from "../../assets/cloud.png";
import icon2 from "../../assets/networking.png";
import icon3 from "../../assets/cyber-security.png";
import icon4 from "../../assets/shield.png";
// import bg from '../../assets/feature-map.png'
import { SiServerfault } from "react-icons/si";
import { GiUpgrade } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FiVideoOff } from "react-icons/fi";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Accordion from "../../components/ui/Accordion";
import img from "../../assets/DataCenter_netexpert.jpg";

const services = [
  {
    id: 1,
    title: "IT Infrastructure Consultancy",
    icon: `${icon1}`,
    desc: "",
  },
  {
    id: 2,
    title: "Private cloud consultancy",
    icon: `${icon2}`,
    desc: "",
  },
  {
    id: 3,
    title: "Network Infrastructure Solution",
    icon: `${icon3}`,
    desc: "",
  },
  {
    id: 4,
    title: "Structured Cabling",
    icon: `${icon4}`,
    desc: "",
  },
  {
    id: 5,
    title: "Secured WIFI Solution",
    icon: `${icon4}`,
    desc: "",
  },
  {
    id: 6,
    title: "CCTV Solution",
    icon: `${icon4}`,
    desc: "",
  },
  {
    id: 7,
    title: "AI Camera Solution",
    icon: `${icon4}`,
    desc: "",
  },
  {
    id: 8,
    title: "Remote management service",
    icon: `${icon4}`,
    desc: "",
  },
  {
    id: 9,
    title: "Operating System Management",
    icon: `${icon4}`,
    desc: "",
  },
  {
    id: 10,
    title: "Mikrotik, Cisco & Linux Training",
    icon: `${icon4}`,
    desc: "",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <TopTitlePage title={"Services"} currentPage={"service"} />
      <div className="py-12 px-10 bg-gray-200">
        <div className="all-services py-5 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 ">
          {services.map((service) => {
            const { title, id, icon } = service;
            return (
              <div
                key={id}
                className="single-service bg-white p-4 rounded-md text-center  cursor-pointer"
              >
                <img
                  className="mx-auto"
                  src={icon}
                  width="40px"
                  height="40px"
                  alt=""
                />
                <h3 className="text-xl py-2 font-bold">{title} </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum, harum.
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* why choose us */}
      <div className="why-choose-us py-16 px-10">
        <h2 className="font-bold text-center text-2xl mb-8">Why Choose Us</h2>
        <div className="why-choose-items grid lg:grid-cols-3 md:grid-cols-1 gap-8 items-center justify-between">
          {/* single item */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <span>
                {" "}
                <SiServerfault className="text-5xl text-[#605CB8]" />{" "}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-md border-b-2 border-[#605CB8] mb-4 py-2">
                Own FTP Server
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                consectetur.
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span>
                {" "}
                <GiUpgrade className="text-5xl text-[#605CB8]" />{" "}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-md border-b-2 border-[#605CB8] mb-2 py-2">
                Upgrade or Downgrade
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                consectetur.
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span>
                {" "}
                <FaServer className="text-5xl text-[#605CB8]" />{" "}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-md border-b-2 border-[#605CB8] mb-2 py-2">
                No Hard Data Limit
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                consectetur.
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span>
                {" "}
                <FaArrowRightFromBracket className="text-5xl text-[#605CB8]" />{" "}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-md border-b-2 border-[#605CB8] mb-2 py-2">
                Access to All Website
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                consectetur.
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span>
                {" "}
                <MdLockOutline className="text-5xl text-[#605CB8]" />{" "}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-md border-b-2 border-[#605CB8] mb-2 py-2">
                Lock in Low Rates
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                consectetur.
              </p>
            </div>
          </div>
          {/* single item */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <span>
                {" "}
                <FiVideoOff className="text-5xl text-[#605CB8]" />{" "}
              </span>
            </div>
            <div>
              <h4 className="font-bold text-md border-b-2 border-[#605CB8] mb-2 py-2">
                No Video Streaming
              </h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Accordion */}
      <div className="faq-section px-12 py-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 items-center justify-between">
          <div>
            <h4 className="font-bold mb-8">Frequently Asked Questions</h4>
            <Accordion title="What types of internet service do you offer?">
              <p>
                We offer a range of internet services including DSL,
                fiber-optic, and cable internet.
              </p>
            </Accordion>
            <Accordion title="What internet speeds are available in my area?">
              <p>
                Internet speeds vary by location. Please enter your address on
                our website to see available plans and speeds in your area.
              </p>
            </Accordion>
            <Accordion title="How can I check if your service is available at my address?">
              <p>
                You can check service availability by entering your address on
                our website or contacting our customer service team.
              </p>
            </Accordion>
            <Accordion title="What equipment do I need to get started with your internet service?">
              <p>
                Typically, you will need a modem and a router compatible with
                our service. We can provide these devices for a fee or you may
                choose to use your own compatible equipment.
              </p>
            </Accordion>
            <Accordion title="Do you offer bundles with TV and phone services?">
              <p>
                Yes, we offer bundled packages that include internet, TV, and
                phone services. Visit our website or contact us for more
                details.
              </p>
            </Accordion>
          </div>
          <div>
            <img className="rounded-lg" src={img} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
