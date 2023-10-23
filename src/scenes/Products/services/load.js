import axios from "axios";

export const load = async () => {
  const resp = await axios.get("http://127.0.0.1:8000/Products", {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  const setProducts = resp.data;

  return setProducts;
};
