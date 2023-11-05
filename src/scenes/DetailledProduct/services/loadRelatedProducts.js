import axios from "axios";

export const loadRelatedProducts = async (token, category) => {
  const resp = await axios.get(
    `http://127.0.0.1:8000/Products/Category/${category}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const setRelatedProducts = resp.data;
  return setRelatedProducts;
};