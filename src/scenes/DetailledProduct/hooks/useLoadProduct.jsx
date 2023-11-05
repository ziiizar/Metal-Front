import { useEffect, useState } from "react";
import { loadProductDetaill } from "../services/loadProductDetaill";

export function useLoadProduct(product_id) {
  const [productData, setProductData] = useState([]);
  const token = window.localStorage.getItem("token");


  useEffect(() => {
    const fetchData = async () => {
      const newProduct = await loadProductDetaill(token, product_id);
      setProductData(newProduct);
    };
    fetchData();
  }, [product_id]);
  return { productData };
}

export default useLoadProduct;
