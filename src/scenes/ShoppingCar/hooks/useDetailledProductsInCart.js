import { useEffect, useState } from "react";
import { loadProductsInCart } from "../services/loadProductsInCart";

export default function useDetailledProductsInCart({ cart }) {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const newData = await loadProductsInCart(token, cart);
      setData(newData);
    };
    fetchData();
  }, [token, cart]);

  return { data };
}
