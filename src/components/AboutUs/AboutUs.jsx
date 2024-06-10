import "./AboutUs.css";
import about from "../../assets/about.webp";

const AboutUs = () => {
  return (
    <div id="about-section">
      <h2 className="text-center font-bold text-4xl mb-8">About Us</h2>
      <div className="about-desc grid grid-cols-2 gap-4 items-center justify-between">
        <div>
          <h3 className="font-bold text-2xl mb-3">About Us Our Main Purpose</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            asperiores dolor repellat, magni assumenda libero, natus vero maxime
            voluptates non cupiditate quas earum nostrum consequatur cumque in
            eum ratione fugit ex nam. Amet aliquam quis dolor distinctio sunt,
            vero a.
          </p>
        </div>
        <div>
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
