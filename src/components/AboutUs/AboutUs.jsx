import "./AboutUs.css";
import about from "../../assets/number-one.png";

const AboutUs = () => {
  return (
    <div id="about-section">
      <h2 className="text-center font-bold text-4xl mb-8">About Us</h2>
      <div className="about-desc grid lg:grid-cols-2 md:grid-cols-1 gap-4 items-center justify-between">
        <div>
          {/* <h3 className="font-bold text-2xl mb-3">About Us </h3> */}
          <p>
            Net Expert BD was established in 2021 as an IT infrastructure &
            Solutions company with a team of dedicated and experienced
            professional, we cater to a broad spectrum of technical disciplines
            and services. We have been maintaining a long & fruitful association
            with our customers to lead & guide them to develop their business &
            activities using their IT infrastructure with cost effective
            solutions. We take utmost care to meet the customer`s requirements
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
    </div>
  );
};

export default AboutUs;
