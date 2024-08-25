import "./Services.css";
import icon1 from "../../assets/cloud.png";
import icon2 from "../../assets/networking.png";
import icon3 from "../../assets/cyber-security.png";
import icon4 from "../../assets/shield.png";
// import bg from '../../assets/feature-map.png'

const services = [
  {
    id: 1,
    title: "IT Infrastructure Consultancy 2",
    icon: `${icon1}`,
    desc: "Unlock the full potential of your IT systems with our expert consultancy services. We specialize in designing, implementing, and optimizing IT infrastructure tailored to your business needs.",
  },
  {
    id: 2,
    title: "Private cloud consultancy",
    icon: `${icon2}`,
    desc: "Expert private cloud consultancy to design, deploy, and optimize secure, scalable cloud solutions tailored to your business needs.",
  },
  {
    id: 3,
    title: "Network Infrastructure Solution",
    icon: `${icon3}`,
    desc: "Comprehensive network infrastructure solutions for robust, secure, and scalable connectivity. Expert design, implementation, and optimization for your business needs.",
  },
  {
    id: 4,
    title: "Structured Cabling",
    icon: `${icon4}`,
    desc: "Professional structured cabling services for efficient, organized, and scalable network infrastructure. Expert installation and management tailored to your business.",
  },
  {
    id: 5,
    title: "Secured WIFI Solution",
    icon: `${icon4}`,
    desc: "Robust secured WiFi solutions providing reliable, encrypted connectivity. Expert design and implementation to ensure safe, high-performance wireless networks.",
  },
  {
    id: 6,
    title: "CCTV Solution",
    icon: `${icon4}`,
    desc: "Comprehensive CCTV solutions offering advanced surveillance for enhanced security. Expert installation and integration for clear, reliable monitoring of your premises.",
  },
  {
    id: 7,
    title: "AI Camera Solution",
    icon: `${icon4}`,
    desc: "Cutting-edge AI camera solutions for intelligent surveillance. Advanced analytics and real-time monitoring to enhance security and operational efficiency.",
  },
  {
    id: 8,
    title: "Remote management service",
    icon: `${icon4}`,
    desc: "Efficient remote management services for IT systems, offering proactive support, monitoring, and maintenance to ensure optimal performance and security.",
  },
  {
    id: 9,
    title: "Operating System Management",
    icon: `${icon4}`,
    desc: "Expert operating system management for seamless updates, security, and performance. Proactive support to ensure stability and efficiency for your systems.",
  },
  {
    id: 10,
    title: "Mikrotik, Cisco & Linux Training",
    icon: `${icon4}`,
    desc: "Learn comprehensive networking skills with expert-led training on Mikrotik, Cisco, and Linux. Enhance your IT knowledge and career prospects.",
  },
];

const Services = () => {
  return (
    <div id="services-section">
      <div className="bg-service-area"></div>
      <div className="service-top text-center text-black py-4">
        <h2 className="text-3xl font-bold mb-2">Services</h2>
      </div>
      <div className="all-services py-5 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => {
          const { title, id, icon,desc } = service;
          return (
            <div
              key={id}
              className="single-service bg-white p-4 rounded-md text-center  cursor-pointer"
            >
              <div className="icon-img">
                <img
                  className="mx-auto"
                  src={icon}
                  width="40px"
                  height="40px"
                  alt=""
                />
              </div>
              <h3 className="text-xl py-2 font-bold">{title} </h3>
              <p>
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
