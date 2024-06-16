import "./Services.css";
import icon1 from "../../assets/cloud.png";
import icon2 from "../../assets/networking.png";
import icon3 from "../../assets/cyber-security.png";
import icon4 from "../../assets/shield.png";
// import bg from '../../assets/feature-map.png'

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

const Services = () => {
  return (
    <div id="services-section">
      <div className="bg-service-area"></div>
      <div className="service-top text-center text-black py-4">
        <h2 className="text-3xl font-bold mb-2">Services</h2>
        <p>Best service quality in the world</p>
      </div>
      <div className="all-services py-5 grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => {
          const { title, id, icon } = service;
          return (
            <>
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
                <h3 className="text-2xl py-2 font-bold">{title} </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum, harum.
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
