import axios from "axios";

export const loadProductDetaill = async (token, product_id) => {
  const resp = await axios.get(
    `http://127.0.0.1:8000/api/Products/${product_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const setProductDetaill = resp.data;
  return setProductDetaill;
};