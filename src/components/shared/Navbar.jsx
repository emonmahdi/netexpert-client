import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/net-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "/" },
    { id: 2, text: "About", link: "/about" },
    { id: 3, text: "Services", link: "/services" },
    { id: 4, text: "Blogs", link: "/blog" },
    { id: 5, text: "Contact", link: "/contact" },
  ];

  return (
    <div className="bg-[#fff] flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white border-b-2 border-blue-400 flex-no-wrap w-full overflow-hidden z-10">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">
        <a href="">
          <img src={logo} width="180" height="auto" alt="" />
        </a>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#2099c9] rounded-xl m-2 cursor-pointer duration-300  text-black hover:text-white"
          >
            <Link to={`${item.link}`}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose style={{ color: "#000" }} size={20} />
        ) : (
          <AiOutlineMenu style={{ color: "#000" }} size={20} />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          <a href="">
            <img src={logo} width="150" height="auto" alt="" />
          </a>
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#2099c9] duration-300 hover:text-white cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
