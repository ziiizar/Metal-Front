import { useEffect, useState } from "react";
import { loadRelatedProducts } from "../services/loadRelatedProducts";

export function useRelatedProducts(category) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const token = window.localStorage.getItem("token");


  useEffect(() => {
    const fetchData = async () => {
      const newProduct = await loadRelatedProducts(token, category);
      setRelatedProducts(newProduct);
    };
    fetchData();
  }, [category]);
  return { relatedProducts };
}

export default useRelatedProducts;
