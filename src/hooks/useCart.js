import { useContext } from "react";
import { CartContext } from "../context/Cart";
import { useState } from "react";
import axios from "axios";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  const isOnCart = (producto) => {
    return cart.some((item) => item.id == producto.id);
  };

  // const addToCart = (producto) => {

  //     setCart(prevState => ([...prevState,{...producto, cantidad:1}]))
  //     console.log("agregado")
  //     return cart

  // }

  const getCart = async (token, user_id) => {
    const resp = await axios.get(`http://127.0.0.1:8000/Cart/Get`, {user_id},  {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    const cart = resp.data
    return cart
  }

  const addToCart = async (token, product_id, user_id, quantity) => {
    const resp = await axios.post(
      `http://127.0.0.1:8000/Cart/Add/`,
     { params: {
        product_id: product_id,
        user_id: user_id,
        quantity: quantity,
      }},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const addedProduct = resp.data;
    return addedProduct;
  };

  const removeFromCart = (producto) => {
    setCart((prevState) => prevState.filter((item) => item.id != producto.id));
    return cart;
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, setCart, clearCart, addToCart, removeFromCart, isOnCart, getCart };
};
