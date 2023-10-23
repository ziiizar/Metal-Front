import { useEffect, useState } from "react";
import { load } from "../services/load";

export function useLoadProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // console.log("efwe")
    load().then(setProducts);
  }, []);

  return { products };
}

export default useLoadProducts;
