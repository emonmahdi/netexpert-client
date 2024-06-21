/* eslint-disable react/prop-types */
// Accordion.js

import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer select-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-semibold text-[#60C2A4]">{title}</span>
        <svg
          className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-4 py-3 border-t border-gray-300">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
