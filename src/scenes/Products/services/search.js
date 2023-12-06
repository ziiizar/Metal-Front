import axios from "axios";

export const search = async (query) => {
  const resp = await axios.get(`http://127.0.0.1:8000/Products/Name/${query}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  const setProducts = resp.data;

  return setProducts;
};
