// import React from "react";
// import PropTypes from "prop-types";
// import { useState } from "react";
// import FavIcon from "./FavIcon";
// import { useCart } from "../../../../hooks/useCart";

// const ProductCard = ({
//   name,
//   category,
//   price,
//   initialOrderState,
//   image,
//   id,
// }) => {
//   const [isOrdened, setOrdened] = useState(initialOrderState);

//   const btnText = isOrdened ? "Eliminar del carrito" : "Agregar al carrito";

//   const color = isOrdened
//     ? "hover:bg-red-600 bg-gray-800 p-1 rounded-md transition-all "
//     : " hover:bg-slate-950 bg-gray-800 p-1 rounded-md transition-all ";

//   const { addToCart, removeFromCart, isOnCart } = useCart();

//   const handleClick = (i) => {
//     isOnCart(i)
//       ? (removeFromCart(i), setOrdened(false))
//       : (setOrdened(true), addToCart(i));
//   };

//   const item = {
//     image: image,
//     name: name,
//     price: price,
//     id: id,
//   };

//   return (
//     <article className=" flex flex-col  rounded-md  gap-2 shadow-xl  h-auto   w-auto">
//       <div className=" h-full  w-full ">
//         <div className=" h-[75%]  w-full ">
//           <img
//             src={image}
//             alt="evento"
//             className="h-full w-full rounded-t-md z-10 shrink "
//           />
//         </div>
//         <div className="w-full h-[25%] flex  justify-between  p-1  bg-orange-800 rounded-b-md shadow-xl">
//           <div className="flex flex-col justify-between">
//             <span className=" font-mono font-bold text-2xl max-sm:text-sm hyphens-auto text-black">
//               {name}
//             </span>
//             <span className="max-sm:text-sm font-bold"> ${price}</span>
//             <span className="max-sm:text-sm font-bold"> {category}</span>
//             {/* <!-- Establecer limite de caracteres a 70 aprox  --> */}
//           </div>
//           <div className="flex  mr-6 items-end">
//             <button
//               className={color}
//               onClick={() => {
//                 handleClick(item);
//               }}
//             >
//               {btnText}
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// ProductCard.propTypes = {
//   name: PropTypes.string,
//   price: PropTypes.number,
//   description: PropTypes.string,
//   category: PropTypes.string,
//   btnText: PropTypes.string,
//   image: PropTypes.string,
//   id: PropTypes.string,
//   initialOrderState: PropTypes.bool,
// };

// export default ProductCard;

import PropTypes from "prop-types";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../../../services/addToCart";

const ProductCard = ({ name, image, description, price, btnIcon, id, color }) => {
  const [isOrdened, setOrdened] = useState(false);
  const navigate = useNavigate();
  // const { addToCart, removeFromCart, isOnCart, cart } = useCart();
  const token = window.localStorage.getItem("token");

  const item = {
    image: image,
    name: name,
    price: price,
    product_id: id,
  };

  const handleClickCart = (token, product_id, user_id, quantity) => {
    // isOnCart(i)
    //   ? (removeFromCart(i), setOrdened(false))
    //   :
    // (setOrdened(true),
    addToCart( token, product_id, user_id, quantity);
    // console.log(cart);
  };

  const handleClick = () => {
    navigate(`/Products/${id}`);
  };
  return (
    <article className=" flex flex-col  h-full  w-full  rounded-md place-content-center items-center gap-2">
      <div
        onClick={handleClick}
        className={`h-[80%] ${color} w-full flex place-content-center items-center shadow-md shadow-gris rounded-xl`}
      >
        <img src={image} alt="evento" className="h-[80%] md:w-[60%] w-[85%] " />
      </div>
      <div className="w-full h-[20%] flex  bg-inherit  justify-between p-1  gap-1 place-content-center">
        <div className="flex flex-col gap-2 w-[30%]  ">
          <h4 className=" font-sans font-bold text-12 h-[70%]">
            {name}
          </h4>
          <strong className="text-8 h-[30%]">{price}CUP</strong>
        </div>

        {/* <div className="flex justify-between ">
          <span className="text-8">{price}CUP</span>
          <button >
<Link to={`/Products/${id}`}> <img src="/assets/Vector.png" alt="" /></Link>
           
          </button>
        </div> */}
        <div className="flex place-content-center items-center relative">
          <button
            onClick={() =>{

              handleClickCart(token,product_id,user_id,id)
            }
            }
            className=" carrito flex place-content-center items-center h-[45px] w-[45px]"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              fill="none"
              viewBox="0 0 24 25"
            >
              <path
                fill="#fff"
                d="M20.756 5.845A1.003 1.003 0 0020 5.5H6.181l-.195-1.164A1 1 0 005 3.5H2.75a1 1 0 000 2h1.403l1.86 11.164.045.124.054.151.12.179.095.112.193.13.112.065a.97.97 0 00.367.075H18a1 1 0 000-2H7.847l-.166-1H19a1 1 0 00.99-.858l1-7a1.002 1.002 0 00-.234-.797zM18.847 7.5l-.285 2H15v-2h3.847zM14 7.5v2h-3v-2h3zm0 3v2h-3v-2h3zm-4-3v2H7l-.148.03-.338-2.03H10zm-2.986 3H10v2H7.347l-.333-2zm7.986 2v-2h3.418l-.285 2H15zM8.5 21.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM17.5 21.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  btnText: PropTypes.string,
};

export default ProductCard;
