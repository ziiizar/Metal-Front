import { useEffect, useState } from "react";
import { loadProductsInCart } from "../services/loadProductsInCart";

export default function useDetailledProductsInCart({ cart }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const newData = await loadProductsInCart( cart);
      setData(newData);
    };
    fetchData();
  }, [ cart]);

  return { data };
}
