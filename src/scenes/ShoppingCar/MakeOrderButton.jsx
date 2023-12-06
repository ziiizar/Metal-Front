// import { useMakeOrder } from "./hooks/useMakeOrder"

import { useCart } from "../../hooks/useCart";
import { makeOrder } from "./services/makeOrder";
import { useState } from "react";
import { Link } from "react-router-dom";

const MakeOrderButton = () => {
  const token = window.localStorage.getItem("token");
  const { cart, clearCart } = useCart();
  // console.log(cart);


  return <button className="bg-verde text-white w-[90%] rounded-full font-bold" ><Link to={"/Checkout"}>Ordenar</Link></button>;
};

export default MakeOrderButton;
