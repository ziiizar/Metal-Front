import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const CategorieButton = ({ text }) => {
  const filtro = async () => {
    let algo = axios.get("http://127.0.0.1:8000/");
    console.log(algo);
  };

  return (
    <button
      onClick={filtro}
      className="p-2 h-3/4 bg-orange-400 hover:bg-orange-800 transition-all rounded-full max-sm:hidden"
    >
      {text}
    </button>
  );
};

CategorieButton.propTypes = {
  text: PropTypes.string,
};

export default CategorieButton;
