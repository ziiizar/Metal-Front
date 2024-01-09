import { useEffect, useState } from "react";
import { getCart } from "../services/getCart";

export function useGetCart( user_id) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("efwe")
    getCart( user_id).then(setCart);
  }, [ user_id]);

  console.log("cart")
  console.log(cart)
  return { cart };
}

export default useGetCart;
