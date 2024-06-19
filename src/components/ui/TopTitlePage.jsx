/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./../../styles/TopTitlePage.css";
import { FaHome } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const TopTitlePage = ({ title, currentPage }) => {
  return (
    <div id="top-title">
      <div className="">
        <h2 className="about-title mb-4">{title}</h2>
      </div>
      <div className="breadcrubm-menu">
        <ul className="flex gap-4">
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaHome className="inline items-center" />
              </span>{" "}
              Home
            </Link>
          </li>
          <li className="text-blue-400">
            {" "}
            <span>
              {" "}
              <GoDotFill className="inline" />{" "}
            </span>{" "}
            {currentPage}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopTitlePage;
