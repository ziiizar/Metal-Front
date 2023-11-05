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
      className="py-1 px-2 h-[60%] bg-gray-400 hover:bg-black transition-all rounded-md flex place-content-center items-center"
    >
      {text}
    </button>
  );
};

CategorieButton.propTypes = {
  text: PropTypes.string,
};

export default CategorieButton;
