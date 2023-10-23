import React from "react";
import PropTypes from "prop-types";

const Button = (text) => {
  return <button className="bg-gray-800 p-2 rounded-md">{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
};
export default Button;
