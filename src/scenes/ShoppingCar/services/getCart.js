import axios from "axios";


export async function getCart (token, user_id) {
    const resp = await axios.get(`http://127.0.0.1:8000/Cart/Get/${user_id}`,  {
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    const cart = resp.data
    return cart
  }