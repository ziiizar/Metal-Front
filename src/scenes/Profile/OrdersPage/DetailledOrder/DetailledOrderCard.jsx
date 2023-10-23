import React from "react";

const DetailledOrderCard = ({ image, price, name }) => {
  return (
    <div className="flex flex-col">
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default DetailledOrderCard;
