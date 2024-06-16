/* eslint-disable react/prop-types */

const buttonStyle = {
  border: "none",
  backgroundColor: "#2099c9",
  padding: "10px 30px",
  borderRadius: "10px",
};

const Button = ({ children }) => {
  return <button style={buttonStyle}>{children}</button>;
};

export default Button;
