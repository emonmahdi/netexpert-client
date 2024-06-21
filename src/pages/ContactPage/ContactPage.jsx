import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import TopTitlePage from "../../components/ui/TopTitlePage";
import { GoHomeFill } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <TopTitlePage title={"Contact"} currentPage={"contact us"} />
      <div className="py-12 px-10">
        <div className="contact-title text-center">
          <h2 className="text-lg mb-4 font-bold">Contact</h2>
          <h3>Let Us Show You What SSMBD Can Do For Your Business.</h3>
        </div>
        <div className="contact-section px-12 py-10">
          {/* <div className="border-2 border-green-400 p-8 text-center">
        <h4>Map Section</h4>
      </div> */}
          {/* ---------------- */}
          <div className="contact-form flex flex-wrap">
            {/* Left Side */}
            <div className="w-full md:w-1/3 p-4 rounded-lg">
              <div className="contact-content">
                <h2 className="text-2xl font-bold mb-4">Contact </h2>
                {/* single item contact */}
                <div className="shadow rounded-lg p-8 mb-8 border border-[#605CB8]">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="bg-[#605CB8] p-4 rounded-lg">
                        {" "}
                        <FaPhone className="text-white" />{" "}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Phone:</h4>
                      <span>01729-201335 </span>
                    </div>
                  </div>
                </div>
                {/* single item contact */}
                <div className="shadow rounded-lg p-8 mb-8 border border-[#605CB8]">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="bg-[#605CB8] p-4 rounded-lg">
                        {" "}
                        <MdEmail className="text-white" />{" "}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Email:</h4>
                      <span>info@netexpert.com.bd</span>
                    </div>
                  </div>
                </div>
                {/* single item contact */}
                <div className="shadow rounded-lg p-8 mb-8 border border-[#605CB8]">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="bg-[#605CB8] p-4 rounded-lg">
                        {" "}
                        <GoHomeFill className="text-white" />{" "}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold">Address:</h4>
                      <span>
                        Uday Cottage 4th floor , Shadinata Sarani , Uttar Badda,
                        Dhaka
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-2/3 p-4">
              <div className="contact-form bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-[#60C2A4] text-2xl font-bold mb-4 border-b-2 border-b-gray-200">
                  Get In Touch
                </h2>
                <form>
                  <div className="mb-4 flex items-center gap-4 justify-between">
                    {/* single row */}
                    <div className="w-[50%]">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2 "
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="appearance-none rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 border-0"
                        id="name"
                        type="text"
                        placeholder="Your first name"
                      />
                    </div>
                    {/* single row */}
                    <div className="w-[50%]">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 border-0"
                        id="name"
                        type="text"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div className="mb-4 flex items-center gap-4 justify-between">
                    {/* single row */}
                    <div className="w-[50%]">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 border-0"
                        id="email"
                        type="email"
                        placeholder="Your email"
                      />
                    </div>
                    {/* single row */}
                    <div className="w-[50%]">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        className="appearance-none rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 border-0"
                        id="name"
                        type="text"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none rounded w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100 border-0"
                      id="message"
                      rows="5"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <button
                      className="bg-[#60c2a4] hover:bg-[#020a0e] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4341.8366274355185!2d90.43149678858616!3d23.78177310386854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c711d96d5a2b%3A0xed656fdc371fbf9f!2sNet%20Expert%20BD!5e0!3m2!1sen!2sbd!4v1718949958491!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
