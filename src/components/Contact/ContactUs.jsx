const ContactUs = () => {
  return (
    <div className="contact-section px-12 py-10">
      <div className="header-title text-center font-bold">
        <h2 className="text-3xl mb-4">Contact Us</h2>
      </div>
      {/* <div className="border-2 border-green-400 p-8 text-center">
        <h4>Map Section</h4>
      </div> */}
      {/* ---------------- */}
      <div className="contact-form flex flex-wrap">
        {/* Left Side */}
        <div className="w-full md:w-1/3 p-4 bg-gray-100 rounded-lg">
          <div className="contact-content">
            <h2 className="text-2xl font-bold mb-4">Contact </h2>
            <p className="mb-2">
              <span className="font-bold">Address:</span> Uday Cottage 4th floor
              , Shadinata Sarani , Uttar Badda, Dhaka
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Phone: </span> 01729-201335
            </p>
            <p className="mb-2">
              {" "}
              <span className="font-bold">Email: </span> contact@example.com
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-2/3 p-4">
          <div className="contact-form bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-b-gray-200">
              Get In Touch
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
  );
};

export default ContactUs;
