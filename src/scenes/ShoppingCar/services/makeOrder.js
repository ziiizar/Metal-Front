import axios from "axios";

export async function makeOrder(token, orden, products_ids) {
  const resp = await axios.post(
    "http://127.0.0.1:8000/Users/Orden/NewOrden",
    { orden, products_ids },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return resp
}
