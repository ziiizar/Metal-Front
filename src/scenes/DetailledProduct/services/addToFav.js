import axios from "axios";

//TODO cambiar el axios por metalconf cuando se haga este metodo en el backend

export const addToFavs = async (token, product_id) => {
  
  const resp = await axios.put(
    `http://127.0.0.1:8000/Users/AddToFavs`,
    {product_id},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const [favs] = resp.data;
  return favs;
};