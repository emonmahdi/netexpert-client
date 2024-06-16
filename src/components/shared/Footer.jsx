import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer-section">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-1 px-12">
          <div>
            <h2 className="mb-4 text-lg font-bold">Net Expert</h2>
            <p>
              Net Expert BD was established in 2021 as an IT infrastructure &
              Solutions company with a team of dedicated and experienced
              professional
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Support </h2>
            <ul>
              <li>Knowledgebase</li>
              <li>About Us</li>
              <li>Faqs</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Top Service</h2>
            <ul>
              <li>IT Consultancy</li>
              <li>Remote Support</li>
              <li>VPN Solution</li>
              <li> Training</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-lg font-bold">Contact</h2>
            <h3>Md. Kawsar Hamd (01729-201335)</h3>
            <p>
              Office address: Uday Cottage 4th floor , Shadinata Sarani , Uttar
              Badda
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-3 text-white">
        <p>Copyright &copy; All Right Reserved by NetExpert</p>
      </div>
    </>
  );
};

export default Footer;
