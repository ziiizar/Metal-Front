import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import FavIcon from "./FavIcon";
import { useCart } from "../../../../hooks/useCart";

const ProductCard = ({
  name,
  category,
  price,
  initialOrderState,
  image,
  id,
}) => {
  const [isOrdened, setOrdened] = useState(initialOrderState);

  const btnText = isOrdened ? "Eliminar del carrito" : "Agregar al carrito";

  const color = isOrdened
    ? "hover:bg-red-600 bg-gray-800 p-1 rounded-md transition-all "
    : " hover:bg-slate-950 bg-gray-800 p-1 rounded-md transition-all ";

  const { addToCart, removeFromCart, isOnCart } = useCart();

  const handleClick = (i) => {
    isOnCart(i)
      ? (removeFromCart(i), setOrdened(false))
      : (setOrdened(true), addToCart(i));
  };

  const item = {
    image: image,
    name: name,
    price: price,
    id: id,
  };

  return (
    <article className=" flex flex-col  rounded-md  gap-2 shadow-xl  h-auto   w-auto">
      <div className=" h-full  w-full ">
        <div className=" h-[75%]  w-full ">
          <img
            src={image}
            alt="evento"
            className="h-full w-full rounded-t-md z-10 shrink "
          />
        </div>
        <div className="w-full h-[25%] flex  justify-between  p-1  bg-orange-800 rounded-b-md shadow-xl">
          <div className="flex flex-col justify-between">
            <span className=" font-mono font-bold text-2xl max-sm:text-sm hyphens-auto text-black">
              {name}
            </span>
            <span className="max-sm:text-sm font-bold"> ${price}</span>
            <span className="max-sm:text-sm font-bold"> {category}</span>
            {/* <!-- Establecer limite de caracteres a 70 aprox  --> */}
          </div>
          <div className="flex  mr-6 items-end">
            <button
              className={color}
              onClick={() => {
                handleClick(item);
              }}
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  btnText: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  initialOrderState: PropTypes.bool,
};

export default ProductCard;
