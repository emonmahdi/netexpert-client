/* eslint-disable react/prop-types */

const buttonStyle = {
  border: "none",
  backgroundColor: "#2099c9",
  padding: "10px 30px",
  borderRadius: "10px",
  cursor: "pointer", // Optional: Adds a pointer cursor on hover
  ":hover": {
    backgroundColor: "#020a0e", // Change this to your desired hover color
  },
};

const Button = ({ children }) => {
  return <button style={buttonStyle}>{children}</button>;
};

export default Button;
