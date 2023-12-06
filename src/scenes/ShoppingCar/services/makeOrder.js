import axios from "axios";

export async function makeOrder(token, orden, productsIds) {
  console.log(orden)
  console.log(productsIds)
  const resp = await axios.post(
    `http://127.0.0.1:8000/Users/Orden/NewOrden?orden=${orden}&products_ids=${productsIds}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return resp;
}


