import axios, { Axios } from "axios";



export async function addToCart (token, product_id, user_id, quantity)  {
  console.log(token, product_id, user_id, quantity)
    const resp = await axios.post(
      `http://127.0.0.1:8000/Cart/Add?user_id=${user_id}&product_id=${product_id}&quantity=${quantity}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const addedProduct = resp.data;
    return addedProduct;
  }