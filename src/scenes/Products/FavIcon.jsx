import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const FavIcon = ({ fav }) => {
  const [favColor, setFavColor] = useState(fav);

  const color = favColor
    ? "outline:#121331,primary:#ffffff,secondary:#e86830"
    : "outline:#121331,primary::#121331,secondary:#e86830";

  const handleFav = () => {
    setFavColor(!favColor);
    console.log("sirve");
  };

  return (
    <button
      onClick={handleFav}
      className="w-auto bg-white rounded-s-full rounded-e-full flex items-center "
    >
      <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
      <lord-icon 
        src="https://cdn.lordicon.com/hqrgkqvs.json"
        trigger="hover"
        colors={color}
        style={{ width: "30px", height: "30px" }}
      ></lord-icon>
    </button>
  );
};

FavIcon.propTypes = {
  fav: PropTypes.bool,
};

export default FavIcon;
