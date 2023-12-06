import { useEffect, useState } from "react";
import { getCart } from "../services/getCart";

export function useGetCart(token, user_id) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // console.log("efwe")
    getCart(token, user_id).then(setCart);
  }, [token, user_id]);

  console.log("cart")
  console.log(cart)
  return { cart };
}

export default useGetCart;
