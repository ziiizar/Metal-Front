import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ date, estado, id }) => {
  return (
    <article className="flex border-2 border-gray-900 justify-evenly">
      <div>
        <h3>{id}</h3>
        <h3>{estado}</h3>
        <h3>{date}</h3>
      </div>

      <button className="bg-green-700">
        <Link to={`/MyProfile/Orders/Detail/${id}`}>Detalles</Link>
      </button>
    </article>
  );
};

export default OrderCard;
