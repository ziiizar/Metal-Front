import React from "react";
import CartItem from "./CartItem";
import { useCart } from "../../hooks/useCart.js";
import MakeOrderButton from "./MakeOrderButton";

const CartPage = () => {
  const { cart } = useCart();

  const isProductInCart = (producto) => {
    return cart.some((item) => item.id == producto.id);
  };

  return (
    <div>
      <ul className="">
        {cart.map((item, index) => (
          <li key={index}>
            <CartItem
              image={item.image}
              name={item.name}
              price={item.price}
              id={item.id}
            ></CartItem>
          </li>
        ))}
      </ul>
      <MakeOrderButton className="bg-black"></MakeOrderButton>
      <div className=""></div>
    </div>
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
