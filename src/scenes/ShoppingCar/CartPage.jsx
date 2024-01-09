import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../../hooks/useCart.js";
import MakeOrderButton from "./MakeOrderButton";
import useGetCart from "./hooks/useGetCart";
import useDetailledProductsInCart from "./hooks/useDetailledProductsInCart";
import { Link } from "react-router-dom";
import HeaderMainFooterLayout from "../../Layouts/HeaderMainFooterLayout.jsx";
import { useLoged } from "../../store/logedStore.ts";

const CartPage = () => {
  // const { getCart } = useCart();
  // console.log(cart)
  // const isProductInCart = (producto) => {
  //   return cart.some((item) => item.id == producto.id);
  // };

  // const cart = getCart()
  // const token = window.localStorage.getItem("token");

  // const {token} = useLoged(state => state)
  const { cart } = useGetCart(1);
  const { data } = useDetailledProductsInCart({ cart: cart });

  return (
    <HeaderMainFooterLayout>
      <div className="flex flex-col h-auto min-h-[77vh] w-full place-content-center items-center gap-2 bg-fondo">
        <ul className="flex flex-col w-[90%] gap-2 ">
          {data.map((item, index) => (
            <li
              className="text-black border-b-[1px] border-black w-full pb-2 min-h-[150px]"
              key={index}
            >
              <CartItem image={item.image} name={item.name}>
                <div className="flex gap-2">
                  <button>+</button>
                  <strong>{item.quantity}</strong>
                  <button>-</button>
                </div>

                <strong>{item.price}</strong>
              </CartItem>
            </li>
          ))}
        </ul>
        <div className="text-black flex justify-between w-[90%]">
          <h5>TOTAL</h5>
          <strong>25.00CUP</strong>
        </div>

        <button className="bg-verde text-white w-[90%] rounded-full font-bold">
          <Link to={"/Checkout"}>Ordenar</Link>
        </button>
      </div>
    </HeaderMainFooterLayout>
  );
};

// return (
//   <ul className="flex flex-col">
//     {cart.map((item, index) => {

//     const inCart = isProductInCart(item)
//     return (
//       <li key={index}>
//         <CartItem
//           image={item.image}
//           name={item.name}
//           price={item.price}
//           id={item.id}
//         ></CartItem>
//       </li>
//     )

//   })}
//   </ul>

// );

export default CartPage;
