import React from "react";

const DetailledOrderCard = ({ image, price, name, id, children }) => {
  return (
    <article className="w-full h-[150px] flex gap-3  relative">
    <div className=" flex w-[40%] bg-gris place-content-center items-center rounded-md shadow-lg shadow-gris">
      <img className="w-[90%] h-[80%]" src={image} alt="" />
    </div>
    <div className="flex flex-col justify-between py-1">
      <h2>{name}</h2>
      <h5>Cantidad:{2}</h5>
      <h5>{price}</h5>
      {/* <span>{id}</span> */}
    </div>


  </article>
  );
};

export default DetailledOrderCard;
