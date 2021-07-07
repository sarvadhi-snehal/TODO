import React from "react";
import PropTypes from "prop-types";
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
Button.defaultProps = {
  texr: "Add",
};

Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
